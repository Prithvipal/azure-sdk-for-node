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
 * Child entity in a LUIS Composite Entity.
 *
 */
class CompositeChildModel {
  /**
   * Create a CompositeChildModel.
   * @property {string} type Type of child entity.
   * @property {string} value Value extracted by LUIS.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CompositeChildModel
   *
   * @returns {object} metadata of CompositeChildModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CompositeChildModel',
      type: {
        name: 'Composite',
        className: 'CompositeChildModel',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CompositeChildModel;