'use strict';

/**
 * our-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::our-service.our-service');
