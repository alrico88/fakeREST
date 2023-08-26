import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['database'];

export const databaseRouter = router({
  getCollation: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/database/collation',
        method: 'GET',
        description: 'Returns a random database collation.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        collation: z.string(),
      })
    )
    .query(() => ({
      collation: faker.database.collation(),
    })),
  getColumn: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/database/column',
        method: 'GET',
        description: 'Returns a random database column name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        column: z.string(),
      })
    )
    .query(() => ({
      column: faker.database.column(),
    })),
  getEngine: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/database/engine',
        method: 'GET',
        description: 'Returns a random database engine.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        engine: z.string(),
      })
    )
    .query(() => ({
      engine: faker.database.engine(),
    })),
  getMongodbObjectId: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/database/mongodb-object-id',
        method: 'GET',
        description: 'Returns a MongoDB ObjectId string.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        mongodbObjectId: z.string(),
      })
    )
    .query(() => ({
      mongodbObjectId: faker.database.mongodbObjectId(),
    })),
  getType: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/database/type',
        method: 'GET',
        description: 'Returns a random database column type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        type: z.string(),
      })
    )
    .query(() => ({
      type: faker.database.type(),
    })),
});
