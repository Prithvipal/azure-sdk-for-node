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
 * The operation result definition.
 *
 * @extends models['OperationResultProperties']
 */
class OperationResult extends models['OperationResultProperties'] {
  /**
   * Create a OperationResult.
   * @property {string} [trackingId] Gets the tracking id.
   * @property {object} [inputs] Gets the inputs.
   * @property {object} [inputsLink] Gets the link to inputs.
   * @property {string} [inputsLink.uri] The content link URI.
   * @property {string} [inputsLink.contentVersion] The content version.
   * @property {number} [inputsLink.contentSize] The content size.
   * @property {object} [inputsLink.contentHash] The content hash.
   * @property {string} [inputsLink.contentHash.algorithm] The algorithm of the
   * content hash.
   * @property {string} [inputsLink.contentHash.value] The value of the content
   * hash.
   * @property {object} [inputsLink.metadata] The metadata.
   * @property {object} [outputs] Gets the outputs.
   * @property {object} [outputsLink] Gets the link to outputs.
   * @property {string} [outputsLink.uri] The content link URI.
   * @property {string} [outputsLink.contentVersion] The content version.
   * @property {number} [outputsLink.contentSize] The content size.
   * @property {object} [outputsLink.contentHash] The content hash.
   * @property {string} [outputsLink.contentHash.algorithm] The algorithm of
   * the content hash.
   * @property {string} [outputsLink.contentHash.value] The value of the
   * content hash.
   * @property {object} [outputsLink.metadata] The metadata.
   * @property {object} [trackedProperties] Gets the tracked properties.
   * @property {array} [retryHistory] Gets the retry histories.
   * @property {number} [iterationCount]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationResult
   *
   * @returns {object} metadata of OperationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationResult',
      type: {
        name: 'Composite',
        className: 'OperationResult',
        modelProperties: {
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          correlation: {
            required: false,
            serializedName: 'correlation',
            type: {
              name: 'Composite',
              className: 'RunActionCorrelation'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Object'
            }
          },
          trackingId: {
            required: false,
            readOnly: true,
            serializedName: 'trackingId',
            type: {
              name: 'String'
            }
          },
          inputs: {
            required: false,
            readOnly: true,
            serializedName: 'inputs',
            type: {
              name: 'Object'
            }
          },
          inputsLink: {
            required: false,
            readOnly: true,
            serializedName: 'inputsLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          outputs: {
            required: false,
            readOnly: true,
            serializedName: 'outputs',
            type: {
              name: 'Object'
            }
          },
          outputsLink: {
            required: false,
            readOnly: true,
            serializedName: 'outputsLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          trackedProperties: {
            required: false,
            readOnly: true,
            serializedName: 'trackedProperties',
            type: {
              name: 'Object'
            }
          },
          retryHistory: {
            required: false,
            serializedName: 'retryHistory',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RetryHistoryElementType',
                  type: {
                    name: 'Composite',
                    className: 'RetryHistory'
                  }
              }
            }
          },
          iterationCount: {
            required: false,
            serializedName: 'iterationCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationResult;