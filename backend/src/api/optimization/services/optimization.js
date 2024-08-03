'use strict';

/**
 * optimization service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::optimization.optimization');
