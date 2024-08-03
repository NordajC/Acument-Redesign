'use strict';

/**
 * performance router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::performance.performance');
