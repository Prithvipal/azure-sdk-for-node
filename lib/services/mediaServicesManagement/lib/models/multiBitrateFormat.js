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
 * Describes the properties for producing a collection of GOP aligned
 * multi-bitrate files. The default behavior is to produce one output file for
 * each video layer which is muxed together with all the audios. The exact
 * output files produced can be controlled by specifying the outputFiles
 * collection.
 *
 * @extends models['Format']
 */
class MultiBitrateFormat extends models['Format'] {
  /**
   * Create a MultiBitrateFormat.
   * @property {array} [outputFiles] The list of output files to produce.  Each
   * entry in the list is a set of audio and video layer labels to be muxed
   * together .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MultiBitrateFormat
   *
   * @returns {object} metadata of MultiBitrateFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.MultiBitrateFormat',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'MultiBitrateFormat',
        modelProperties: {
          filenamePattern: {
            required: false,
            serializedName: 'filenamePattern',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          outputFiles: {
            required: false,
            serializedName: 'outputFiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OutputFileElementType',
                  type: {
                    name: 'Composite',
                    className: 'OutputFile'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MultiBitrateFormat;