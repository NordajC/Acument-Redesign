'use strict';

/**
 * agile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agile.agile');
