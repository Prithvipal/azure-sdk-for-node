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
 * A video analyzer preset that extracts insights (rich metadata) from both
 * audio and video, and outputs a JSON format file.
 *
 * @extends models['AudioAnalyzerPreset']
 */
class VideoAnalyzerPreset extends models['AudioAnalyzerPreset'] {
  /**
   * Create a VideoAnalyzerPreset.
   * @property {string} [insightsToExtract] The type of insights to be
   * extracted. If not set then based on the content the type will selected.
   * If the content is audio only then only audio insights are extracted and if
   * it is video only. Possible values include: 'AudioInsightsOnly',
   * 'VideoInsightsOnly', 'AllInsights'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VideoAnalyzerPreset
   *
   * @returns {object} metadata of VideoAnalyzerPreset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.VideoAnalyzerPreset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Preset',
        className: 'VideoAnalyzerPreset',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          audioLanguage: {
            required: false,
            serializedName: 'audioLanguage',
            type: {
              name: 'String'
            }
          },
          insightsToExtract: {
            required: false,
            serializedName: 'insightsToExtract',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VideoAnalyzerPreset;