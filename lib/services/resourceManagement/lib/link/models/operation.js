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
 * Microsoft.Resources operation
 *
 */
class Operation {
  /**
   * Create a Operation.
   * @property {string} [name] Operation name:
   * {provider}/{resource}/{operation}
   * @property {object} [display] The object that represents the operation.
   * @property {string} [display.provider] Service provider:
   * Microsoft.Resources
   * @property {string} [display.resource] Resource on which the operation is
   * performed: Profile, endpoint, etc.
   * @property {string} [display.operation] Operation type: Read, write,
   * delete, etc.
   * @property {string} [display.description] Description of the operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Operation
   *
   * @returns {object} metadata of Operation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Operation',
      type: {
        name: 'Composite',
        className: 'Operation',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          display: {
            required: false,
            serializedName: 'display',
            type: {
              name: 'Composite',
              className: 'OperationDisplay'
            }
          }
        }
      }
    };
  }
}

module.exports = Operation;