const path = require('path')
const replaceTitle = require('./utils').replaceTitle
const langConfig = require('../lang.config.json')

const createCaseStudies = async ({ graphql, createPage, createRedirect }) => {
  const caseStudyTemplate = path.resolve(
    `${__dirname}/../src/templates/caseStudy.js`
  )
  const { data } = await graphql(`
    query {
      caseStudies: allMdx(
        filter: {
          fileAbsolutePath: { regex: "${langConfig.languages.en.blogsPath}" }
          frontmatter: { customer: { ne: null } }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              customerCategory
              redirectTag
              aliases
            }
            parent {
              ... on File {
                relativePath
              }
            }
          }
        }
      }
      caseStudiesWithoutReadMore: allCaseStudiesJson {
        edges {
          node {
            name
          }
        }
      }
      categories: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${langConfig.languages.en.blogsPath}"}
            frontmatter: { customer: { ne: null } }
          }
        ) {
          industries: group(field: frontmatter___customerCategory) {
            industry: fieldValue
            totalCount: totalCount
          }
          companies: group(field: frontmatter___customer) {
            company: fieldValue
            totalCount: totalCount
          }
          tags: group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount: totalCount
          }
      }
    }
  `)

  const industries = data.categories.industries
    .sort((a, b) => b['totalCount'] - a['totalCount'])
    .map((node) => node['industry'])
  const companies = data.categories.companies
    .sort((a, b) => b['totalCount'] - a['totalCount'])
    .map((node) => node['company'])
  const tags = data.categories.tags
    .sort((a, b) => b['totalCount'] - a['totalCount'])
    .map((node) => node['tag'])

  data.caseStudies.edges.forEach(({ node }) => {
    const _path = `case-studies/${replaceTitle(node.parent.relativePath)}`
    createPage({
      path: _path,
      component: caseStudyTemplate,
      context: {
        title: node.frontmatter.title,
        industries,
        companies,
        tags,
        language: 'en',
        ...langConfig.languages['en'],
      },
    })

    // create redirect
    if (node.frontmatter.aliases) {
      const aliasesArr = node.frontmatter.aliases

      aliasesArr.forEach((alias) => {
        createRedirect({
          fromPath: `${alias}`,
          toPath: _path,
          isPermanent: true,
        })
      })
    }

    if (node.frontmatter.redirectTag) {
      const redirectTagArr = node.frontmatter.redirectTag

      redirectTagArr.forEach((tag) => {
        createRedirect({
          fromPath: `/case-studies/category/tags/${tag}`,
          toPath: '/case-studies',
          isPermanent: true,
        })
      })
    }
  })

  const categoriesOfStudies = [
    ...new Set(
      data.caseStudies.edges
        .map(({ node }) => node.frontmatter.customerCategory || 'All')
        .concat(
          data.caseStudiesWithoutReadMore.edges.map(({ node }) => node.name),
          'All'
        )
    ),
  ]
  categoriesOfStudies.forEach((c) => {
    const pagePath = `case-studies/${c.split(' ').join('-')}`

    createPage({
      path: pagePath,
      matchPath: pagePath,
      component: path.resolve(`${__dirname}/../src/pages/case-studies.js`),
      context: {
        language: 'en',
        ...langConfig.languages['en'],
      },
    })
  })
}

module.exports = createCaseStudies
