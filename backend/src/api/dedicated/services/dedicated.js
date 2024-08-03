'use strict';

/**
 * dedicated service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dedicated.dedicated');
