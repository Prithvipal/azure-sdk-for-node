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
 * Deployed Service Health Report Expired event.
 *
 * @extends models['ApplicationEvent']
 */
class DeployedServiceHealthReportExpiredEvent extends models['ApplicationEvent'] {
  /**
   * Create a DeployedServiceHealthReportExpiredEvent.
   * @property {string} serviceManifest Service manifest name.
   * @property {number} servicePackageInstanceId Id of Service package
   * instance.
   * @property {string} servicePackageActivationId Id of Service package
   * activation.
   * @property {string} nodeName The name of a Service Fabric node.
   * @property {string} sourceId Id of report source.
   * @property {string} property Describes the property.
   * @property {string} healthState Describes the property health state.
   * @property {number} tTLTimespan Time to live in milli-seconds.
   * @property {number} sequenceNumber Sequence number of report.
   * @property {string} description Description of report.
   * @property {boolean} removeWhenExpired Indicates the removal when it
   * expires.
   * @property {date} sourceUtcTimestamp Source time.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeployedServiceHealthReportExpiredEvent
   *
   * @returns {object} metadata of DeployedServiceHealthReportExpiredEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployedServiceHealthReportExpired',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'FabricEvent',
        className: 'DeployedServiceHealthReportExpiredEvent',
        modelProperties: {
          eventInstanceId: {
            required: true,
            serializedName: 'EventInstanceId',
            type: {
              name: 'String'
            }
          },
          timeStamp: {
            required: true,
            serializedName: 'TimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          hasCorrelatedEvents: {
            required: false,
            serializedName: 'HasCorrelatedEvents',
            type: {
              name: 'Boolean'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          applicationId: {
            required: true,
            serializedName: 'ApplicationId',
            type: {
              name: 'String'
            }
          },
          serviceManifest: {
            required: true,
            serializedName: 'ServiceManifest',
            type: {
              name: 'String'
            }
          },
          servicePackageInstanceId: {
            required: true,
            serializedName: 'ServicePackageInstanceId',
            type: {
              name: 'Number'
            }
          },
          servicePackageActivationId: {
            required: true,
            serializedName: 'ServicePackageActivationId',
            type: {
              name: 'String'
            }
          },
          nodeName: {
            required: true,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          sourceId: {
            required: true,
            serializedName: 'SourceId',
            type: {
              name: 'String'
            }
          },
          property: {
            required: true,
            serializedName: 'Property',
            type: {
              name: 'String'
            }
          },
          healthState: {
            required: true,
            serializedName: 'HealthState',
            type: {
              name: 'String'
            }
          },
          tTLTimespan: {
            required: true,
            serializedName: 'TTLTimespan',
            type: {
              name: 'Number'
            }
          },
          sequenceNumber: {
            required: true,
            serializedName: 'SequenceNumber',
            type: {
              name: 'Number'
            }
          },
          description: {
            required: true,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          removeWhenExpired: {
            required: true,
            serializedName: 'RemoveWhenExpired',
            type: {
              name: 'Boolean'
            }
          },
          sourceUtcTimestamp: {
            required: true,
            serializedName: 'SourceUtcTimestamp',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedServiceHealthReportExpiredEvent;