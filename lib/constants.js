'use strict';

var constants = {
  platform: {
    id: 'mac',
    name: 'macOS Platform',
    type: 'darwin',
    arch: 'x64',
    supportedIconSizes: ['16', '32', '64', '128', '256', '512', '1024'],
    supportedIconExtensions: [ 'icns', 'png' ],
    supportedIconTypes: [ 'image/icns', 'image/png' ]
  }
};

module.exports = constants;
