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
 * The PlayReady license
 *
 */
class ContentKeyPolicyPlayReadyLicense {
  /**
   * Create a ContentKeyPolicyPlayReadyLicense.
   * @property {boolean} allowTestDevices A flag indicating whether test
   * devices can use the license.
   * @property {date} [beginDate] The begin date of license
   * @property {date} [expirationDate] The expiration date of license.
   * @property {moment.duration} [relativeBeginDate] The relative begin date of
   * license.
   * @property {moment.duration} [relativeExpirationDate] The relative
   * expiration date of license.
   * @property {moment.duration} [gracePeriod] The grace period of license.
   * @property {object} [playRight] The license PlayRight
   * @property {moment.duration} [playRight.firstPlayExpiration] The amount of
   * time that the license is valid after the license is first used to play
   * content.
   * @property {number} [playRight.scmsRestriction] Configures the Serial Copy
   * Management System (SCMS) in the license. Must be between 0 and 3
   * inclusive.
   * @property {number} [playRight.agcAndColorStripeRestriction] Configures
   * Automatic Gain Control (AGC) and Color Stripe in the license. Must be
   * between 0 and 3 inclusive.
   * @property {object} [playRight.explicitAnalogTelevisionOutputRestriction]
   * Configures the Explicit Analog Television Output Restriction in the
   * license. Configuration data must be between 0 and 3 inclusive.
   * @property {boolean}
   * [playRight.explicitAnalogTelevisionOutputRestriction.bestEffort] Indicates
   * whether this restriction is enforced on a Best Effort basis.
   * @property {number}
   * [playRight.explicitAnalogTelevisionOutputRestriction.configurationData]
   * Configures the restriction control bits. Must be between 0 and 3
   * inclusive.
   * @property {boolean} [playRight.digitalVideoOnlyContentRestriction] Enables
   * the Image Constraint For Analog Component Video Restriction in the
   * license.
   * @property {boolean}
   * [playRight.imageConstraintForAnalogComponentVideoRestriction] Enables the
   * Image Constraint For Analog Component Video Restriction in the license.
   * @property {boolean}
   * [playRight.imageConstraintForAnalogComputerMonitorRestriction] Enables the
   * Image Constraint For Analog Component Video Restriction in the license.
   * @property {string} [playRight.allowPassingVideoContentToUnknownOutput]
   * Configures Unknown output handling settings of the license. Possible
   * values include: 'Unknown', 'NotAllowed', 'Allowed',
   * 'AllowedWithVideoConstriction'
   * @property {number} [playRight.uncompressedDigitalVideoOpl] Specifies the
   * output protection level for uncompressed digital video.
   * @property {number} [playRight.compressedDigitalVideoOpl] Specifies the
   * output protection level for compressed digital video.
   * @property {number} [playRight.analogVideoOpl] Specifies the output
   * protection level for compressed digital audio.
   * @property {number} [playRight.compressedDigitalAudioOpl] Specifies the
   * output protection level for compressed digital audio.
   * @property {number} [playRight.uncompressedDigitalAudioOpl] Specifies the
   * output protection level for uncompressed digital audio.
   * @property {string} licenseType The license type. Possible values include:
   * 'Unknown', 'NonPersistent', 'Persistent'
   * @property {object} contentKeyLocation The content key location.
   * @property {string} [contentKeyLocation.odatatype] Polymorphic
   * Discriminator
   * @property {string} contentType The PlayReady content type. Possible values
   * include: 'Unknown', 'Unspecified', 'UltraVioletDownload',
   * 'UltraVioletStreaming'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyLicense
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyLicense
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyPlayReadyLicense',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyPlayReadyLicense',
        modelProperties: {
          allowTestDevices: {
            required: true,
            serializedName: 'allowTestDevices',
            type: {
              name: 'Boolean'
            }
          },
          beginDate: {
            required: false,
            serializedName: 'beginDate',
            type: {
              name: 'DateTime'
            }
          },
          expirationDate: {
            required: false,
            serializedName: 'expirationDate',
            type: {
              name: 'DateTime'
            }
          },
          relativeBeginDate: {
            required: false,
            serializedName: 'relativeBeginDate',
            type: {
              name: 'TimeSpan'
            }
          },
          relativeExpirationDate: {
            required: false,
            serializedName: 'relativeExpirationDate',
            type: {
              name: 'TimeSpan'
            }
          },
          gracePeriod: {
            required: false,
            serializedName: 'gracePeriod',
            type: {
              name: 'TimeSpan'
            }
          },
          playRight: {
            required: false,
            serializedName: 'playRight',
            type: {
              name: 'Composite',
              className: 'ContentKeyPolicyPlayReadyPlayRight'
            }
          },
          licenseType: {
            required: true,
            serializedName: 'licenseType',
            type: {
              name: 'String'
            }
          },
          contentKeyLocation: {
            required: true,
            serializedName: 'contentKeyLocation',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'ContentKeyPolicyPlayReadyContentKeyLocation',
              className: 'ContentKeyPolicyPlayReadyContentKeyLocation'
            }
          },
          contentType: {
            required: true,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyPlayReadyLicense;