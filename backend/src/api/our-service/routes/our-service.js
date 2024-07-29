'use strict';

/**
 * our-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::our-service.our-service');
