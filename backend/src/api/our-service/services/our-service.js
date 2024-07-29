'use strict';

/**
 * our-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-service.our-service');
