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
 * A container event.
 *
 */
class ContainerEvent {
  /**
   * Create a ContainerEvent.
   * @property {string} [name] The name of the container event.
   * @property {number} [count] The count of the event.
   * @property {string} [firstTimestamp] Date/time of the first event.
   * @property {string} [lastTimestamp] Date/time of the last event.
   * @property {string} [message] The event message
   * @property {string} [type] The event type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerEvent
   *
   * @returns {object} metadata of ContainerEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerEvent',
      type: {
        name: 'Composite',
        className: 'ContainerEvent',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          firstTimestamp: {
            required: false,
            serializedName: 'firstTimestamp',
            type: {
              name: 'String'
            }
          },
          lastTimestamp: {
            required: false,
            serializedName: 'lastTimestamp',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerEvent;