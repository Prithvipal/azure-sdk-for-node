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
 * Face list object.
 *
 * @extends models['NameAndUserDataContract']
 */
class FaceList extends models['NameAndUserDataContract'] {
  /**
   * Create a FaceList.
   * @property {string} faceListId FaceListId of the target face list.
   * @property {array} [persistedFaces] Persisted faces within the face list.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FaceList
   *
   * @returns {object} metadata of FaceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FaceList',
      type: {
        name: 'Composite',
        className: 'FaceList',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 128
            },
            type: {
              name: 'String'
            }
          },
          userData: {
            required: false,
            serializedName: 'userData',
            constraints: {
              MaxLength: 16384
            },
            type: {
              name: 'String'
            }
          },
          faceListId: {
            required: true,
            serializedName: 'faceListId',
            constraints: {
              MaxLength: 64,
              Pattern: '^[a-z0-9-_]+$'
            },
            type: {
              name: 'String'
            }
          },
          persistedFaces: {
            required: false,
            serializedName: 'persistedFaces',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PersistedFaceElementType',
                  type: {
                    name: 'Composite',
                    className: 'PersistedFace'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = FaceList;