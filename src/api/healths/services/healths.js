'use strict';

/**
 * healths service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::healths.healths');
