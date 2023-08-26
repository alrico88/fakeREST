import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['image'];

const dimensionsSchema = {
  height: z
    .number()
    .describe('The height of the image.')
    .default(480)
    .optional(),
  width: z.number().describe('The width of the image.').default(640).optional(),
};

export const imageRouter = router({
  getAvatar: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/avatar',
        description: 'Generates a random avatar image url.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        avatar: z.string(),
      })
    )
    .query(() => ({
      avatar: faker.image.avatar(),
    })),
  getAvatarGitHub: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/avatar-git-hub',
        description: 'Generates a random avatar from GitHub.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        avatarGitHub: z.string(),
      })
    )
    .query(() => ({
      avatarGitHub: faker.image.avatarGitHub(),
    })),
  getAvatarLegacy: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/avatar-legacy',
        description:
          'Generates a random avatar from https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        avatarLegacy: z.string(),
      })
    )
    .query(() => ({
      avatarLegacy: faker.image.avatarLegacy(),
    })),
  getDataUri: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/data-uri',
        description: 'Generates a random data uri containing an svg image.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        dataUri: z.string(),
      })
    )
    .query(() => ({
      dataUri: faker.image.dataUri(),
    })),
  getUrl: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/url',
        description: 'Generates a random image url.',
      },
    })
    .input(z.object(dimensionsSchema))
    .output(
      z.object({
        url: z.string(),
      })
    )
    .query(({ input }) => ({
      url: faker.image.url({
        height: input.height,
        width: input.width,
      }),
    })),
  getUrlLoremFlickr: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/url-lorem-flickr',
        description:
          'Generates a random image url provided via https://loremflickr.com.',
      },
    })
    .input(
      z.object({
        ...dimensionsSchema,
        category: z
          .string()
          .describe('Category to use for the image.')
          .optional(),
      })
    )
    .output(
      z.object({
        urlLoremFlickr: z.string(),
      })
    )
    .query(({ input }) => ({
      urlLoremFlickr: faker.image.urlLoremFlickr({
        width: input.width,
        height: input.height,
        category: input.category,
      }),
    })),
  getUrlPicsumPhotos: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/url-picsum-photos',
        description:
          'Generates a random image url provided via https://picsum.photos.',
      },
    })
    .input(
      z.object({
        ...dimensionsSchema,
        blur: z
          .number()
          .min(1)
          .max(10)
          .describe('Whether the image should be blurred.')
          .optional(),
        grayscale: processedBoolean
          .describe('Whether the image should be grayscale.')
          .optional(),
      })
    )
    .output(
      z.object({
        urlPicsumPhotos: z.string(),
      })
    )
    .query(({ input }) => ({
      urlPicsumPhotos: faker.image.urlPicsumPhotos({
        blur: input.blur as any,
        grayscale: input.grayscale,
        height: input.height,
        width: input.width,
      }),
    })),
  getUrlPlaceholder: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/image/url-placeholder',
        description:
          'Generates a random image url provided via https://via.placeholder.com/.',
      },
    })
    .input(
      z.object({
        ...dimensionsSchema,
        backgroundColor: z
          .string()
          .describe('The background color of the image.')
          .optional(),
        format: z
          .enum(['gif', 'jpeg', 'jpg', 'png', 'webp'])
          .describe('The format of the image.')
          .optional(),
        text: z
          .string()
          .describe('The text to display on the image.')
          .optional(),
        textColor: z
          .string()
          .describe('The text color of the image.')
          .optional(),
      })
    )
    .output(
      z.object({
        urlPlaceholder: z.string(),
      })
    )
    .query(({ input }) => ({
      urlPlaceholder: faker.image.urlPlaceholder({
        backgroundColor: input.backgroundColor,
        format: input.format,
        height: input.height,
        text: input.text,
        textColor: input.textColor,
        width: input.width,
      }),
    })),
});
