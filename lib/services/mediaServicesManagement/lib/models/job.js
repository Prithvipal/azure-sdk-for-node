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

const models = require('./index');

/**
 * A Job resource type. The progress and state can be obtained by polling a Job
 * or subscribing to events using EventGrid.
 *
 * @extends models['ProxyResource']
 */
class Job extends models['ProxyResource'] {
  /**
   * Create a Job.
   * @property {date} [created] The UTC date and time when the Job was created,
   * in 'YYYY-MM-DDThh:mm:ssZ' format.
   * @property {string} [state] The current state of the job. Possible values
   * include: 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing',
   * 'Queued', 'Scheduled'
   * @property {string} [description] Optional customer supplied description of
   * the Job.
   * @property {object} input The inputs for the Job.
   * @property {string} [input.odatatype] Polymorphic Discriminator
   * @property {date} [lastModified] The UTC date and time when the Job was
   * last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
   * @property {array} outputs The outputs for the Job.
   * @property {string} [priority] Priority with which the job should be
   * processed. Higher priority jobs are processed before lower priority jobs.
   * If not set, the default is normal. Possible values include: 'Low',
   * 'Normal', 'High'
   * @property {object} [correlationData] Customer provided correlation data
   * that will be returned in Job and JobOutput state events.
   */
  constructor() {
    super();
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
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          state: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          input: {
            required: true,
            serializedName: 'properties.input',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'JobInput',
              className: 'JobInput'
            }
          },
          lastModified: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.lastModified',
            type: {
              name: 'DateTime'
            }
          },
          outputs: {
            required: true,
            serializedName: 'properties.outputs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobOutputElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'JobOutput',
                    className: 'JobOutput'
                  }
              }
            }
          },
          priority: {
            required: false,
            serializedName: 'properties.priority',
            type: {
              name: 'String'
            }
          },
          correlationData: {
            required: false,
            serializedName: 'properties.correlationData',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
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