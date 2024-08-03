'use strict';

/**
 * available service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::available.available');
