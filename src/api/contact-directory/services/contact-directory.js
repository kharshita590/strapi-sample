'use strict';

/**
 * contact-directory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-directory.contact-directory');
