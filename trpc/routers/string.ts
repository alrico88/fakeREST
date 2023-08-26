import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['string'];

const casingSchema = z
  .enum(['lower', 'upper', 'mixed'])
  .describe('The casing of the characters.')
  .default('mixed')
  .optional();

const alphaSchema = z.object({
  casing: casingSchema,
  exclude: z
    .preprocess((val) => String(val).split(','), z.string())
    .describe(
      'An array with characters which should be excluded in the generated string.'
    )
    .default([])
    .optional(),
  length: z
    .number()
    .describe('The number or range of characters to generate.')
    .default(1)
    .optional(),
});

export const stringRouter = router({
  getAlpha: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/alpha',
        description:
          'Generating a string consisting of letters in the English alphabet.',
      },
    })
    .input(alphaSchema)
    .output(
      z.object({
        alpha: z.string(),
      })
    )
    .query(({ input }) => ({
      alpha: faker.string.alpha({
        casing: input.casing,
        exclude: input.exclude,
        length: input.length,
      }),
    })),
  getAlphanumeric: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/alphanumeric',
        description:
          'Generating a string consisting of alpha characters and digits.',
      },
    })
    .input(alphaSchema)
    .output(
      z.object({
        alphanumeric: z.string(),
      })
    )
    .query(({ input }) => ({
      alphanumeric: faker.string.alphanumeric({
        casing: input.casing,
        exclude: input.exclude,
        length: input.length,
      }),
    })),
  getBinary: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/binary',
        description: 'Returns a binary string.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe(
            'The number or range of characters to generate after the prefix.'
          )
          .default(1)
          .optional(),
        prefix: z
          .string()
          .describe('Prefix for the generated number.')
          .default('0b')
          .optional(),
      })
    )
    .output(
      z.object({
        binary: z.string(),
      })
    )
    .query(({ input }) => ({
      binary: faker.string.binary({
        length: input.length,
        prefix: input.prefix,
      }),
    })),
  getFromCharacters: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/from-characters',
        description: 'Generates a string from the given characters.',
      },
    })
    .input(
      z.object({
        characters: z
          .preprocess((val) => String(val).split(','), z.string())
          .describe(
            'The characters to use for the string. Can be a string or an array of characters. If it is an array, then each element is treated as a single character even if it is a string with multiple characters.'
          ),
        length: z
          .number()
          .describe('The length of the string to generate.')
          .optional()
          .default(1),
      })
    )
    .output(
      z.object({
        fromCharacters: z.string(),
      })
    )
    .query(({ input }) => ({
      fromCharacters: faker.string.fromCharacters(
        input.characters,
        input.length
      ),
    })),
  getHexadecimal: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/hexadecimal',
        description: 'Returns a hexadecimal string.',
      },
    })
    .input(
      z.object({
        casing: casingSchema,
        length: z
          .number()
          .describe(
            'The number or range of characters to generate after the prefix.'
          )
          .default(1)
          .optional(),
        prefix: z
          .string()
          .describe('Prefix for the generated number.')
          .default('0x')
          .optional(),
      })
    )
    .output(
      z.object({
        hexadecimal: z.string(),
      })
    )
    .query(({ input }) => ({
      hexadecimal: faker.string.hexadecimal({
        casing: input.casing,
        length: input.length,
        prefix: input.prefix,
      }),
    })),
  getNanoid: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/nanoid',
        description: 'Generates a Nano ID.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe('Length of the generated string.')
          .optional()
          .default(21),
      })
    )
    .output(
      z.object({
        nanoid: z.string(),
      })
    )
    .query(({ input }) => ({
      nanoid: faker.string.nanoid(input.length),
    })),
  getNumeric: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/numeric',
        description: 'Generates a given length string of digits.',
      },
    })
    .input(
      z.object({
        allowLeadingZeros: processedBoolean
          .describe('Whether leading zeros are allowed or not.')
          .optional(),
        exclude: z
          .preprocess((val) => String(val).split(','), z.string())
          .describe(
            'An array of digits which should be excluded in the generated string.'
          )
          .default([])
          .optional(),
        length: z
          .number()
          .describe('The number or range of digits to generate.')
          .default(1)
          .optional(),
      })
    )
    .output(
      z.object({
        numeric: z.string(),
      })
    )
    .query(({ input }) => ({
      numeric: faker.string.numeric({
        allowLeadingZeros: input.allowLeadingZeros,
        exclude: input.exclude,
        length: input.length,
      }),
    })),
  getOctal: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/octal',
        description: 'Returns an octal string.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe(
            'The number or range of characters to generate after the prefix.'
          )
          .default(1)
          .optional(),
        prefix: z
          .string()
          .describe('Prefix for the generated number.')
          .default('0o')
          .optional(),
      })
    )
    .output(
      z.object({
        octal: z.string(),
      })
    )
    .query(({ input }) => ({
      octal: faker.string.octal({
        length: input.length,
        prefix: input.prefix,
      }),
    })),
  getSample: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/sample',
        description:
          'Returns a string containing UTF-16 chars between 33 and 125 (! to }).',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe('Length of the generated string. Max length is 2^20.')
          .optional()
          .default(10),
      })
    )
    .output(
      z.object({
        sample: z.string(),
      })
    )
    .query(({ input }) => ({
      sample: faker.string.sample(input.length),
    })),
  getSymbol: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/symbol',
        description: 'Returns a string containing only special characters.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe('Length of the generated string. Max length is 2^20.')
          .default(10)
          .optional(),
      })
    )
    .output(
      z.object({
        symbol: z.string(),
      })
    )
    .query(({ input }) => ({
      symbol: faker.string.symbol(input.length),
    })),
  getUuid: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/string/uuid',
        description: 'Returns a UUID v4 (Universally Unique Identifier).',
      },
    })
    .input(z.void())
    .output(
      z.object({
        uuid: z.string(),
      })
    )
    .query(() => ({
      uuid: faker.string.uuid(),
    })),
});
