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
 * The list of integration account partners.
 */
class IntegrationAccountPartnerListResult extends Array {
  /**
   * Create a IntegrationAccountPartnerListResult.
   * @member {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IntegrationAccountPartnerListResult
   *
   * @returns {object} metadata of IntegrationAccountPartnerListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntegrationAccountPartnerListResult',
      type: {
        name: 'Composite',
        className: 'IntegrationAccountPartnerListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IntegrationAccountPartnerElementType',
                  type: {
                    name: 'Composite',
                    className: 'IntegrationAccountPartner'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntegrationAccountPartnerListResult;