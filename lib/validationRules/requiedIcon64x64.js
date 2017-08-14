'use strict';

var pwabuilderLib = require('pwabuilder-lib');

var validationConstants = pwabuilderLib.constants.validation,
    imageValidation =  pwabuilderLib.manifestTools.imageValidation;

var constants = require('../constants');

module.exports = function (manifestContent, callback) {
  var description = 'A 64x64 icon is required for building the app icon set (app.icns)',
  platform = constants.platform.id,
  level = validationConstants.levels.suggestion,
  requiredIconSizes = ['64x64'];

  imageValidation(manifestContent, description, platform, level, requiredIconSizes, callback);
};