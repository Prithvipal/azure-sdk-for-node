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
 * A Transform encapsulates the rules or instructions for generating desired
 * outputs from input media, such as by transcoding or by extracting insights.
 * After the Transform is created, it can be applied to input media by creating
 * Jobs.
 *
 * @extends models['ProxyResource']
 */
class Transform extends models['ProxyResource'] {
  /**
   * Create a Transform.
   * @property {date} [created] The UTC date and time when the Transform was
   * created, in 'YYYY-MM-DDThh:mm:ssZ' format.
   * @property {string} [description] An optional verbose description of the
   * Transform.
   * @property {date} [lastModified] The UTC date and time when the Transform
   * was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
   * @property {array} outputs An array of one or more TransformOutputs that
   * the Transform should generate.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Transform
   *
   * @returns {object} metadata of Transform
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Transform',
      type: {
        name: 'Composite',
        className: 'Transform',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          lastModified: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.lastModified',
            type: {
              name: 'DateTime'
            }
          },
          outputs: {
            required: true,
            serializedName: 'properties.outputs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransformOutputElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransformOutput'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Transform;