'use strict';

/**
 * dedicated router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dedicated.dedicated');
