import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['science'];

export const scienceRouter = router({
  getChemicalElement: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/science/chemical-element',
        description: 'Returns a random periodic table element.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        chemicalElement: z.object({
          symbol: z.string(),
          name: z.string(),
          atomicNumber: z.number(),
        }),
      })
    )
    .query(() => ({
      chemicalElement: faker.science.chemicalElement(),
    })),
  getUnit: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/science/unit',
        description: 'Returns a random scientific unit.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        unit: z.object({ name: z.string(), symbol: z.string() }),
      })
    )
    .query(() => ({
      unit: faker.science.unit(),
    })),
});
