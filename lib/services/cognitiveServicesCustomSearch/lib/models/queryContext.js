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
 * Defines the query context that Bing used for the request.
 *
 */
class QueryContext {
  /**
   * Create a QueryContext.
   * @property {string} originalQuery The query string as specified in the
   * request.
   * @property {string} [alteredQuery] The query string used by Bing to perform
   * the query. Bing uses the altered query string if the original query string
   * contained spelling mistakes. For example, if the query string is "saling
   * downwind", the altered query string will be "sailing downwind". This field
   * is included only if the original query string contains a spelling mistake.
   * @property {string} [alterationOverrideQuery] The query string to use to
   * force Bing to use the original string. For example, if the query string is
   * "saling downwind", the override query string will be "+saling downwind".
   * Remember to encode the query string which results in "%2Bsaling+downwind".
   * This field is included only if the original query string contains a
   * spelling mistake.
   * @property {boolean} [adultIntent] A Boolean value that indicates whether
   * the specified query has adult intent. The value is true if the query has
   * adult intent; otherwise, false.
   */
  constructor() {
  }

  /**
   * Defines the metadata of QueryContext
   *
   * @returns {object} metadata of QueryContext
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QueryContext',
      type: {
        name: 'Composite',
        className: 'QueryContext',
        modelProperties: {
          originalQuery: {
            required: true,
            serializedName: 'originalQuery',
            type: {
              name: 'String'
            }
          },
          alteredQuery: {
            required: false,
            readOnly: true,
            serializedName: 'alteredQuery',
            type: {
              name: 'String'
            }
          },
          alterationOverrideQuery: {
            required: false,
            readOnly: true,
            serializedName: 'alterationOverrideQuery',
            type: {
              name: 'String'
            }
          },
          adultIntent: {
            required: false,
            readOnly: true,
            serializedName: 'adultIntent',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = QueryContext;