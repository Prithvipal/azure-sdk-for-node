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
 * Definition of the source control.
 *
 * @extends models['ProxyResource']
 */
class SourceControl extends models['ProxyResource'] {
  /**
   * Create a SourceControl.
   * @member {string} [repoUrl] The repo url of the source control.
   * @member {string} [branch] The repo branch of the source control. Include
   * branch as empty string for VsoTfvc.
   * @member {string} [folderPath] The folder path of the source control.
   * @member {boolean} [autoSync] The auto sync of the source control. Default
   * is false.
   * @member {boolean} [publishRunbook] The auto publish of the source control.
   * Default is true.
   * @member {string} [sourceType] The source type. Must be one of VsoGit,
   * VsoTfvc, GitHub. Possible values include: 'VsoGit', 'VsoTfvc', 'GitHub'
   * @member {string} [description] The description.
   * @member {date} [creationTime] The creation time.
   * @member {date} [lastModifiedTime] The last modified time.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SourceControl
   *
   * @returns {object} metadata of SourceControl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControl',
      type: {
        name: 'Composite',
        className: 'SourceControl',
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
          repoUrl: {
            required: false,
            serializedName: 'properties.repoUrl',
            type: {
              name: 'String'
            }
          },
          branch: {
            required: false,
            serializedName: 'properties.branch',
            type: {
              name: 'String'
            }
          },
          folderPath: {
            required: false,
            serializedName: 'properties.folderPath',
            type: {
              name: 'String'
            }
          },
          autoSync: {
            required: false,
            serializedName: 'properties.autoSync',
            type: {
              name: 'Boolean'
            }
          },
          publishRunbook: {
            required: false,
            serializedName: 'properties.publishRunbook',
            type: {
              name: 'Boolean'
            }
          },
          sourceType: {
            required: false,
            serializedName: 'properties.sourceType',
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
          creationTime: {
            required: false,
            nullable: false,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedTime: {
            required: false,
            nullable: false,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceControl;