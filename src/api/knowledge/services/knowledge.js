'use strict';

/**
 * knowledge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::knowledge.knowledge');
