/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as moment from "moment";

export interface SpellingTokenSuggestion {
  suggestion: string;
  readonly score?: number;
  readonly pingUrlSuffix?: string;
}

export interface SpellingFlaggedToken {
  offset: number;
  token: string;
  /**
   * Possible values include: 'UnknownToken', 'RepeatedToken'
  */
  type: string;
  readonly suggestions?: SpellingTokenSuggestion[];
  readonly pingUrlSuffix?: string;
}

export interface ResponseBase {
  /**
   * Polymorphic Discriminator
  */
  _type: string;
}

/**
 * Defines the identity of a resource.
*/
export interface Identifiable extends ResponseBase {
  /**
   * A String identifier.
  */
  readonly id?: string;
}

/**
 * Defines a response. All schemas that could be returned at the root of a response should inherit
 * from this
*/
export interface Response extends Identifiable {
}

export interface Answer extends Response {
}

export interface SpellCheck extends Answer {
  flaggedTokens: SpellingFlaggedToken[];
}

/**
 * Defines the error that occurred.
*/
export interface ErrorModel {
  /**
   * The error code that identifies the category of error. Possible values include: 'None',
   * 'ServerError', 'InvalidRequest', 'RateLimitExceeded', 'InvalidAuthorization',
   * 'InsufficientAuthorization'
  */
  code: string;
  /**
   * The error code that further helps to identify the error. Possible values include:
   * 'UnexpectedError', 'ResourceError', 'NotImplemented', 'ParameterMissing',
   * 'ParameterInvalidValue', 'HttpNotAllowed', 'Blocked', 'AuthorizationMissing',
   * 'AuthorizationRedundancy', 'AuthorizationDisabled', 'AuthorizationExpired'
  */
  readonly subCode?: string;
  /**
   * A description of the error.
  */
  message: string;
  /**
   * A description that provides additional information about the error.
  */
  readonly moreDetails?: string;
  /**
   * The parameter in the request that caused the error.
  */
  readonly parameter?: string;
  /**
   * The parameter's value in the request that was not valid.
  */
  readonly value?: string;
}

/**
 * The top-level response that represents a failed request.
*/
export interface ErrorResponse extends Response {
  /**
   * A list of errors that describe the reasons why the request failed.
  */
  errors: ErrorModel[];
}