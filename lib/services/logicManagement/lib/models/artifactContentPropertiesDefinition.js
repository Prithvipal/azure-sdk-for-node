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
 * The artifact content properties definition.
 *
 * @extends models['ArtifactProperties']
 */
class ArtifactContentPropertiesDefinition extends models['ArtifactProperties'] {
  /**
   * Create a ArtifactContentPropertiesDefinition.
   * @property {object} [content]
   * @property {string} [contentType] The content type.
   * @property {object} [contentLink] The content link.
   * @property {string} [contentLink.uri] The content link URI.
   * @property {string} [contentLink.contentVersion] The content version.
   * @property {number} [contentLink.contentSize] The content size.
   * @property {object} [contentLink.contentHash] The content hash.
   * @property {string} [contentLink.contentHash.algorithm] The algorithm of
   * the content hash.
   * @property {string} [contentLink.contentHash.value] The value of the
   * content hash.
   * @property {object} [contentLink.metadata] The metadata.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ArtifactContentPropertiesDefinition
   *
   * @returns {object} metadata of ArtifactContentPropertiesDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ArtifactContentPropertiesDefinition',
      type: {
        name: 'Composite',
        className: 'ArtifactContentPropertiesDefinition',
        modelProperties: {
          createdTime: {
            required: false,
            serializedName: 'createdTime',
            type: {
              name: 'DateTime'
            }
          },
          changedTime: {
            required: false,
            serializedName: 'changedTime',
            type: {
              name: 'DateTime'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Object'
            }
          },
          content: {
            required: false,
            serializedName: 'content',
            type: {
              name: 'Object'
            }
          },
          contentType: {
            required: false,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          },
          contentLink: {
            required: false,
            serializedName: 'contentLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          }
        }
      }
    };
  }
}

module.exports = ArtifactContentPropertiesDefinition;