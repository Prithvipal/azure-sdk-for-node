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
 * Defines the days of the week that a Chaos Schedule Job will run for.
 *
 */
class ChaosScheduleJobActiveDaysOfWeek {
  /**
   * Create a ChaosScheduleJobActiveDaysOfWeek.
   * @property {boolean} [sunday] Indicates if the Chaos Schedule Job will run
   * on Sunday. Default value: false .
   * @property {boolean} [monday] Indicates if the Chaos Schedule Job will run
   * on Monday. Default value: false .
   * @property {boolean} [tuesday] Indicates if the Chaos Schedule Job will run
   * on Tuesday. Default value: false .
   * @property {boolean} [wednesday] Indicates if the Chaos Schedule Job will
   * run on Wednesday. Default value: false .
   * @property {boolean} [thursday] Indicates if the Chaos Schedule Job will
   * run on Thursday. Default value: false .
   * @property {boolean} [friday] Indicates if the Chaos Schedule Job will run
   * on Friday. Default value: false .
   * @property {boolean} [saturday] Indicates if the Chaos Schedule Job will
   * run on Saturday. Default value: false .
   */
  constructor() {
  }

  /**
   * Defines the metadata of ChaosScheduleJobActiveDaysOfWeek
   *
   * @returns {object} metadata of ChaosScheduleJobActiveDaysOfWeek
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChaosScheduleJobActiveDaysOfWeek',
      type: {
        name: 'Composite',
        className: 'ChaosScheduleJobActiveDaysOfWeek',
        modelProperties: {
          sunday: {
            required: false,
            serializedName: 'Sunday',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          monday: {
            required: false,
            serializedName: 'Monday',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          tuesday: {
            required: false,
            serializedName: 'Tuesday',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          wednesday: {
            required: false,
            serializedName: 'Wednesday',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          thursday: {
            required: false,
            serializedName: 'Thursday',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          friday: {
            required: false,
            serializedName: 'Friday',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          saturday: {
            required: false,
            serializedName: 'Saturday',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ChaosScheduleJobActiveDaysOfWeek;