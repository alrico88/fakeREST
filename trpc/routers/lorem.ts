import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['lorem'];

export const loremRouter = router({
  getLines: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/lines',
        description:
          "Generates the given number lines of lorem separated by '\n'.",
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('The minimum number of lines to generate.')
          .optional(),
        max: z
          .number()
          .describe('The maximum number of lines to generate.')
          .optional(),
      })
    )
    .output(
      z.object({
        lines: z.string(),
      })
    )
    .query(({ input }) => ({
      lines: faker.lorem.lines({
        min: input.min,
        max: input.max,
      }),
    })),
  getParagraph: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/paragraph',
        description:
          'Generates a paragraph with the given number of sentences.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('The minimum number of sentences to generate.')
          .optional(),
        max: z
          .number()
          .describe('The maximum number of sentences to generate.')
          .optional(),
      })
    )
    .output(
      z.object({
        paragraph: z.string(),
      })
    )
    .query(({ input }) => ({
      paragraph: faker.lorem.paragraph({
        min: input.min,
        max: input.max,
      }),
    })),
  getParagraphs: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/paragraphs',
        description: 'Generates the given number of paragraphs.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('The minimum number of paragraphs to generate.')
          .optional(),
        max: z
          .number()
          .describe('The maximum number of paragraphs to generate.')
          .optional(),
        separator: z
          .string()
          .describe('The separator to use.')
          .default('\n')
          .optional(),
      })
    )
    .output(
      z.object({
        paragraphs: z.string(),
      })
    )
    .query(({ input }) => ({
      paragraphs: faker.lorem.paragraphs(
        {
          min: input.min,
          max: input.max,
        },
        input.separator
      ),
    })),
  getSentence: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/sentence',
        description:
          'Generates a space separated list of words beginning with a capital letter and ending with a period.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('The minimum number of words to generate.')
          .optional(),
        max: z
          .number()
          .describe('The maximum number of words to generate.')
          .optional(),
      })
    )
    .output(
      z.object({
        sentence: z.string(),
      })
    )
    .query(({ input }) => ({
      sentence: faker.lorem.sentence({
        min: input.min,
        max: input.max,
      }),
    })),
  getSentences: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/sentences',
        description: 'Generates the given number of sentences.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('The minimum number of sentences to generate.')
          .optional(),
        max: z
          .number()
          .describe('The maximum number of sentences to generate.')
          .optional(),
        separator: z
          .string()
          .describe('The separator to use.')
          .optional()
          .default('\n'),
      })
    )
    .output(
      z.object({
        sentences: z.string(),
      })
    )
    .query(({ input }) => ({
      sentences: faker.lorem.sentences(
        {
          min: input.min,
          max: input.max,
        },
        input.separator
      ),
    })),
  getSlug: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/slug',
        description:
          'Generates a slugified text consisting of the given number of hyphen separated words.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('The minimum number of words to generate.')
          .optional(),
        max: z
          .number()
          .describe('The maximum number of words to generate.')
          .optional(),
      })
    )
    .output(
      z.object({
        slug: z.string(),
      })
    )
    .query(({ input }) => ({
      slug: faker.lorem.slug({
        min: input.min,
        max: input.max,
      }),
    })),
  getText: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/text',
        description: 'Generates a random text based on a random lorem method.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        text: z.string(),
      })
    )
    .query(() => ({
      text: faker.lorem.text(),
    })),
  getWord: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/word',
        description: 'Generates a word of a specified length.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe('The expected length of the word.')
          .default(1)
          .optional(),
        strategy: z
          .enum(['any-length', 'closest', 'fail', 'longest', 'shortest'])
          .describe(
            'The strategy to apply when no words with a matching length are found. Available error handling strategies:  fail: Throws an error if no words with the given length are found. shortest: Returns any of the shortest words. closest: Returns any of the words closest to the given length. longest: Returns any of the longest words. any-length: Returns a word with any length.'
          )
          .default('any-length')
          .optional(),
      })
    )
    .output(
      z.object({
        word: z.string(),
      })
    )
    .query(({ input }) => ({
      word: faker.lorem.word({
        length: input.length,
        strategy: input.strategy,
      }),
    })),
  getWords: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/lorem/words',
        description: 'Generates a space separated list of words.',
      },
    })
    .input(
      z.object({
        min: z
          .number()
          .describe('The minimum number of words to generate.')
          .optional(),
        max: z
          .number()
          .describe('The maximum number of words to generate.')
          .optional(),
      })
    )
    .output(
      z.object({
        words: z.string(),
      })
    )
    .query(({ input }) => ({
      words: faker.lorem.words({
        min: input.min,
        max: input.max,
      }),
    })),
});
