'use strict';

/**
 * std service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::std.std');
