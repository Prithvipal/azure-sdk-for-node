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
 * Describes the frequency based backup schedule.
 *
 * @extends models['BackupScheduleDescription']
 */
class FrequencyBasedBackupScheduleDescription extends models['BackupScheduleDescription'] {
  /**
   * Create a FrequencyBasedBackupScheduleDescription.
   * @property {moment.duration} interval Defines the interval with which
   * backups are periodically taken. It should be specified in ISO8601 format.
   * Timespan in seconds is not supported and will be ignored while creating
   * the policy.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FrequencyBasedBackupScheduleDescription
   *
   * @returns {object} metadata of FrequencyBasedBackupScheduleDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FrequencyBased',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'ScheduleKind',
          clientName: 'scheduleKind'
        },
        uberParent: 'BackupScheduleDescription',
        className: 'FrequencyBasedBackupScheduleDescription',
        modelProperties: {
          scheduleKind: {
            required: true,
            serializedName: 'ScheduleKind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          interval: {
            required: true,
            serializedName: 'Interval',
            type: {
              name: 'TimeSpan'
            }
          }
        }
      }
    };
  }
}

module.exports = FrequencyBasedBackupScheduleDescription;