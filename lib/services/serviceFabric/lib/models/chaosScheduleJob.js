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
 * Defines a repetition rule and parameters of Chaos to be used with the Chaos
 * Schedule.
 *
 */
class ChaosScheduleJob {
  /**
   * Create a ChaosScheduleJob.
   * @property {string} [chaosParameters] A reference to which Chaos Parameters
   * of the Chaos Schedule to use.
   * @property {object} [days] Defines the days of the week that a Chaos
   * Schedule Job will run for.
   * @property {boolean} [days.sunday] Indicates if the Chaos Schedule Job will
   * run on Sunday
   * @property {boolean} [days.monday] Indicates if the Chaos Schedule Job will
   * run on Monday
   * @property {boolean} [days.tuesday] Indicates if the Chaos Schedule Job
   * will run on Tuesday
   * @property {boolean} [days.wednesday] Indicates if the Chaos Schedule Job
   * will run on Wednesday
   * @property {boolean} [days.thursday] Indicates if the Chaos Schedule Job
   * will run on Thursday
   * @property {boolean} [days.friday] Indicates if the Chaos Schedule Job will
   * run on Friday
   * @property {boolean} [days.saturday] Indicates if the Chaos Schedule Job
   * will run on Saturday
   * @property {array} [times] A list of Time Ranges that specify when during
   * active days that this job will run. The times are interpreted as UTC.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ChaosScheduleJob
   *
   * @returns {object} metadata of ChaosScheduleJob
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChaosScheduleJob',
      type: {
        name: 'Composite',
        className: 'ChaosScheduleJob',
        modelProperties: {
          chaosParameters: {
            required: false,
            serializedName: 'ChaosParameters',
            type: {
              name: 'String'
            }
          },
          days: {
            required: false,
            serializedName: 'Days',
            type: {
              name: 'Composite',
              className: 'ChaosScheduleJobActiveDaysOfWeek'
            }
          },
          times: {
            required: false,
            serializedName: 'Times',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TimeRangeElementType',
                  type: {
                    name: 'Composite',
                    className: 'TimeRange'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ChaosScheduleJob;