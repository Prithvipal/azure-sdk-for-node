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
 * VirtualHub Resource.
 *
 * @extends models['Resource']
 */
class VirtualHub extends models['Resource'] {
  /**
   * Create a VirtualHub.
   * @property {object} [virtualWan] The VirtualWAN to which the VirtualHub
   * belongs
   * @property {string} [virtualWan.id] Resource ID.
   * @property {object} [vpnGateway] The VpnGateway associated with this
   * VirtualHub
   * @property {string} [vpnGateway.id] Resource ID.
   * @property {object} [p2SVpnGateway] The P2SVpnGateway associated with this
   * VirtualHub
   * @property {string} [p2SVpnGateway.id] Resource ID.
   * @property {object} [expressRouteGateway] The expressRouteGateway
   * associated with this VirtualHub
   * @property {string} [expressRouteGateway.id] Resource ID.
   * @property {array} [virtualNetworkConnections] list of all vnet connections
   * with this VirtualHub.
   * @property {string} [addressPrefix] Address-prefix for this VirtualHub.
   * @property {object} [routeTable] The routeTable associated with this
   * virtual hub.
   * @property {array} [routeTable.routes] list of all routes.
   * @property {string} [provisioningState] The provisioning state of the
   * resource. Possible values include: 'Succeeded', 'Updating', 'Deleting',
   * 'Failed'
   * @property {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualHub
   *
   * @returns {object} metadata of VirtualHub
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualHub',
      type: {
        name: 'Composite',
        className: 'VirtualHub',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
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
          },
          virtualWan: {
            required: false,
            serializedName: 'properties.virtualWan',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          vpnGateway: {
            required: false,
            serializedName: 'properties.vpnGateway',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          p2SVpnGateway: {
            required: false,
            serializedName: 'properties.p2SVpnGateway',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          expressRouteGateway: {
            required: false,
            serializedName: 'properties.expressRouteGateway',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          virtualNetworkConnections: {
            required: false,
            serializedName: 'properties.virtualNetworkConnections',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HubVirtualNetworkConnectionElementType',
                  type: {
                    name: 'Composite',
                    className: 'HubVirtualNetworkConnection'
                  }
              }
            }
          },
          addressPrefix: {
            required: false,
            serializedName: 'properties.addressPrefix',
            type: {
              name: 'String'
            }
          },
          routeTable: {
            required: false,
            serializedName: 'properties.routeTable',
            type: {
              name: 'Composite',
              className: 'VirtualHubRouteTable'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualHub;