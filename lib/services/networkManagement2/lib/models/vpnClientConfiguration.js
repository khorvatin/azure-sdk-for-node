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
 * Initializes a new instance of the VpnClientConfiguration class.
 * @constructor
 * VpnClientConfiguration for P2S client
 * @member {object} [vpnClientAddressPool] Gets or sets the reference of the
 * Address space resource which represents Address space for P2S VpnClient.
 * 
 * @member {array} [vpnClientAddressPool.addressPrefixes] Gets or sets List of
 * address blocks reserved for this virtual network in CIDR notation
 * 
 * @member {array} [vpnClientRootCertificates] VpnClientRootCertificate for
 * Virtual network gateway.
 * 
 * @member {array} [vpnClientRevokedCertificates] VpnClientRevokedCertificate
 * for Virtual network gateway.
 * 
 */
function VpnClientConfiguration() {
}

/**
 * Defines the metadata of VpnClientConfiguration
 *
 * @returns {object} metadata of VpnClientConfiguration
 *
 */
VpnClientConfiguration.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VpnClientConfiguration',
    type: {
      name: 'Composite',
      className: 'VpnClientConfiguration',
      modelProperties: {
        vpnClientAddressPool: {
          required: false,
          serializedName: 'vpnClientAddressPool',
          type: {
            name: 'Composite',
            className: 'AddressSpace'
          }
        },
        vpnClientRootCertificates: {
          required: false,
          serializedName: 'vpnClientRootCertificates',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VpnClientRootCertificateElementType',
                type: {
                  name: 'Composite',
                  className: 'VpnClientRootCertificate'
                }
            }
          }
        },
        vpnClientRevokedCertificates: {
          required: false,
          serializedName: 'vpnClientRevokedCertificates',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VpnClientRevokedCertificateElementType',
                type: {
                  name: 'Composite',
                  className: 'VpnClientRevokedCertificate'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VpnClientConfiguration;