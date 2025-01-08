'use strict';

/**
 * disaster service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disaster.disaster');
