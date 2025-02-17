---
title: Service Level Agreement for TiDB Cloud Services
summary: The service level agreement applies to your use of TiDB Cloud Services.
---

# Service Level Agreement for TiDB Cloud Services

**Last updated on May 8, 2021**

This Service Level Agreement (SLA) applies only to TiDB Cloud Services production clusters.

**1. Definitions**

<div class="customize-indentation">

- 1.1 <span>**"Month"** refers to the calendar month.</span>

- 1.2 <span>**"Monthly Uptime Percentage"** is calculated per TiDB Cloud cluster on a monthly basis and is calculated as: (Total Minutes in Month - Unavailable Minutes in Month) ÷ Total Minutes in Month × 100%.</span>

- 1.3 <span>**"Unavailable Minutes in Month"** is the total number of minutes that a single TiDB Cloud cluster is unavailable in a monthly billing cycle. If all attempts to establish connections to the cluster fail within one (1) minute, the minute is considered unavailable. A TiDB Cloud cluster deployed in part of the month is assumed to be 100% available during the undeployed part of the month.</span>

- 1.4 <span>**"Monthly Service Fee"** means the total fee you paid for a particular TiDB Cloud cluster in the month.</span>

- 1.5 <span>**"Service Credit"** is the percentage of the monthly service fee to be credited to you if PingCAP approves your claim.</span>

</div>

**2. Service Commitment**

<div class="customize-indentation">

- 2.1 <span>PingCAP will use commercially reasonable efforts to make TiDB Cloud clusters available with a monthly uptime percentage of at least 99% during any monthly billing cycle.</span>

</div>

**3. Service Credit**

<div class="customize-indentation">

- 3.1 <span>If PingCAP does not achieve and maintain the Monthly Uptime Percentages, then you may be eligible for a service credit as described below.</span>

<ul class="customize-indentation">

- | Monthly Uptime Percentage                      | Service Credit |
  | :--------------------------------------------- | :------------- |
  | Less than 99% but equal to or greater than 95% | 10%            |
  | Less than 95% but equal to or greater than 90% | 25%            |
  | Less than 90%                                  | 100%           |

</ul>

</div>

**4. Credit Request**

<div class="customize-indentation">

- 4.1 <span>To receive a service credit, you must submit a claim by submitting a Credit Request through the TiDB Cloud Support Center. To be eligible, the Credit Request must be received by PingCAP by the end of the second billing cycle after the incident occurred. The necessary information for the Credit Request must include:</span>

<ul class="customize-indentation">

- 4.1.1. <span>A detailed description of the event that caused the service unavailable;</span>

- 4.1.2. <span>Downtime and duration;</span>

- 4.1.3. <span>Descriptions of your attempts to resolve the downtime at the time of occurrence.</span>

</ul>

- 4.2 <span>If PingCAP confirms that the Monthly Uptime Percentage is less than the service commitment, PingCAP will issue the Service Credit to you within one (1) billing cycle following the month in which the request occurred. If the submission is overdue, or you fail to provide the necessary information, you will lose your eligibility for the Service Credits. Service Credits must not be transferred or used in any other account.</span>

</div>

**5. Limitations**

<div class="customize-indentation">

- 5.1 <span>**"Minutes Unavailable in Month"** does not include, and you will not be eligible for a Service Credit for, any performance or availability issue that results from:</span>

<ul class="customize-indentation">

- 5.1.1. <span>Force majeure, such as natural disasters, wars, terrorist acts, riots, government actions, etc.;</span>

- 5.1.2. <span>Network or equipment failure between your site and the TiDB Cloud;</span>

- 5.1.3. <span>Scheduled maintenance, including but not limited to the system upgrade, maintenance, etc., that PingCAP provides advance notice;</span>

- 5.1.4. <span>Caused by the Cloud Providers, including but not limited to their network, hardware, software failure and system maintenance;</span>

- 5.1.5. <span>An attack on your application;</span>

- 5.1.6. <span>Your program read/write exceeds the system load;</span>

- 5.1.7. <span>Loss or leakage of data, passwords or passwords caused by you;</span>

- 5.1.8. <span>You have not followed TiDB Cloud product usage documentation or usage recommendations;</span>

- 5.1.9. <span>You have not followed appropriate safety practices.</span>

</ul>

</div>

**6. Modification to the SLA**

<div class="customize-indentation">

- 6.1 <span>PingCAP will provide at least sixty (60) days' advance notice for any adverse changes to this SLA. If you disagree with PingCAP's changes to the SLA, you have the right to stop using the TiDB Cloud Services, and if you continue to use the TiDB Cloud Services, you are deemed to have accepted the modified SLA.</span>

</div>
