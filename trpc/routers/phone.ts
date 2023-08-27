import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['phone'];

export const phoneRouter = router({
  getImei: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/phone/imei',
        description: 'Generates IMEI number.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        imei: z.string(),
      })
    )
    .query(() => ({
      imei: faker.phone.imei(),
    })),
  getNumber: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/phone/number',
        description: 'Generates a random phone number.',
      },
    })
    .input(
      z.object({
        format: z
          .string()
          .optional()
          .describe(
            'Format of the phone number. Defaults to a random phone number format. (Ex: 501-###-###)'
          ),
      })
    )
    .output(
      z.object({
        number: z.string(),
      })
    )
    .query(({ input }) => ({
      number: faker.phone.number(input.format),
    })),
});
