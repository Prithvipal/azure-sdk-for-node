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
 * Describes the backup configuration information.
 *
 */
class BackupConfigurationInfo {
  /**
   * Create a BackupConfigurationInfo.
   * @property {string} [policyName] The name of the backup policy which is
   * applicable to this Service Fabric application or service or partition.
   * @property {string} [policyInheritedFrom] Specifies the scope at which the
   * backup policy is applied. Possible values include: 'Invalid', 'Partition',
   * 'Service', 'Application'
   * @property {object} [suspensionInfo] Describes the backup suspension
   * details.
   * @property {boolean} [suspensionInfo.isSuspended] Indicates whether
   * periodic backup is suspended at this level or not.
   * @property {string} [suspensionInfo.suspensionInheritedFrom] Specifies the
   * scope at which the backup suspension was applied. Possible values include:
   * 'Invalid', 'Partition', 'Service', 'Application'
   * @property {string} kind Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupConfigurationInfo
   *
   * @returns {object} metadata of BackupConfigurationInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupConfigurationInfo',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'BackupConfigurationInfo',
        className: 'BackupConfigurationInfo',
        modelProperties: {
          policyName: {
            required: false,
            serializedName: 'PolicyName',
            type: {
              name: 'String'
            }
          },
          policyInheritedFrom: {
            required: false,
            serializedName: 'PolicyInheritedFrom',
            type: {
              name: 'String'
            }
          },
          suspensionInfo: {
            required: false,
            serializedName: 'SuspensionInfo',
            type: {
              name: 'Composite',
              className: 'BackupSuspensionInfo'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupConfigurationInfo;