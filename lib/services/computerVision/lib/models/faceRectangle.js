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
 * An object describing face rectangle.
 *
 */
class FaceRectangle {
  /**
   * Create a FaceRectangle.
   * @member {number} [left] X-coordinate of the top left point of the face.
   * @member {number} [top] Y-coordinate of the top left point of the face.
   * @member {number} [width] Width measured from the top-left point of the
   * face.
   * @member {number} [height] Height measured from the top-left point of the
   * face.
   */
  constructor() {
  }

  /**
   * Defines the metadata of FaceRectangle
   *
   * @returns {object} metadata of FaceRectangle
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FaceRectangle',
      type: {
        name: 'Composite',
        className: 'FaceRectangle',
        modelProperties: {
          left: {
            required: false,
            nullable: false,
            serializedName: 'left',
            type: {
              name: 'Number'
            }
          },
          top: {
            required: false,
            nullable: false,
            serializedName: 'top',
            type: {
              name: 'Number'
            }
          },
          width: {
            required: false,
            nullable: false,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: false,
            nullable: false,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = FaceRectangle;