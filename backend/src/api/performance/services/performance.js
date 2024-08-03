'use strict';

/**
 * performance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::performance.performance');
