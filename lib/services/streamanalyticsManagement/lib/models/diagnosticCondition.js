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
 * Condition applicable to the resource, or to the job overall, that warrant
 * customer attention.
 *
 */
class DiagnosticCondition {
  /**
   * Create a DiagnosticCondition.
   * @member {string} [since] The UTC timestamp of when the condition started.
   * Customers should be able to find a corresponding event in the ops log
   * around this time.
   * @member {string} [code] The opaque diagnostic code.
   * @member {string} [message] The human-readable message describing the
   * condition in detail. Localized in the Accept-Language of the client
   * request.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiagnosticCondition
   *
   * @returns {object} metadata of DiagnosticCondition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticCondition',
      type: {
        name: 'Composite',
        className: 'DiagnosticCondition',
        modelProperties: {
          since: {
            required: false,
            readOnly: true,
            serializedName: 'since',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticCondition;