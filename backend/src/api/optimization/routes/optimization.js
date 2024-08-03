'use strict';

/**
 * optimization router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::optimization.optimization');
