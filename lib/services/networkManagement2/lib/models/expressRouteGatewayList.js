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
 * List of ExpressRoute gateways.
 *
 */
class ExpressRouteGatewayList {
  /**
   * Create a ExpressRouteGatewayList.
   * @property {array} [value] List of ExpressRoute gateways.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExpressRouteGatewayList
   *
   * @returns {object} metadata of ExpressRouteGatewayList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteGatewayList',
      type: {
        name: 'Composite',
        className: 'ExpressRouteGatewayList',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRouteGatewayElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRouteGateway'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteGatewayList;