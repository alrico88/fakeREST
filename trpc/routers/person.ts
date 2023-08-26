import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['person'];

const sexSchema = z
  .enum(['female', 'male'])
  .describe('The optional sex to use.')
  .optional();

export const personRouter = router({
  getBio: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/bio',
        description: 'Returns a random short biography.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        bio: z.string(),
      })
    )
    .query(() => ({
      bio: faker.person.bio(),
    })),
  getFirstName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/first-name',
        description: 'Returns a random first name.',
      },
    })
    .input(
      z.object({
        sex: sexSchema,
      })
    )
    .output(
      z.object({
        firstName: z.string(),
      })
    )
    .query(({ input }) => ({
      firstName: faker.person.firstName(input.sex),
    })),
  getFullName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/full-name',
        description: 'Generates a random full name.',
      },
    })
    .input(
      z.object({
        firstName: z
          .string()
          .describe(
            'The optional first name to use. If not specified a random one will be chosen.'
          )
          .optional(),
        lastName: z
          .string()
          .describe(
            'The optional last name to use. If not specified a random one will be chosen.'
          )
          .optional(),
        sex: sexSchema,
      })
    )
    .output(
      z.object({
        fullName: z.string(),
      })
    )
    .query(() => ({
      fullName: faker.person.fullName(),
    })),
  getGender: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/gender',
        description: 'Returns a random gender.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        gender: z.string(),
      })
    )
    .query(() => ({
      gender: faker.person.gender(),
    })),
  getJobArea: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/job-area',
        description: 'Generates a random job area.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        jobArea: z.string(),
      })
    )
    .query(() => ({
      jobArea: faker.person.jobArea(),
    })),
  getJobDescriptor: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/job-descriptor',
        description: 'Generates a random job descriptor.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        jobDescriptor: z.string(),
      })
    )
    .query(() => ({
      jobDescriptor: faker.person.jobDescriptor(),
    })),
  getJobTitle: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/job-title',
        description: 'Generates a random job title.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        jobTitle: z.string(),
      })
    )
    .query(() => ({
      jobTitle: faker.person.jobTitle(),
    })),
  getJobType: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/job-type',
        description: 'Generates a random job type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        jobType: z.string(),
      })
    )
    .query(() => ({
      jobType: faker.person.jobType(),
    })),
  getLastName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/last-name',
        description: 'Returns a random last name.',
      },
    })
    .input(
      z.object({
        sex: sexSchema,
      })
    )
    .output(
      z.object({
        lastName: z.string(),
      })
    )
    .query(({ input }) => ({
      lastName: faker.person.lastName(input.sex),
    })),
  getMiddleName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/middle-name',
        description: 'Returns a random middle name.',
      },
    })
    .input(
      z.object({
        sex: sexSchema,
      })
    )
    .output(
      z.object({
        middleName: z.string(),
      })
    )
    .query(({ input }) => ({
      middleName: faker.person.middleName(input.sex),
    })),
  getPrefix: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/prefix',
        description: 'Returns a random person prefix.',
      },
    })
    .input(
      z.object({
        sex: sexSchema,
      })
    )
    .output(
      z.object({
        prefix: z.string(),
      })
    )
    .query(({ input }) => ({
      prefix: faker.person.prefix(input.sex),
    })),
  getSex: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/sex',
        description: 'Returns a random sex.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        sex: z.string(),
      })
    )
    .query(() => ({
      sex: faker.person.sex(),
    })),
  getSexType: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/sex-type',
        description: 'Returns a random sex type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        sexType: z.enum(['female', 'male']),
      })
    )
    .query(() => ({
      sexType: faker.person.sexType(),
    })),
  getSuffix: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/suffix',
        description: 'Returns a random person suffix.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        suffix: z.string(),
      })
    )
    .query(() => ({
      suffix: faker.person.suffix(),
    })),
  getZodiacSign: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/person/zodiac-sign',
        description: 'Returns a random zodiac sign.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        zodiacSign: z.string(),
      })
    )
    .query(() => ({
      zodiacSign: faker.person.zodiacSign(),
    })),
});
