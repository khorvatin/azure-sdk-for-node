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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ResourceLink class.
 * @constructor
 * The resource link.
 *
 * @member {string} [id] The fully qualified ID of the resource link.
 *
 * @member {string} [name] The name of the resource link.
 *
 * @member {object} [properties] Properties for resource link.
 *
 * @member {string} [properties.sourceId] The fully qualified ID of the source
 * resource in the link.
 *
 * @member {string} [properties.targetId] The fully qualified ID of the target
 * resource in the link.
 *
 * @member {string} [properties.notes] Notes about the resource link.
 *
 */
class ResourceLink {
  constructor() {
  }

  /**
   * Defines the metadata of ResourceLink
   *
   * @returns {object} metadata of ResourceLink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceLink',
      type: {
        name: 'Composite',
        className: 'ResourceLink',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'ResourceLinkProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceLink;