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
 * Class representing a TrackingEventErrorInfo.
 */
class TrackingEventErrorInfo {
  /**
   * Create a TrackingEventErrorInfo.
   * @property {string} [message]
   * @property {string} [code]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrackingEventErrorInfo
   *
   * @returns {object} metadata of TrackingEventErrorInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrackingEventErrorInfo',
      type: {
        name: 'Composite',
        className: 'TrackingEventErrorInfo',
        modelProperties: {
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TrackingEventErrorInfo;