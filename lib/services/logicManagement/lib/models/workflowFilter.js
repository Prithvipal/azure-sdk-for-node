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
 * The workflow filter.
 *
 */
class WorkflowFilter {
  /**
   * Create a WorkflowFilter.
   * @member {string} [state] The state of workflows. Possible values include:
   * 'NotSpecified', 'Completed', 'Enabled', 'Disabled', 'Deleted', 'Suspended'
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkflowFilter
   *
   * @returns {object} metadata of WorkflowFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowFilter',
      type: {
        name: 'Composite',
        className: 'WorkflowFilter',
        modelProperties: {
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'Completed', 'Enabled', 'Disabled', 'Deleted', 'Suspended' ]
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowFilter;