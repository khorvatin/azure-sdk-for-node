/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the TaskAddCollectionResult class.
 * @constructor
 * Response to a TaskOperations.AddCollection request.
 * @member {array} [value] Gets or sets the results of the add task collection
 * operation.
 * 
 */
function TaskAddCollectionResult() {
}

/**
 * Defines the metadata of TaskAddCollectionResult
 *
 * @returns {object} metadata of TaskAddCollectionResult
 *
 */
TaskAddCollectionResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TaskAddCollectionResult',
    type: {
      name: 'Composite',
      className: 'TaskAddCollectionResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'TaskAddResultElementType',
                type: {
                  name: 'Composite',
                  className: 'TaskAddResult'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = TaskAddCollectionResult;