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
 * ServiceAssociationLink resource.
 *
 * @extends models['SubResource']
 */
class ServiceAssociationLink extends models['SubResource'] {
  /**
   * Create a ServiceAssociationLink.
   * @property {string} [linkedResourceType] Resource type of the linked
   * resource.
   * @property {string} [link] Link to the external resource.
   * @property {string} [provisioningState] Provisioning state of the
   * ServiceAssociationLink resource.
   * @property {string} [name] Name of the resource that is unique within a
   * resource group. This name can be used to access the resource.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceAssociationLink
   *
   * @returns {object} metadata of ServiceAssociationLink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceAssociationLink',
      type: {
        name: 'Composite',
        className: 'ServiceAssociationLink',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          linkedResourceType: {
            required: false,
            serializedName: 'properties.linkedResourceType',
            type: {
              name: 'String'
            }
          },
          link: {
            required: false,
            serializedName: 'properties.link',
            type: {
              name: 'String'
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
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceAssociationLink;