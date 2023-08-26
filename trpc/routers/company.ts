import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { router, publicProcedure } from '../trpc';

const tags = ['company'];

export const companyRouter = router({
  getBuzzAdjective: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/buzz-adjective',
        method: 'GET',
        description:
          'Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        buzzAdjective: z.string(),
      })
    )
    .query(() => ({
      buzzAdjective: faker.company.buzzAdjective(),
    })),
  getBuzzNoun: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/buzz-noun',
        method: 'GET',
        description:
          'Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        buzzNoun: z.string(),
      })
    )
    .query(() => ({
      buzzNoun: faker.company.buzzNoun(),
    })),
  getBuzzPhrase: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/buzz-phrase',
        method: 'GET',
        description:
          'Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        buzzPhrase: z.string(),
      })
    )
    .query(() => ({
      buzzPhrase: faker.company.buzzPhrase(),
    })),
  getBuzzVerb: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/buzz-verb',
        method: 'GET',
        description:
          'Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        buzzVerb: z.string(),
      })
    )
    .query(() => ({
      buzzVerb: faker.company.buzzVerb(),
    })),
  getCatchPhrase: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/catch-phrase',
        method: 'GET',
        description:
          'Generates a random catch phrase that can be displayed to an end user.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        catchPhrase: z.string(),
      })
    )
    .query(() => ({
      catchPhrase: faker.company.catchPhrase(),
    })),
  getCatchPhraseAdjective: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/catch-phrase-adjective',
        method: 'GET',
        description:
          'Returns a random catch phrase adjective that can be displayed to an end user..',
      },
    })
    .input(z.void())
    .output(
      z.object({
        catchPhraseAdjective: z.string(),
      })
    )
    .query(() => ({
      catchPhraseAdjective: faker.company.catchPhraseAdjective(),
    })),
  getCatchPhraseDescriptor: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/catch-phrase-descriptor',
        method: 'GET',
        description:
          'Returns a random catch phrase descriptor that can be displayed to an end user.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        catchPhraseDescriptor: z.string(),
      })
    )
    .query(() => ({
      catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
    })),
  getCatchPhraseNoun: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/catch-phrase-noun',
        method: 'GET',
        description:
          'Returns a random catch phrase noun that can be displayed to an end user.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        catchPhraseNoun: z.string(),
      })
    )
    .query(() => ({
      catchPhraseNoun: faker.company.catchPhraseNoun(),
    })),
  getName: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/company/name',
        method: 'GET',
        description: 'Generates a random company name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        name: z.string(),
      })
    )
    .query(() => ({
      name: faker.company.name(),
    })),
});
