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
 * A deleted app.
 *
 * @extends models['ProxyOnlyResource']
 */
class DeletedSite extends models['ProxyOnlyResource'] {
  /**
   * Create a DeletedSite.
   * @member {number} [deletedSiteId] Numeric id for the deleted site
   * @member {string} [deletedTimestamp] Time in UTC when the app was deleted.
   * @member {string} [subscription] Subscription containing the deleted site
   * @member {string} [resourceGroup] ResourceGroup that contained the deleted
   * site
   * @member {string} [deletedSiteName] Name of the deleted site
   * @member {string} [slot] Slot of the deleted site
   * @member {string} [deletedSiteKind] Kind of site that was deleted
   * @member {string} [geoRegionName] Geo Region of the deleted site
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeletedSite
   *
   * @returns {object} metadata of DeletedSite
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeletedSite',
      type: {
        name: 'Composite',
        className: 'DeletedSite',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
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
          kind: {
            required: false,
            serializedName: 'kind',
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
          deletedSiteId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.deletedSiteId',
            type: {
              name: 'Number'
            }
          },
          deletedTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.deletedTimestamp',
            type: {
              name: 'String'
            }
          },
          subscription: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subscription',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceGroup',
            type: {
              name: 'String'
            }
          },
          deletedSiteName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.deletedSiteName',
            type: {
              name: 'String'
            }
          },
          slot: {
            required: false,
            readOnly: true,
            serializedName: 'properties.slot',
            type: {
              name: 'String'
            }
          },
          deletedSiteKind: {
            required: false,
            readOnly: true,
            serializedName: 'properties.kind',
            type: {
              name: 'String'
            }
          },
          geoRegionName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.geoRegionName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeletedSite;