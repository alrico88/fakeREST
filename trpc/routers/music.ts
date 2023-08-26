import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['music'];

export const musicRouter = router({
  getGenre: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/music/genre',
        description: 'Returns a random music genre.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        genre: z.string(),
      })
    )
    .query(() => ({
      genre: faker.music.genre(),
    })),
  getSongName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/music/song-name',
        description: 'Returns a random song name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        songName: z.string(),
      })
    )
    .query(() => ({
      songName: faker.music.songName(),
    })),
});
