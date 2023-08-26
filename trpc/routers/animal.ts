import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { publicProcedure, router } from '../trpc';

const tags = ['animal'];

export const animalRouter = router({
  getBear: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/bear',
        method: 'GET',
        description: 'Returns a random bear species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        bear: z.string(),
      })
    )
    .query(() => ({
      bear: faker.animal.bear(),
    })),
  getBird: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/bird',
        method: 'GET',
        description: 'Returns a random bird species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        bird: z.string(),
      })
    )
    .query(() => ({
      bird: faker.animal.bird(),
    })),
  getCat: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/cat',
        method: 'GET',
        description: 'Returns a random cat breed.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        cat: z.string(),
      })
    )
    .query(() => ({
      cat: faker.animal.cat(),
    })),
  getCetacean: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/cetacean',
        method: 'GET',
        description: 'Returns a random cetacean species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        rabbit: z.string(),
      })
    )
    .query(() => ({
      rabbit: faker.animal.rabbit(),
    })),
  getCow: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/cow',
        method: 'GET',
        description: 'Returns a random cow species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        cow: z.string(),
      })
    )
    .query(() => ({
      cow: faker.animal.cow(),
    })),
  getCrocodilia: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/crocodilia',
        method: 'GET',
        description: 'Returns a random crocodilian species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        crocodilia: z.string(),
      })
    )
    .query(() => ({
      crocodilia: faker.animal.crocodilia(),
    })),
  getDog: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/dog',
        method: 'GET',
        description: 'Returns a random dog breed.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        dog: z.string(),
      })
    )
    .query(() => ({
      dog: faker.animal.dog(),
    })),
  getFish: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/fish',
        method: 'GET',
        description: 'Returns a random fish species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        fish: z.string(),
      })
    )
    .query(() => ({
      fish: faker.animal.fish(),
    })),
  getHorse: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/horse',
        method: 'GET',
        description: 'Returns a random horse breed.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        horse: z.string(),
      })
    )
    .query(() => ({
      horse: faker.animal.horse(),
    })),
  getInsect: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/insect',
        method: 'GET',
        description: 'Returns a random insect species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        insect: z.string(),
      })
    )
    .query(() => ({
      insect: faker.animal.insect(),
    })),
  getLion: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/lion',
        method: 'GET',
        description: 'Returns a random lion species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        lion: z.string(),
      })
    )
    .query(() => ({
      lion: faker.animal.lion(),
    })),
  getRabbit: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/rabbit',
        method: 'GET',
        description: 'Returns a random rabbit species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        rabbit: z.string(),
      })
    )
    .query(() => ({
      rabbit: faker.animal.rabbit(),
    })),
  getRodent: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/rodent',
        method: 'GET',
        description: 'Returns a random rodent species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        rodent: z.string(),
      })
    )
    .query(() => ({
      rodent: faker.animal.rodent(),
    })),
  getSnake: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/snake',
        method: 'GET',
        description: 'Returns a random snake species.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        snake: z.string(),
      })
    )
    .query(() => ({
      snake: faker.animal.snake(),
    })),
  getType: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/animal/type',
        method: 'GET',
        description: 'Returns a random animal type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        type: z.string(),
      })
    )
    .query(() => ({
      type: faker.animal.type(),
    })),
});
