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
 * All term Id response properties.
 *
 */
class TermsData {
  /**
   * Create a TermsData.
   * @property {string} [language] Language of the terms.
   * @property {array} [terms] List of terms.
   * @property {object} [status] Term Status.
   * @property {number} [status.code] Status code.
   * @property {string} [status.description] Status description.
   * @property {string} [status.exception] Exception status.
   * @property {string} [trackingId] Tracking Id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TermsData
   *
   * @returns {object} metadata of TermsData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TermsData',
      type: {
        name: 'Composite',
        className: 'TermsData',
        modelProperties: {
          language: {
            required: false,
            serializedName: 'Language',
            type: {
              name: 'String'
            }
          },
          terms: {
            required: false,
            serializedName: 'Terms',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TermsInListElementType',
                  type: {
                    name: 'Composite',
                    className: 'TermsInList'
                  }
              }
            }
          },
          status: {
            required: false,
            serializedName: 'Status',
            type: {
              name: 'Composite',
              className: 'Status'
            }
          },
          trackingId: {
            required: false,
            serializedName: 'TrackingId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TermsData;