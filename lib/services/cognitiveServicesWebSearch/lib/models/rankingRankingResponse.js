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
 * Defines where on the search results page content should be placed and in
 * what order.
 *
 */
class RankingRankingResponse {
  /**
   * Create a RankingRankingResponse.
   * @property {object} [pole] The search results that should be afforded the
   * most visible treatment (for example, displayed above the mainline and
   * sidebar).
   * @property {array} [pole.items] A list of search result items to display in
   * the group.
   * @property {object} [mainline] The search results to display in the
   * mainline.
   * @property {array} [mainline.items] A list of search result items to
   * display in the group.
   * @property {object} [sidebar] The search results to display in the sidebar.
   * @property {array} [sidebar.items] A list of search result items to display
   * in the group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RankingRankingResponse
   *
   * @returns {object} metadata of RankingRankingResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Ranking/RankingResponse',
      type: {
        name: 'Composite',
        className: 'RankingRankingResponse',
        modelProperties: {
          pole: {
            required: false,
            readOnly: true,
            serializedName: 'pole',
            type: {
              name: 'Composite',
              className: 'RankingRankingGroup'
            }
          },
          mainline: {
            required: false,
            readOnly: true,
            serializedName: 'mainline',
            type: {
              name: 'Composite',
              className: 'RankingRankingGroup'
            }
          },
          sidebar: {
            required: false,
            readOnly: true,
            serializedName: 'sidebar',
            type: {
              name: 'Composite',
              className: 'RankingRankingGroup'
            }
          }
        }
      }
    };
  }
}

module.exports = RankingRankingResponse;