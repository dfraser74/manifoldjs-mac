'use strict';

var manifoldjsLib = require('manifoldjs-lib');

var validationConstants = manifoldjsLib.constants.validation,
    imageValidation =  manifoldjsLib.manifestTools.imageValidation;

var constants = require('../constants');

module.exports = function (manifestContent, callback) {
  var description = 'A 16x16 icon is required for building the app icon set (app.icns)',
  platform = constants.platform.id,
  level = validationConstants.levels.suggestion,
  requiredIconSizes = ['16x16'];

  imageValidation(manifestContent, description, platform, level, requiredIconSizes, callback);
};