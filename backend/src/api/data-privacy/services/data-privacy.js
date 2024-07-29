'use strict';

/**
 * data-privacy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-privacy.data-privacy');
