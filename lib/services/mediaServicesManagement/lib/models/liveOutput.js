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
 * The Live Output.
 *
 * @extends models['ProxyResource']
 */
class LiveOutput extends models['ProxyResource'] {
  /**
   * Create a LiveOutput.
   * @property {string} [description] The description of the Live Output.
   * @property {string} assetName The asset name.
   * @property {moment.duration} archiveWindowLength ISO 8601 timespan duration
   * of the archive window length. This is duration that customer want to
   * retain the recorded content.
   * @property {string} [manifestName] The manifest file name.  If not
   * provided, the service will generate one automatically.
   * @property {object} [hls] The HLS configuration.
   * @property {number} [hls.fragmentsPerTsSegment] The amount of fragments per
   * HTTP Live Streaming (HLS) segment.
   * @property {number} [outputSnapTime] The output snapshot time.
   * @property {date} [created] The exact time the Live Output was created.
   * @property {date} [lastModified] The exact time the Live Output was last
   * modified.
   * @property {string} [provisioningState] The provisioning state of the Live
   * Output.
   * @property {string} [resourceState] The resource state of the Live Output.
   * Possible values include: 'Creating', 'Running', 'Deleting'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LiveOutput
   *
   * @returns {object} metadata of LiveOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveOutput',
      type: {
        name: 'Composite',
        className: 'LiveOutput',
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
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          assetName: {
            required: true,
            serializedName: 'properties.assetName',
            type: {
              name: 'String'
            }
          },
          archiveWindowLength: {
            required: true,
            serializedName: 'properties.archiveWindowLength',
            type: {
              name: 'TimeSpan'
            }
          },
          manifestName: {
            required: false,
            serializedName: 'properties.manifestName',
            type: {
              name: 'String'
            }
          },
          hls: {
            required: false,
            serializedName: 'properties.hls',
            type: {
              name: 'Composite',
              className: 'Hls'
            }
          },
          outputSnapTime: {
            required: false,
            serializedName: 'properties.outputSnapTime',
            type: {
              name: 'Number'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          lastModified: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModified',
            type: {
              name: 'DateTime'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          resourceState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Creating', 'Running', 'Deleting' ]
            }
          }
        }
      }
    };
  }
}

module.exports = LiveOutput;