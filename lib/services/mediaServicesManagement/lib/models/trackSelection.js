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
 * Class to select a track
 *
 */
class TrackSelection {
  /**
   * Create a TrackSelection.
   * @property {array} [trackSelections] TrackSelections is a track property
   * condition list which can specify track(s)
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrackSelection
   *
   * @returns {object} metadata of TrackSelection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrackSelection',
      type: {
        name: 'Composite',
        className: 'TrackSelection',
        modelProperties: {
          trackSelections: {
            required: false,
            serializedName: 'trackSelections',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrackPropertyConditionElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrackPropertyCondition'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TrackSelection;