import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['date'];

const refDateSchema = z
  .date()
  .describe(
    'The date to use as reference point for the newly generated date. (YYYY-MM-DD)'
  )
  .optional();

export const dateRouter = router({
  getAnytime: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/anytime',
        method: 'GET',
        description:
          'Generates a random date that can be either in the past or in the future.',
      },
    })
    .input(
      z.object({
        refDate: refDateSchema,
      })
    )
    .output(
      z.object({
        anytime: z.date(),
      })
    )
    .query(({ input }) => ({
      anytime: faker.date.anytime({
        refDate: input.refDate,
      }),
    })),
  getBetween: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/between',
        method: 'GET',
        description: 'Generates a random date between the given boundaries.',
      },
    })
    .input(
      z.object({
        from: z
          .date()
          .describe('The early date boundary. (YYYY-MM-DD)')
          .optional(),
        to: z
          .date()
          .describe('The late date boundary. (YYYY-MM-DD)')
          .optional(),
      })
    )
    .output(
      z.object({
        between: z.date(),
      })
    )
    .query(({ input }) => ({
      between: faker.date.between({
        from: input.from,
        to: input.to,
      }),
    })),
  getBetweens: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/betweens',
        method: 'GET',
        description: 'Generates random dates between the given boundaries.',
      },
    })
    .input(
      z.object({
        count: z
          .number()
          .describe('The number of dates to generate.')
          .default(3)
          .optional(),
        from: z.date().describe('The early date boundary. (YYYY-MM-DD)'),
        to: z.date().describe('The late date boundary. (YYYY-MM-DD)'),
      })
    )
    .output(
      z.object({
        betweens: z.date().array(),
      })
    )
    .query(({ input }) => ({
      betweens: faker.date.betweens({
        from: input.from,
        to: input.to,
        count: input.count,
      }),
    })),
  getBirthdate: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/birthdate',
        method: 'GET',
        description: 'Returns a random birthdate.',
      },
    })
    .input(
      z.object({
        max: z
          .number()
          .describe('The maximum age or year to generate a birthdate.')
          .default(80)
          .optional(),
        min: z
          .number()
          .describe('The minimum age or year to generate a birthdate. ')
          .default(18)
          .optional(),
        mode: z
          .enum(['age', 'year'])
          .describe('The mode to generate the birthdate.')
          .default('year')
          .optional(),
        refDate: refDateSchema,
      })
    )
    .output(
      z.object({
        birthdate: z.date(),
      })
    )
    .query(({ input }) => ({
      birthdate: faker.date.birthdate({
        min: input.min,
        max: input.max,
        mode: input.mode,
        refDate: input.refDate,
      }),
    })),
  getFuture: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/future',
        method: 'GET',
        description: 'Generates a random date in the future.',
      },
    })
    .input(
      z.object({
        refDate: refDateSchema,
        years: z
          .number()
          .describe('The range of years the date may be in the future.')
          .default(1)
          .optional(),
      })
    )
    .output(
      z.object({
        future: z.date(),
      })
    )
    .query(({ input }) => ({
      future: faker.date.future({
        years: input.years,
        refDate: input.refDate,
      }),
    })),
  getMonth: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/month',
        method: 'GET',
        description: 'Returns a random name of a month.',
      },
    })
    .input(
      z.object({
        abbreviated: processedBoolean
          .describe('Whether to return an abbreviation.')
          .default(false)
          .optional(),
        context: processedBoolean
          .describe(
            'Whether to return the name of a month in the context of a date'
          )
          .default(false)
          .optional(),
      })
    )
    .output(
      z.object({
        month: z.string(),
      })
    )
    .query(({ input }) => ({
      month: faker.date.month({
        abbreviated: input.abbreviated,
        context: input.context,
      }),
    })),
  getPast: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/past',
        method: 'GET',
        description: 'Generates a random date in the past.',
      },
    })
    .input(
      z.object({
        refDate: refDateSchema,
        years: z
          .number()
          .describe('The range of years the date may be in the past.')
          .default(1)
          .optional(),
      })
    )
    .output(
      z.object({
        past: z.date(),
      })
    )
    .query(({ input }) => ({
      past: faker.date.past({
        years: input.years,
        refDate: input.refDate,
      }),
    })),
  getRecent: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/recent',
        method: 'GET',
        description: 'Generates a random date in the recent past.',
      },
    })
    .input(
      z.object({
        days: z
          .number()
          .describe('The range of days the date may be in the past. ')
          .default(1)
          .optional(),
        refDate: refDateSchema,
      })
    )
    .output(
      z.object({
        recent: z.date(),
      })
    )
    .query(({ input }) => ({
      recent: faker.date.recent({
        days: input.days,
        refDate: input.refDate,
      }),
    })),
  getSoon: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/soon',
        method: 'GET',
        description: 'Generates a random date in the near future.',
      },
    })
    .input(
      z.object({
        days: z
          .number()
          .describe('The range of days the date may be in the future. ')
          .default(1)
          .optional(),
        refDate: refDateSchema,
      })
    )
    .output(
      z.object({
        soon: z.date(),
      })
    )
    .query(({ input }) => ({
      soon: faker.date.soon({
        days: input.days,
        refDate: input.refDate,
      }),
    })),
  getWeekday: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/date/weekday',
        method: 'GET',
        description: 'Returns a random day of the week.',
      },
    })
    .input(
      z.object({
        abbreviated: processedBoolean.describe('').default(false).optional(),
        context: processedBoolean
          .describe(
            'Whether to return the name of a month in the context of a date'
          )
          .default(false)
          .optional(),
      })
    )
    .output(
      z.object({
        weekday: z.string(),
      })
    )
    .query(({ input }) => ({
      weekday: faker.date.weekday({
        abbreviated: input.abbreviated,
        context: input.context,
      }),
    })),
});
