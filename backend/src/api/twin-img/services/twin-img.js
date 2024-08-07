'use strict';

/**
 * twin-img service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::twin-img.twin-img');
