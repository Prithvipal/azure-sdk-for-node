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
 * A policy that specifies the delivery rules to be used for an endpoint.
 *
 */
class EndpointPropertiesUpdateParametersDeliveryPolicy {
  /**
   * Create a EndpointPropertiesUpdateParametersDeliveryPolicy.
   * @member {string} [description] User-friendly description of the policy.
   * @member {array} rules A list of the delivery rules.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EndpointPropertiesUpdateParametersDeliveryPolicy
   *
   * @returns {object} metadata of EndpointPropertiesUpdateParametersDeliveryPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EndpointPropertiesUpdateParameters_deliveryPolicy',
      type: {
        name: 'Composite',
        className: 'EndpointPropertiesUpdateParametersDeliveryPolicy',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          rules: {
            required: true,
            serializedName: 'rules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeliveryRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeliveryRule'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EndpointPropertiesUpdateParametersDeliveryPolicy;