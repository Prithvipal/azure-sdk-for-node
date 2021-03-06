/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the PolicyEvent class.
 * @constructor
 * Policy event record.
 *
 * @member {string} [odataid] OData entity ID; always set to null since policy
 * event records do not have an entity ID.
 * @member {string} [odatacontext] OData context string; used by OData clients
 * to resolve type information based on metadata.
 * @member {date} [timestamp] Timestamp for the policy event record.
 * @member {string} [resourceId] Resource ID.
 * @member {string} [policyAssignmentId] Policy assignment ID.
 * @member {string} [policyDefinitionId] Policy definition ID.
 * @member {string} [effectiveParameters] Effective parameters for the policy
 * assignment.
 * @member {boolean} [isCompliant] Flag which states whether the resource is
 * compliant against the policy assignment it was evaluated against.
 * @member {string} [subscriptionId] Subscription ID.
 * @member {string} [resourceType] Resource type.
 * @member {string} [resourceLocation] Resource location.
 * @member {string} [resourceGroup] Resource group name.
 * @member {string} [resourceTags] List of resource tags.
 * @member {string} [policyAssignmentName] Policy assignment name.
 * @member {string} [policyAssignmentOwner] Policy assignment owner.
 * @member {string} [policyAssignmentParameters] Policy assignment parameters.
 * @member {string} [policyAssignmentScope] Policy assignment scope.
 * @member {string} [policyDefinitionName] Policy definition name.
 * @member {string} [policyDefinitionAction] Policy definition action, i.e.
 * effect.
 * @member {string} [policyDefinitionCategory] Policy definition category.
 * @member {string} [policySetDefinitionId] Policy set definition ID, if the
 * policy assignment is for a policy set.
 * @member {string} [policySetDefinitionName] Policy set definition name, if
 * the policy assignment is for a policy set.
 * @member {string} [policySetDefinitionOwner] Policy set definition owner, if
 * the policy assignment is for a policy set.
 * @member {string} [policySetDefinitionCategory] Policy set definition
 * category, if the policy assignment is for a policy set.
 * @member {string} [policySetDefinitionParameters] Policy set definition
 * parameters, if the policy assignment is for a policy set.
 * @member {string} [managementGroupIds] Comma seperated list of management
 * group IDs, which represent the hierarchy of the management groups the
 * resource is under.
 * @member {string} [policyDefinitionReferenceId] Reference ID for the policy
 * definition inside the policy set, if the policy assignment is for a policy
 * set.
 * @member {string} [tenantId] Tenant ID for the policy event record.
 * @member {string} [principalOid] Principal object ID for the user who
 * initiated the resource operation that triggered the policy event.
 */
