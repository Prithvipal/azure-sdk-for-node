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
 * Azure VM workload-specific protectable item.
 *
 * @extends models['WorkloadProtectableItem']
 */
class AzureVmWorkloadProtectableItem extends models['WorkloadProtectableItem'] {
  /**
   * Create a AzureVmWorkloadProtectableItem.
   * @member {string} [parentName] Name for instance or AG
   * @member {string} [parentUniqueName] Parent Unique Name is added to provide
   * the service formatted URI Name of the Parent
   * Only Applicable for data bases where the parent would be either Instance
   * or a SQL AG.
   * @member {string} [serverName] Host/Cluster Name for instance or AG
   * @member {boolean} [isAutoProtectable] Indicates if protectable item is
   * auto-protectable
   * @member {boolean} [isAutoProtected] Indicates if protectable item is
   * auto-protected
   * @member {number} [subinquireditemcount] For instance or AG, indicates
   * number of DB's present
   * @member {number} [subprotectableitemcount] For instance or AG, indicates
   * number of DB's to be protected
   * @member {object} [prebackupvalidation] Pre-backup validation for
   * protectable objects
   * @member {string} [prebackupvalidation.status] Status of protectable item,
   * i.e. InProgress,Succeeded,Failed. Possible values include: 'Invalid',
   * 'Success', 'Failed'
   * @member {string} [prebackupvalidation.code] Error code of protectable item
   * @member {string} [prebackupvalidation.message] Message corresponding to
   * the error code for the protectable item
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureVmWorkloadProtectableItem
   *
   * @returns {object} metadata of AzureVmWorkloadProtectableItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureVmWorkloadProtectableItem',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'protectableItemType',
          clientName: 'protectableItemType'
        },
        uberParent: 'WorkloadProtectableItem',
        className: 'AzureVmWorkloadProtectableItem',
        modelProperties: {
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          workloadType: {
            required: false,
            serializedName: 'workloadType',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          protectionState: {
            required: false,
            serializedName: 'protectionState',
            type: {
              name: 'String'
            }
          },
          protectableItemType: {
            required: true,
            serializedName: 'protectableItemType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          parentName: {
            required: false,
            serializedName: 'parentName',
            type: {
              name: 'String'
            }
          },
          parentUniqueName: {
            required: false,
            serializedName: 'parentUniqueName',
            type: {
              name: 'String'
            }
          },
          serverName: {
            required: false,
            serializedName: 'serverName',
            type: {
              name: 'String'
            }
          },
          isAutoProtectable: {
            required: false,
            serializedName: 'isAutoProtectable',
            type: {
              name: 'Boolean'
            }
          },
          isAutoProtected: {
            required: false,
            serializedName: 'isAutoProtected',
            type: {
              name: 'Boolean'
            }
          },
          subinquireditemcount: {
            required: false,
            serializedName: 'subinquireditemcount',
            type: {
              name: 'Number'
            }
          },
          subprotectableitemcount: {
            required: false,
            serializedName: 'subprotectableitemcount',
            type: {
              name: 'Number'
            }
          },
          prebackupvalidation: {
            required: false,
            serializedName: 'prebackupvalidation',
            type: {
              name: 'Composite',
              className: 'PreBackupValidation'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureVmWorkloadProtectableItem;