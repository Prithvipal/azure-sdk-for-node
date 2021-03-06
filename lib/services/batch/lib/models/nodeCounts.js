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
 * @summary The number of nodes in each node state.
  *
 */
class NodeCounts {
  /**
   * Create a NodeCounts.
   * @property {number} creating The number of nodes in the creating state.
   * @property {number} idle The number of nodes in the idle state.
   * @property {number} offline The number of nodes in the offline state.
   * @property {number} preempted The number of nodes in the preempted state.
   * @property {number} rebooting The count of nodes in the rebooting state.
   * @property {number} reimaging The number of nodes in the reimaging state.
   * @property {number} running The number of nodes in the running state.
   * @property {number} starting The number of nodes in the starting state.
   * @property {number} startTaskFailed The number of nodes in the
   * startTaskFailed state.
   * @property {number} leavingPool The number of nodes in the leavingPool
   * state.
   * @property {number} unknown The number of nodes in the unknown state.
   * @property {number} unusable The number of nodes in the unusable state.
   * @property {number} waitingForStartTask The number of nodes in the
   * waitingForStartTask state.
   * @property {number} total The total number of nodes.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NodeCounts
   *
   * @returns {object} metadata of NodeCounts
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeCounts',
      type: {
        name: 'Composite',
        className: 'NodeCounts',
        modelProperties: {
          creating: {
            required: true,
            serializedName: 'creating',
            type: {
              name: 'Number'
            }
          },
          idle: {
            required: true,
            serializedName: 'idle',
            type: {
              name: 'Number'
            }
          },
          offline: {
            required: true,
            serializedName: 'offline',
            type: {
              name: 'Number'
            }
          },
          preempted: {
            required: true,
            serializedName: 'preempted',
            type: {
              name: 'Number'
            }
          },
          rebooting: {
            required: true,
            serializedName: 'rebooting',
            type: {
              name: 'Number'
            }
          },
          reimaging: {
            required: true,
            serializedName: 'reimaging',
            type: {
              name: 'Number'
            }
          },
          running: {
            required: true,
            serializedName: 'running',
            type: {
              name: 'Number'
            }
          },
          starting: {
            required: true,
            serializedName: 'starting',
            type: {
              name: 'Number'
            }
          },
          startTaskFailed: {
            required: true,
            serializedName: 'startTaskFailed',
            type: {
              name: 'Number'
            }
          },
          leavingPool: {
            required: true,
            serializedName: 'leavingPool',
            type: {
              name: 'Number'
            }
          },
          unknown: {
            required: true,
            serializedName: 'unknown',
            type: {
              name: 'Number'
            }
          },
          unusable: {
            required: true,
            serializedName: 'unusable',
            type: {
              name: 'Number'
            }
          },
          waitingForStartTask: {
            required: true,
            serializedName: 'waitingForStartTask',
            type: {
              name: 'Number'
            }
          },
          total: {
            required: true,
            serializedName: 'total',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeCounts;
