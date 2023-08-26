import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const numberRouter = router({
  getBigInt: publicProcedure
    .meta({
      openapi: {
        tags: ['number'],
        method: 'GET',
        path: '/number/big-int',
        description: 'Returns a BigInt number.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('Upper bound for generated bigint.')
          .optional(),
        max: z
          .number()
          .describe('Upper bound for generated bigint.')
          .optional(),
      })
    )
    .output(
      z.object({
        bigInt: z.bigint(),
      })
    )
    .query(({ input }) => ({
      bigInt: faker.number.bigInt({
        min: input.min,
        max: input.max,
      }),
    })),
  getBinary: publicProcedure
    .meta({
      openapi: {
        tags: ['number'],
        method: 'GET',
        path: '/number/binary',
        description: 'Returns a binary number.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('Upper bound for generated number.')
          .default(0)
          .optional(),
        max: z
          .number()
          .describe('Upper bound for generated number.')
          .default(1)
          .optional(),
      })
    )
    .output(
      z.object({
        binary: z.string(),
      })
    )
    .query(() => ({
      binary: faker.number.binary(),
    })),
  getFloat: publicProcedure
    .meta({
      openapi: {
        tags: ['number'],
        method: 'GET',
        path: '/number/float',
        description:
          'Returns a single random floating-point number for a given precision or range and precision.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('Upper bound for generated number.')
          .default(0.0)
          .optional(),

        max: z
          .number()
          .describe('Upper bound for generated number.')
          .default(1.0)
          .optional(),

        precision: z
          .number()
          .describe('Precision of the generated number.')
          .default(0.01)
          .optional(),
      })
    )
    .output(
      z.object({
        float: z.number(),
      })
    )
    .query(({ input }) => ({
      float: faker.number.float({
        min: input.min,
        max: input.max,
        precision: input.precision,
      }),
    })),
  getHex: publicProcedure
    .meta({
      openapi: {
        tags: ['number'],
        method: 'GET',
        path: '/number/hex',
        description: 'Returns a lowercase hexadecimal number.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('Upper bound for generated number.')
          .optional()
          .default(0),
        max: z
          .number()
          .describe('Upper bound for generated number.')
          .optional()
          .default(15),
      })
    )
    .output(
      z.object({
        hex: z.string(),
      })
    )
    .query(() => ({
      hex: faker.number.hex(),
    })),
  getInt: publicProcedure
    .meta({
      openapi: {
        tags: ['number'],
        method: 'GET',
        path: '/number/int',
        description:
          'Returns a single random integer between zero and the given max value or the given range. The bounds are inclusive.',
      },
    })
    .input(
      z
        .object({
          min: z
            .number()
            .describe('Upper bound for generated number.')
            .default(0)
            .optional(),
          max: z
            .number()
            .describe('Upper bound for generated number.')
            .default(Number.MAX_SAFE_INTEGER)
            .optional(),
        })
        .refine((val) => val.max >= val.min)
    )
    .output(
      z.object({
        int: z.number(),
      })
    )
    .query(({ input }) => ({
      int: faker.number.int({
        min: input.min,
        max: input.max,
      }),
    })),
  getOctal: publicProcedure
    .meta({
      openapi: {
        tags: ['number'],
        method: 'GET',
        path: '/number/octal',
        description: 'Returns an octal number.',
      },
    })
    .input(
      z
        .object({
          min: z
            .number()
            .describe('Upper bound for generated number.')
            .default(0)
            .optional(),
          max: z
            .number()
            .describe('Upper bound for generated number.')
            .default(7)
            .optional(),
        })
        .refine((val) => val.max >= val.min)
    )
    .output(
      z.object({
        octal: z.string(),
      })
    )
    .query(() => ({
      octal: faker.number.octal(),
    })),
});
