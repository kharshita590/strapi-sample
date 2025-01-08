'use strict';

/**
 * police-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::police-admin.police-admin');
