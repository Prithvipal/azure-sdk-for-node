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
 * Container group log analytics information.
 *
 */
class LogAnalytics {
  /**
   * Create a LogAnalytics.
   * @member {string} workspaceId The workspace id for log analytics
   * @member {string} workspaceKey The workspace key for log analytics
   * @member {string} [logType] The log type to be used. Possible values
   * include: 'ContainerInsights', 'ContainerInstanceLogs'
   * @member {object} [metadata] Metadata for log analytics.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LogAnalytics
   *
   * @returns {object} metadata of LogAnalytics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogAnalytics',
      type: {
        name: 'Composite',
        className: 'LogAnalytics',
        modelProperties: {
          workspaceId: {
            required: true,
            serializedName: 'workspaceId',
            type: {
              name: 'String'
            }
          },
          workspaceKey: {
            required: true,
            serializedName: 'workspaceKey',
            type: {
              name: 'String'
            }
          },
          logType: {
            required: false,
            serializedName: 'logType',
            type: {
              name: 'String'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
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

module.exports = LogAnalytics;