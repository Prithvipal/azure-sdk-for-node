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
 * Represents data structure that contains load information for a certain
 * metric on a node.
 *
 */
class NodeLoadMetricInformation {
  /**
   * Create a NodeLoadMetricInformation.
   * @member {string} [name] Name of the metric for which this load information
   * is provided.
   * @member {string} [nodeCapacity] Total capacity on the node for this
   * metric.
   * @member {string} [nodeLoad] Current load on the node for this metric.
   * @member {string} [nodeRemainingCapacity] The remaining capacity on the
   * node for this metric.
   * @member {boolean} [isCapacityViolation] Indicates if there is a capacity
   * violation for this metric on the node.
   * @member {string} [nodeBufferedCapacity] The value that indicates the
   * reserved capacity for this metric on the node.
   * @member {string} [nodeRemainingBufferedCapacity] The remaining reserved
   * capacity for this metric on the node.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NodeLoadMetricInformation
   *
   * @returns {object} metadata of NodeLoadMetricInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeLoadMetricInformation',
      type: {
        name: 'Composite',
        className: 'NodeLoadMetricInformation',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          nodeCapacity: {
            required: false,
            serializedName: 'NodeCapacity',
            type: {
              name: 'String'
            }
          },
          nodeLoad: {
            required: false,
            serializedName: 'NodeLoad',
            type: {
              name: 'String'
            }
          },
          nodeRemainingCapacity: {
            required: false,
            serializedName: 'NodeRemainingCapacity',
            type: {
              name: 'String'
            }
          },
          isCapacityViolation: {
            required: false,
            serializedName: 'IsCapacityViolation',
            type: {
              name: 'Boolean'
            }
          },
          nodeBufferedCapacity: {
            required: false,
            serializedName: 'NodeBufferedCapacity',
            type: {
              name: 'String'
            }
          },
          nodeRemainingBufferedCapacity: {
            required: false,
            serializedName: 'NodeRemainingBufferedCapacity',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeLoadMetricInformation;