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
 * The batch configuration resource definition.
 *
 * @extends models['Resource']
 */
class BatchConfiguration extends models['Resource'] {
  /**
   * Create a BatchConfiguration.
   * @property {object} properties The batch configuration properties.
   * @property {string} [properties.batchGroupName] The name of the batch
   * group.
   * @property {object} [properties.releaseCriteria] The batch release
   * criteria.
   * @property {number} [properties.releaseCriteria.messageCount] The message
   * count.
   * @property {number} [properties.releaseCriteria.batchSize] The batch size
   * in bytes.
   * @property {object} [properties.releaseCriteria.recurrence] The recurrence.
   * @property {string} [properties.releaseCriteria.recurrence.frequency] The
   * frequency. Possible values include: 'NotSpecified', 'Second', 'Minute',
   * 'Hour', 'Day', 'Week', 'Month', 'Year'
   * @property {number} [properties.releaseCriteria.recurrence.interval] The
   * interval.
   * @property {string} [properties.releaseCriteria.recurrence.startTime] The
   * start time.
   * @property {string} [properties.releaseCriteria.recurrence.endTime] The end
   * time.
   * @property {string} [properties.releaseCriteria.recurrence.timeZone] The
   * time zone.
   * @property {object} [properties.releaseCriteria.recurrence.schedule] The
   * recurrence schedule.
   * @property {array} [properties.releaseCriteria.recurrence.schedule.minutes]
   * The minutes.
   * @property {array} [properties.releaseCriteria.recurrence.schedule.hours]
   * The hours.
   * @property {array}
   * [properties.releaseCriteria.recurrence.schedule.weekDays] The days of the
   * week.
   * @property {array}
   * [properties.releaseCriteria.recurrence.schedule.monthDays] The month days.
   * @property {array}
   * [properties.releaseCriteria.recurrence.schedule.monthlyOccurrences] The
   * monthly occurrences.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BatchConfiguration
   *
   * @returns {object} metadata of BatchConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BatchConfiguration',
      type: {
        name: 'Composite',
        className: 'BatchConfiguration',
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
          properties: {
            required: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'BatchConfigurationProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = BatchConfiguration;