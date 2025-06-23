'use strict';

const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Define the schema for MarkdownRemarkFrontmatter to include optional audio fields
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      audioRecap: String
      audioPodcast: String
    }
  `;

  createTypes(typeDefs);
};

module.exports = createSchemaCustomization;