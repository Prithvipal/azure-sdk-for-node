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
 * VpnGateway Resource.
 *
 * @extends models['Resource']
 */
class VpnGateway extends models['Resource'] {
  /**
   * Create a VpnGateway.
   * @property {object} [virtualHub] The VirtualHub to which the gateway
   * belongs
   * @property {string} [virtualHub.id] Resource ID.
   * @property {array} [connections] list of all vpn connections to the
   * gateway.
   * @property {object} [bgpSettings] Local network gateway's BGP speaker
   * settings.
   * @property {number} [bgpSettings.asn] The BGP speaker's ASN.
   * @property {string} [bgpSettings.bgpPeeringAddress] The BGP peering address
   * and BGP identifier of this BGP speaker.
   * @property {number} [bgpSettings.peerWeight] The weight added to routes
   * learned from this BGP speaker.
   * @property {string} [provisioningState] The provisioning state of the
   * resource. Possible values include: 'Succeeded', 'Updating', 'Deleting',
   * 'Failed'
   * @property {number} [vpnGatewayScaleUnit] The scale unit for this vpn
   * gateway.
   * @property {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VpnGateway
   *
   * @returns {object} metadata of VpnGateway
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VpnGateway',
      type: {
        name: 'Composite',
        className: 'VpnGateway',
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
          virtualHub: {
            required: false,
            serializedName: 'properties.virtualHub',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          connections: {
            required: false,
            serializedName: 'properties.connections',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VpnConnectionElementType',
                  type: {
                    name: 'Composite',
                    className: 'VpnConnection'
                  }
              }
            }
          },
          bgpSettings: {
            required: false,
            serializedName: 'properties.bgpSettings',
            type: {
              name: 'Composite',
              className: 'BgpSettings'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          vpnGatewayScaleUnit: {
            required: false,
            serializedName: 'properties.vpnGatewayScaleUnit',
            type: {
              name: 'Number'
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

module.exports = VpnGateway;