'use strict';

/**
 * available controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::available.available');
