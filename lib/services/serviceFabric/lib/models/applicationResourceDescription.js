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
 * This type describes a application resource.
 *
 */
class ApplicationResourceDescription {
  /**
   * Create a ApplicationResourceDescription.
   * @property {string} name Name of the Application resource.
   * @property {string} [description] User readable description of the
   * application.
   * @property {array} [services] Describes the services in the application.
   * This property is used to create or modify services of the application. On
   * get only the name of the service is returned. The service description can
   * be obtained by querying for the service resource.
   * @property {object} [diagnostics] Describes the diagnostics definition and
   * usage for an application resource.
   * @property {array} [diagnostics.sinks] List of supported sinks that can be
   * referenced.
   * @property {boolean} [diagnostics.enabled] Status of whether or not sinks
   * are enabled.
   * @property {array} [diagnostics.defaultSinkRefs] The sinks to be used if
   * diagnostics is enabled. Sink choices can be overridden at the service and
   * code package level.
   * @property {string} [debugParams] Internal - used by Visual Studio to setup
   * the debugging session on the local development environment.
   * @property {array} [serviceNames] Names of the services in the application.
   * @property {string} [status] Status of the application. Possible values
   * include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
   * @property {string} [statusDetails] Gives additional information about the
   * current status of the application.
   * @property {string} [healthState] Describes the health state of an
   * application resource. Possible values include: 'Invalid', 'Ok', 'Warning',
   * 'Error', 'Unknown'
   * @property {string} [unhealthyEvaluation] When the application's health
   * state is not 'Ok', this additional details from service fabric Health
   * Manager for the user to know why the application is marked unhealthy.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationResourceDescription
   *
   * @returns {object} metadata of ApplicationResourceDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationResourceDescription',
      type: {
        name: 'Composite',
        className: 'ApplicationResourceDescription',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
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
          services: {
            required: false,
            serializedName: 'properties.services',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceResourceDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceResourceDescription'
                  }
              }
            }
          },
          diagnostics: {
            required: false,
            serializedName: 'properties.diagnostics',
            type: {
              name: 'Composite',
              className: 'DiagnosticsDescription'
            }
          },
          debugParams: {
            required: false,
            serializedName: 'properties.debugParams',
            type: {
              name: 'String'
            }
          },
          serviceNames: {
            required: false,
            readOnly: true,
            serializedName: 'properties.serviceNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          statusDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.statusDetails',
            type: {
              name: 'String'
            }
          },
          healthState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.healthState',
            type: {
              name: 'String'
            }
          },
          unhealthyEvaluation: {
            required: false,
            readOnly: true,
            serializedName: 'properties.unhealthyEvaluation',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationResourceDescription;