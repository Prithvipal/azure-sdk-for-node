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
 * The list key vault keys definition.
 *
 */
class ListKeyVaultKeysDefinition {
  /**
   * Create a ListKeyVaultKeysDefinition.
   * @property {object} keyVault The key vault reference.
   * @property {string} [skipToken] The skip token.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListKeyVaultKeysDefinition
   *
   * @returns {object} metadata of ListKeyVaultKeysDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListKeyVaultKeysDefinition',
      type: {
        name: 'Composite',
        className: 'ListKeyVaultKeysDefinition',
        modelProperties: {
          keyVault: {
            required: true,
            serializedName: 'keyVault',
            type: {
              name: 'Composite',
              className: 'KeyVaultReference'
            }
          },
          skipToken: {
            required: false,
            serializedName: 'skipToken',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListKeyVaultKeysDefinition;