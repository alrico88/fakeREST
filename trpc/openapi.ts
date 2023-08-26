import { generateOpenApiDocument } from 'trpc-openapi';

import { appRouter } from './router';

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'FakeREST',
  description:
    'OpenAPI compliant REST API to generate fake data based on faker.js',
  version: '1.0.0',
  baseUrl: 'http://localhost:3000/api',
  docsUrl: 'https://github.com/alrico88/fakerest',
  tags: [],
});
