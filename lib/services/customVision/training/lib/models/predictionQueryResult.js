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
 * Class representing a PredictionQueryResult.
 */
class PredictionQueryResult {
  /**
   * Create a PredictionQueryResult.
   * @property {object} [token]
   * @property {string} [token.session]
   * @property {string} [token.continuation]
   * @property {number} [token.maxCount]
   * @property {string} [token.orderBy] Possible values include: 'Newest',
   * 'Oldest', 'Suggested'
   * @property {array} [token.tags]
   * @property {uuid} [token.iterationId]
   * @property {date} [token.startTime]
   * @property {date} [token.endTime]
   * @property {string} [token.application]
   * @property {array} [results]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PredictionQueryResult
   *
   * @returns {object} metadata of PredictionQueryResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PredictionQueryResult',
      type: {
        name: 'Composite',
        className: 'PredictionQueryResult',
        modelProperties: {
          token: {
            required: false,
            readOnly: true,
            serializedName: 'token',
            type: {
              name: 'Composite',
              className: 'PredictionQueryToken'
            }
          },
          results: {
            required: false,
            nullable: true,
            readOnly: true,
            serializedName: 'results',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StoredImagePredictionElementType',
                  type: {
                    name: 'Composite',
                    className: 'StoredImagePrediction'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PredictionQueryResult;