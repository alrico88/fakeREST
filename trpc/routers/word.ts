import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['word'];
const wordSchema = z.object({
  length: z.number().describe('The expected length of the word.').optional(),
  strategy: z
    .enum(['any-length', 'closest', 'fail', 'longest', 'shortest'])
    .describe(
      'The strategy to apply when no words with a matching length are found.'
    )
    .default('any-length')
    .optional(),
});

export const wordRouter = router({
  getAdjective: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/adjective',
        description:
          'Returns an adjective of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        adjective: z.string(),
      })
    )
    .query(({ input }) => ({
      adjective: faker.word.adjective({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getAdverb: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/adverb',
        description:
          'Returns an adverb of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        adverb: z.string(),
      })
    )
    .query(() => ({
      adverb: faker.word.adverb(),
    })),
  getConjunction: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/conjunction',
        description:
          'Returns a conjunction of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        conjunction: z.string(),
      })
    )
    .query(({ input }) => ({
      conjunction: faker.word.conjunction({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getInterjection: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/interjection',
        description:
          'Returns an interjection of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        interjection: z.string(),
      })
    )
    .query(({ input }) => ({
      interjection: faker.word.interjection({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getNoun: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/noun',
        description: 'Returns a noun of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        noun: z.string(),
      })
    )
    .query(({ input }) => ({
      noun: faker.word.noun({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getPreposition: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/preposition',
        description:
          'Returns a preposition of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        preposition: z.string(),
      })
    )
    .query(({ input }) => ({
      preposition: faker.word.preposition({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getSample: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/sample',
        description:
          'Returns a random sample of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        sample: z.string(),
      })
    )
    .query(({ input }) => ({
      sample: faker.word.sample({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getVerb: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/verb',
        description: 'Returns a verb of random or optionally specified length.',
      },
    })
    .input(wordSchema)
    .output(
      z.object({
        verb: z.string(),
      })
    )
    .query(({ input }) => ({
      verb: faker.word.verb({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getWords: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/word/words',
        description:
          'Returns a string containing a number of space separated random words.',
      },
    })
    .input(
      z.object({
        count: z.number().describe('The number of words to return.').optional(),
      })
    )
    .output(
      z.object({
        words: z.string(),
      })
    )
    .query(({ input }) => ({
      words: faker.word.words({
        count: input.count,
      }),
    })),
});
