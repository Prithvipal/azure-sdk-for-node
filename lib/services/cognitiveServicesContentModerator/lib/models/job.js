/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The Job object.
 *
 */
class Job {
  /**
   * Create a Job.
   * @property {string} [id] The job id.
   * @property {string} [teamName] The team name associated with the job.
   * @property {string} [status] The status string (<Pending, Failed,
   * Completed>).
   * @property {string} [workflowId] The Id of the workflow.
   * @property {string} [type] Type of the content.
   * @property {string} [callBackEndpoint] The callback endpoint.
   * @property {string} [reviewId] Review Id if one is created.
   * @property {array} [resultMetaData] Array of KeyValue pairs.
   * @property {array} [jobExecutionReport] Job execution report- Array of
   * KeyValue pairs object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Job
   *
   * @returns {object} metadata of Job
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Job',
      type: {
        name: 'Composite',
        className: 'Job',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'String'
            }
          },
          teamName: {
            required: false,
            serializedName: 'TeamName',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'Status',
            type: {
              name: 'String'
            }
          },
          workflowId: {
            required: false,
            serializedName: 'WorkflowId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'Type',
            type: {
              name: 'String'
            }
          },
          callBackEndpoint: {
            required: false,
            serializedName: 'CallBackEndpoint',
            type: {
              name: 'String'
            }
          },
          reviewId: {
            required: false,
            serializedName: 'ReviewId',
            type: {
              name: 'String'
            }
          },
          resultMetaData: {
            required: false,
            serializedName: 'ResultMetaData',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'KeyValuePair'
                  }
              }
            }
          },
          jobExecutionReport: {
            required: false,
            serializedName: 'JobExecutionReport',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobExecutionReportDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobExecutionReportDetails'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Job;