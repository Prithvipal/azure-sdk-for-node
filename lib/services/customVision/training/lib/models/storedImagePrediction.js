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
 * result of an image classification request.
 *
 */
class StoredImagePrediction {
  /**
   * Create a StoredImagePrediction.
   * @property {string} [resizedImageUri] The URI to the (resized) prediction
   * image.
   * @property {string} [thumbnailUri] The URI to the thumbnail of the original
   * prediction image.
   * @property {string} [originalImageUri] The URI to the original prediction
   * image.
   * @property {uuid} [domain] Domain used for the prediction.
   * @property {uuid} [id]
   * @property {uuid} [project]
   * @property {uuid} [iteration]
   * @property {date} [created]
   * @property {array} [predictions]
   */
  constructor() {
  }

  /**
   * Defines the metadata of StoredImagePrediction
   *
   * @returns {object} metadata of StoredImagePrediction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StoredImagePrediction',
      type: {
        name: 'Composite',
        className: 'StoredImagePrediction',
        modelProperties: {
          resizedImageUri: {
            required: false,
            nullable: true,
            readOnly: true,
            serializedName: 'resizedImageUri',
            type: {
              name: 'String'
            }
          },
          thumbnailUri: {
            required: false,
            nullable: true,
            readOnly: true,
            serializedName: 'thumbnailUri',
            type: {
              name: 'String'
            }
          },
          originalImageUri: {
            required: false,
            nullable: true,
            readOnly: true,
            serializedName: 'originalImageUri',
            type: {
              name: 'String'
            }
          },
          domain: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'domain',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          project: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'project',
            type: {
              name: 'String'
            }
          },
          iteration: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'iteration',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          predictions: {
            required: false,
            nullable: true,
            readOnly: true,
            serializedName: 'predictions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PredictionElementType',
                  type: {
                    name: 'Composite',
                    className: 'Prediction'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StoredImagePrediction;