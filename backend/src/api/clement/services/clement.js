'use strict';

/**
 * clement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clement.clement');
