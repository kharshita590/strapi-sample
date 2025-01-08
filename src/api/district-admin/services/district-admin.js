'use strict';

/**
 * district-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::district-admin.district-admin');
