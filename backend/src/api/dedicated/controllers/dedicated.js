'use strict';

/**
 * dedicated controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dedicated.dedicated');
