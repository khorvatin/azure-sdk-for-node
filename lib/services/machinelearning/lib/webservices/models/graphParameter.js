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
 * Initializes a new instance of the GraphParameter class.
 * @constructor
 * Defines a global parameter in the graph.
 *
 * @member {string} [description] Description of this graph parameter.
 *
 * @member {string} type Graph parameter's type. Possible values include:
 * 'String', 'Int', 'Float', 'Enumerated', 'Script', 'Mode', 'Credential',
 * 'Boolean', 'Double', 'ColumnPicker', 'ParameterRange', 'DataGatewayName'
 *
 * @member {array} links Association links for this parameter to nodes in the
 * graph.
 *
 */
class GraphParameter {
  constructor() {
  }

  /**
   * Defines the metadata of GraphParameter
   *
   * @returns {object} metadata of GraphParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GraphParameter',
      type: {
        name: 'Composite',
        className: 'GraphParameter',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          links: {
            required: true,
            serializedName: 'links',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GraphParameterLinkElementType',
                  type: {
                    name: 'Composite',
                    className: 'GraphParameterLink'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GraphParameter;
