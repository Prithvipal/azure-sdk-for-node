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
 * List of machines.
 */
class MachineResultList extends Array {
  /**
   * Create a MachineResultList.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MachineResultList
   *
   * @returns {object} metadata of MachineResultList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MachineResultList',
      type: {
        name: 'Composite',
        className: 'MachineResultList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MachineElementType',
                  type: {
                    name: 'Composite',
                    className: 'Machine'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MachineResultList;
