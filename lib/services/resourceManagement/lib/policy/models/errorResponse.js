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
 * Error reponse indicates Azure Resource Manager is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 */
class ErrorResponse {
  /**
   * Create a ErrorResponse.
   * @property {string} [httpStatus] Http status code.
   * @property {string} [errorCode] Error code.
   * @property {string} [errorMessage] Error message indicating why the
   * operation failed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorResponse
   *
   * @returns {object} metadata of ErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorResponse',
      type: {
        name: 'Composite',
        className: 'ErrorResponse',
        modelProperties: {
          httpStatus: {
            required: false,
            serializedName: 'httpStatus',
            type: {
              name: 'String'
            }
          },
          errorCode: {
            required: false,
            serializedName: 'errorCode',
            type: {
              name: 'String'
            }
          },
          errorMessage: {
            required: false,
            serializedName: 'errorMessage',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorResponse;
