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
 * Batch of image tags.
 *
 */
class ImageTagCreateBatch {
  /**
   * Create a ImageTagCreateBatch.
   * @property {array} [tags] Image Tag entries to include in this batch.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageTagCreateBatch
   *
   * @returns {object} metadata of ImageTagCreateBatch
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageTagCreateBatch',
      type: {
        name: 'Composite',
        className: 'ImageTagCreateBatch',
        modelProperties: {
          tags: {
            required: false,
            nullable: true,
            serializedName: 'tags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageTagCreateEntryElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageTagCreateEntry'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ImageTagCreateBatch;