export interface PolicyEvent {
  odataid?: string;
  odatacontext?: string;
  timestamp?: Date;
  resourceId?: string;
  policyAssignmentId?: string;
  policyDefinitionId?: string;
  effectiveParameters?: string;
  isCompliant?: boolean;
  subscriptionId?: string;
  resourceType?: string;
  resourceLocation?: string;
  resourceGroup?: string;
  resourceTags?: string;
  policyAssignmentName?: string;
  policyAssignmentOwner?: string;
  policyAssignmentParameters?: string;
  policyAssignmentScope?: string;
  policyDefinitionName?: string;
  policyDefinitionAction?: string;
  policyDefinitionCategory?: string;
  policySetDefinitionId?: string;
  policySetDefinitionName?: string;
  policySetDefinitionOwner?: string;
  policySetDefinitionCategory?: string;
  policySetDefinitionParameters?: string;
  managementGroupIds?: string;
  policyDefinitionReferenceId?: string;
  tenantId?: string;
  principalOid?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the PolicyEventsQueryResults class.
 * @constructor
 * Query results.
 *
 * @member {string} [odatacontext] OData context string; used by OData clients
 * to resolve type information based on metadata.
 * @member {number} [odatacount] OData entity count; represents the number of
 * policy event records returned.
 * @member {array} [value] Query results.
 */
export interface PolicyEventsQueryResults {
  odatacontext?: string;
  odatacount?: number;
  value?: PolicyEvent[];
}

/**
 * @class
 * Initializes a new instance of the QueryFailureError class.
 * @constructor
 * Error definition.
 *
 * @member {string} [code] Service specific error code which serves as the
 * substatus for the HTTP error code.
 * @member {string} [message] Description of the error.
 */
export interface QueryFailureError {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the QueryFailure class.
 * @constructor
 * Error response.
 *
 * @member {object} [error] Error definition.
 * @member {string} [error.code] Service specific error code which serves as
 * the substatus for the HTTP error code.
 * @member {string} [error.message] Description of the error.
 */
export interface QueryFailure {
  error?: QueryFailureError;
}

/**
 * @class
 * Initializes a new instance of the PolicyState class.
 * @constructor
 * Policy state record.
 *
 * @member {string} [odataid] OData entity ID; always set to null since policy
 * state records do not have an entity ID.
 * @member {string} [odatacontext] OData context string; used by OData clients
 * to resolve type information based on metadata.
 * @member {date} [timestamp] Timestamp for the policy state record.
 * @member {string} [resourceId] Resource ID.
 * @member {string} [policyAssignmentId] Policy assignment ID.
 * @member {string} [policyDefinitionId] Policy definition ID.
 * @member {string} [effectiveParameters] Effective parameters for the policy
 * assignment.
 * @member {boolean} [isCompliant] Flag which states whether the resource is
 * compliant against the policy assignment it was evaluated against.
 * @member {string} [subscriptionId] Subscription ID.
 * @member {string} [resourceType] Resource type.
 * @member {string} [resourceLocation] Resource location.
 * @member {string} [resourceGroup] Resource group name.
 * @member {string} [resourceTags] List of resource tags.
 * @member {string} [policyAssignmentName] Policy assignment name.
 * @member {string} [policyAssignmentOwner] Policy assignment owner.
 * @member {string} [policyAssignmentParameters] Policy assignment parameters.
 * @member {string} [policyAssignmentScope] Policy assignment scope.
 * @member {string} [policyDefinitionName] Policy definition name.
 * @member {string} [policyDefinitionAction] Policy definition action, i.e.
 * effect.
 * @member {string} [policyDefinitionCategory] Policy definition category.
 * @member {string} [policySetDefinitionId] Policy set definition ID, if the
 * policy assignment is for a policy set.
 * @member {string} [policySetDefinitionName] Policy set definition name, if
 * the policy assignment is for a policy set.
 * @member {string} [policySetDefinitionOwner] Policy set definition owner, if
 * the policy assignment is for a policy set.
 * @member {string} [policySetDefinitionCategory] Policy set definition
 * category, if the policy assignment is for a policy set.
 * @member {string} [policySetDefinitionParameters] Policy set definition
 * parameters, if the policy assignment is for a policy set.
 * @member {string} [managementGroupIds] Comma seperated list of management
 * group IDs, which represent the hierarchy of the management groups the
 * resource is under.
 * @member {string} [policyDefinitionReferenceId] Reference ID for the policy
 * definition inside the policy set, if the policy assignment is for a policy
 * set.
 */
export interface PolicyState {
  odataid?: string;
  odatacontext?: string;
  timestamp?: Date;
  resourceId?: string;
  policyAssignmentId?: string;
  policyDefinitionId?: string;
  effectiveParameters?: string;
  isCompliant?: boolean;
  subscriptionId?: string;
  resourceType?: string;
  resourceLocation?: string;
  resourceGroup?: string;
  resourceTags?: string;
  policyAssignmentName?: string;
  policyAssignmentOwner?: string;
  policyAssignmentParameters?: string;
  policyAssignmentScope?: string;
  policyDefinitionName?: string;
  policyDefinitionAction?: string;
  policyDefinitionCategory?: string;
  policySetDefinitionId?: string;
  policySetDefinitionName?: string;
  policySetDefinitionOwner?: string;
  policySetDefinitionCategory?: string;
  policySetDefinitionParameters?: string;
  managementGroupIds?: string;
  policyDefinitionReferenceId?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the PolicyStatesQueryResults class.
 * @constructor
 * Query results.
 *
 * @member {string} [odatacontext] OData context string; used by OData clients
 * to resolve type information based on metadata.
 * @member {number} [odatacount] OData entity count; represents the number of
 * policy state records returned.
 * @member {array} [value] Query results.
 */
export interface PolicyStatesQueryResults {
  odatacontext?: string;
  odatacount?: number;
  value?: PolicyState[];
}

/**
 * @class
 * Initializes a new instance of the SummaryResults class.
 * @constructor
 * Non-compliance summary on a particular summary level.
 *
 * @member {string} [queryResultsUri] HTTP POST URI for queryResults action on
 * Microsoft.PolicyInsights to retrieve raw results for the non-compliance
 * summary.
 * @member {number} [nonCompliantResources] Number of non-compliant resources.
 * @member {number} [nonCompliantPolicies] Number of non-compliant policies.
 */
export interface SummaryResults {
  queryResultsUri?: string;
  nonCompliantResources?: number;
  nonCompliantPolicies?: number;
}

/**
 * @class
 * Initializes a new instance of the PolicyDefinitionSummary class.
 * @constructor
 * Policy definition summary.
 *
 * @member {string} [policyDefinitionId] Policy definition ID.
 * @member {string} [effect] Policy effect, i.e. policy definition action.
 * @member {object} [results] Non-compliance summary for the policy definition.
 * @member {string} [results.queryResultsUri] HTTP POST URI for queryResults
 * action on Microsoft.PolicyInsights to retrieve raw results for the
 * non-compliance summary.
 * @member {number} [results.nonCompliantResources] Number of non-compliant
 * resources.
 * @member {number} [results.nonCompliantPolicies] Number of non-compliant
 * policies.
 */
export interface PolicyDefinitionSummary {
  policyDefinitionId?: string;
  effect?: string;
  results?: SummaryResults;
}

/**
 * @class
 * Initializes a new instance of the PolicyAssignmentSummary class.
 * @constructor
 * Policy assignment summary.
 *
 * @member {string} [policyAssignmentId] Policy assignment ID.
 * @member {string} [policySetDefinitionId] Policy set definition ID, if the
 * policy assignment is for a policy set.
 * @member {object} [results] Non-compliance summary for the policy assignment.
 * @member {string} [results.queryResultsUri] HTTP POST URI for queryResults
 * action on Microsoft.PolicyInsights to retrieve raw results for the
 * non-compliance summary.
 * @member {number} [results.nonCompliantResources] Number of non-compliant
 * resources.
 * @member {number} [results.nonCompliantPolicies] Number of non-compliant
 * policies.
 * @member {array} [policyDefinitions] Policy definitions summary.
 */
export interface PolicyAssignmentSummary {
  policyAssignmentId?: string;
  policySetDefinitionId?: string;
  results?: SummaryResults;
  policyDefinitions?: PolicyDefinitionSummary[];
}

/**
 * @class
 * Initializes a new instance of the Summary class.
 * @constructor
 * Summary results.
 *
 * @member {string} [odataid] OData entity ID; always set to null since
 * summaries do not have an entity ID.
 * @member {string} [odatacontext] OData context string; used by OData clients
 * to resolve type information based on metadata.
 * @member {object} [results] Non-compliance summary for all policy
 * assignments.
 * @member {string} [results.queryResultsUri] HTTP POST URI for queryResults
 * action on Microsoft.PolicyInsights to retrieve raw results for the
 * non-compliance summary.
 * @member {number} [results.nonCompliantResources] Number of non-compliant
 * resources.
 * @member {number} [results.nonCompliantPolicies] Number of non-compliant
 * policies.
 * @member {array} [policyAssignments] Policy assignments summary.
 */
export interface Summary {
  odataid?: string;
  odatacontext?: string;
  results?: SummaryResults;
  policyAssignments?: PolicyAssignmentSummary[];
}

/**
 * @class
 * Initializes a new instance of the SummarizeResults class.
 * @constructor
 * Summarize action results.
 *
 * @member {string} [odatacontext] OData context string; used by OData clients
 * to resolve type information based on metadata.
 * @member {number} [odatacount] OData entity count; represents the number of
 * summaries returned; always set to 1.
 * @member {array} [value] Summarize action results.
 */
export interface SummarizeResults {
  odatacontext?: string;
  odatacount?: number;
  value?: Summary[];
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * Display metadata associated with the operation.
 *
 * @member {string} [provider] Resource provider name.
 * @member {string} [resource] Resource name on which the operation is
 * performed.
 * @member {string} [operation] Operation name.
 * @member {string} [description] Operation description.
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Operation definition.
 *
 * @member {string} [name] Operation name.
 * @member {object} [display] Display metadata associated with the operation.
 * @member {string} [display.provider] Resource provider name.
 * @member {string} [display.resource] Resource name on which the operation is
 * performed.
 * @member {string} [display.operation] Operation name.
 * @member {string} [display.description] Operation description.
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the OperationsListResults class.
 * @constructor
 * List of available operations.
 *
 * @member {number} [odatacount] OData entity count; represents the number of
 * operations returned.
 * @member {array} [value] List of available operations.
 */
export interface OperationsListResults {
  odatacount?: number;
  value?: Operation[];
}

/**
 * @class
 * Initializes a new instance of the QueryOptions class.
 * @constructor
 * Additional parameters for a set of operations.
 *
 * @member {number} [top] Maximum number of records to return.
 * @member {string} [orderBy] Ordering expression using OData notation. One or
 * more comma-separated column names with an optional "desc" (the default) or
 * "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @member {string} [select] Select expression using OData notation. Limits the
 * columns on each record to just those requested, e.g.
 * "$select=PolicyAssignmentId, ResourceId".
 * @member {date} [from] ISO 8601 formatted timestamp specifying the start time
 * of the interval to query. When not specified, the service uses ($to -
 * 1-day).
 * @member {date} [to] ISO 8601 formatted timestamp specifying the end time of
 * the interval to query. When not specified, the service uses request time.
 * @member {string} [filter] OData filter expression.
 * @member {string} [apply] OData apply expression for aggregations.
 */
export interface QueryOptions {
  top?: number;
  orderBy?: string;
  select?: string;
  from?: Date;
  to?: Date;
  filter?: string;
  apply?: string;
}

