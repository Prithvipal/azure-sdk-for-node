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
 * IP Address details.
 *
 */
class IPA {
  /**
   * Create a IPA.
   * @property {string} [subType] Subtype of the detected IP Address.
   * @property {string} [text] Detected IP Address.
   * @property {number} [index] Index(Location) of the IP Address in the input
   * text content.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IPA
   *
   * @returns {object} metadata of IPA
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IPA',
      type: {
        name: 'Composite',
        className: 'IPA',
        modelProperties: {
          subType: {
            required: false,
            serializedName: 'SubType',
            type: {
              name: 'String'
            }
          },
          text: {
            required: false,
            serializedName: 'Text',
            type: {
              name: 'String'
            }
          },
          index: {
            required: false,
            serializedName: 'Index',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = IPA;