import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['hacker'];

export const hackerRouter = router({
  getAbbreviation: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/hacker/abbreviation',
        description: 'Returns a random hacker/IT abbreviation.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        abbreviation: z.string(),
      })
    )
    .query(() => ({
      abbreviation: faker.hacker.abbreviation(),
    })),
  getAdjective: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/hacker/adjective',
        description: 'Returns a random hacker/IT adjective.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        adjective: z.string(),
      })
    )
    .query(() => ({
      adjective: faker.hacker.adjective(),
    })),
  getIngverb: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/hacker/ingverb',
        description:
          'Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).',
      },
    })
    .input(z.void())
    .output(
      z.object({
        ingverb: z.string(),
      })
    )
    .query(() => ({
      ingverb: faker.hacker.ingverb(),
    })),
  getNoun: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/hacker/noun',
        description: 'Returns a random hacker/IT noun.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        noun: z.string(),
      })
    )
    .query(() => ({
      noun: faker.hacker.noun(),
    })),
  getPhrase: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/hacker/phrase',
        description: 'Generates a random hacker/IT phrase.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        phrase: z.string(),
      })
    )
    .query(() => ({
      phrase: faker.hacker.phrase(),
    })),
  getVerb: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/hacker/verb',
        description: 'Returns a random hacker/IT verb.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        verb: z.string(),
      })
    )
    .query(() => ({
      verb: faker.hacker.verb(),
    })),
});
