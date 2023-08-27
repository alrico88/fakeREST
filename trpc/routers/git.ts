import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { router, publicProcedure } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['git'];

export const gitRouter = router({
  getBranch: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/git/branch',
        description: 'Generates a random branch name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        branch: z.string(),
      })
    )
    .query(() => ({
      branch: faker.git.branch(),
    })),
  getCommitDate: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/git/commit-date',
        description:
          'Generates a date string for a git commit using the same format as git log.',
      },
    })
    .input(
      z.object({
        refDate: z
          .string()
          .describe('The date to use as reference point for the commit.')
          .optional(),
      })
    )
    .output(
      z.object({
        commitDate: z.string(),
      })
    )
    .query(({ input }) => ({
      commitDate: faker.git.commitDate({
        refDate: input.refDate,
      }),
    })),
  getCommitEntry: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/git/commit-entry',
        description: 'Generates a random commit entry as printed by git log.',
      },
    })
    .input(
      z.object({
        eol: z
          .enum(['CRLF', 'LF'])
          .describe('Choose the end of line character to use.')
          .default('CRLF')
          .optional(),
        merge: processedBoolean
          .describe('Set to true to generate a merge message line.')
          .default(false)
          .optional(),
        refDate: z
          .string()
          .describe('The date to use as reference point for the commit.')
          .optional(),
      })
    )
    .output(
      z.object({
        commitEntry: z.string(),
      })
    )
    .query(({ input }) => ({
      commitEntry: faker.git.commitEntry({
        eol: input.eol,
        merge: input.merge,
        refDate: input.refDate,
      }),
    })),
  getCommitMessage: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/git/commit-message',
        description: 'Generates a random commit message.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        commitMessage: z.string(),
      })
    )
    .query(() => ({
      commitMessage: faker.git.commitMessage(),
    })),
  getCommitSha: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/git/commit-sha',
        description: 'Generates a random commit sha.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .optional()
          .default(40)
          .describe('The length of the commit sha.'),
      })
    )
    .output(
      z.object({
        commitSha: z.string(),
      })
    )
    .query(({ input }) => ({
      commitSha: faker.git.commitSha({
        length: input.length,
      }),
    })),
});
