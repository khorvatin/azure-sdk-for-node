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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the SecurityGroupViewResult class.
 * @constructor
 * The information about security rules applied to the specified VM.
 *
 * @member {array} [networkInterfaces] List of network interfaces on the
 * specified VM.
 *
 */
function SecurityGroupViewResult() {
}

/**
 * Defines the metadata of SecurityGroupViewResult
 *
 * @returns {object} metadata of SecurityGroupViewResult
 *
 */
SecurityGroupViewResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SecurityGroupViewResult',
    type: {
      name: 'Composite',
      className: 'SecurityGroupViewResult',
      modelProperties: {
        networkInterfaces: {
          required: false,
          serializedName: 'networkInterfaces',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'SecurityGroupNetworkInterfaceElementType',
                type: {
                  name: 'Composite',
                  className: 'SecurityGroupNetworkInterface'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = SecurityGroupViewResult;