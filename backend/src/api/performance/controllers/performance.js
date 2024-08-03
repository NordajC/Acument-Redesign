'use strict';

/**
 * performance controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::performance.performance');
