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
 * Describes all the properties of a JobOutput.
 *
 */
class JobOutput {
  /**
   * Create a JobOutput.
   * @property {object} [error] If the JobOutput is in the Error state, it
   * contains the details of the error.
   * @property {string} [error.code] Error code describing the error. Possible
   * values include: 'ServiceError', 'ServiceTransientError',
   * 'DownloadNotAccessible', 'DownloadTransientError', 'UploadNotAccessible',
   * 'UploadTransientError', 'ConfigurationUnsupported', 'ContentMalformed',
   * 'ContentUnsupported'
   * @property {string} [error.message] A human-readable language-dependent
   * representation of the error.
   * @property {string} [error.category] Helps with categorization of errors.
   * Possible values include: 'Service', 'Download', 'Upload', 'Configuration',
   * 'Content'
   * @property {string} [error.retry] Indicates that it may be possible to
   * retry the Job. If retry is unsuccessful, please contact Azure support via
   * Azure Portal. Possible values include: 'DoNotRetry', 'MayRetry'
   * @property {array} [error.details] An array of details about specific
   * errors that led to this reported error.
   * @property {string} [state] Describes the state of the JobOutput. Possible
   * values include: 'Canceled', 'Canceling', 'Error', 'Finished',
   * 'Processing', 'Queued', 'Scheduled'
   * @property {number} [progress] If the JobOutput is in a Processing state,
   * this contains the Job completion percentage. The value is an estimate and
   * not intended to be used to predict Job completion times. To determine if
   * the JobOutput is complete, use the State property.
   * @property {string} [label] A label that is assigned to a JobOutput in
   * order to help uniquely identify it. This is useful when your Transform has
   * more than one TransformOutput, whereby your Job has more than one
   * JobOutput. In such cases, when you submit the Job, you will add two or
   * more JobOutputs, in the same order as TransformOutputs in the Transform.
   * Subsequently, when you retrieve the Job, either through events or on a GET
   * request, you can use the label to easily identify the JobOutput. If a
   * label is not provided, a default value of '{presetName}_{outputIndex}'
   * will be used, where the preset name is the name of the preset in the
   * corresponding TransformOutput and the output index is the relative index
   * of the this JobOutput within the Job. Note that this index is the same as
   * the relative index of the corresponding TransformOutput within its
   * Transform.
   * @property {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobOutput
   *
   * @returns {object} metadata of JobOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobOutput',
        className: 'JobOutput',
        modelProperties: {
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'JobError'
            }
          },
          state: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          progress: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'progress',
            type: {
              name: 'Number'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
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
          }
        }
      }
    };
  }
}

module.exports = JobOutput;