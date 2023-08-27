import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { router, publicProcedure } from '../trpc';

const tags = ['commerce'];

export const commerceRouter = router({
  getDepartment: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/commerce/department',
        method: 'GET',
        description: 'Returns a department inside a shop.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        department: z.string(),
      })
    )
    .query(() => ({
      department: faker.commerce.department(),
    })),
  getPrice: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/commerce/price',
        method: 'GET',
        description: 'Generates a price between min and max (inclusive).',
      },
    })
    .input(
      z.object({
        dec: z
          .number()
          .describe('The number of decimal places.')
          .default(2)
          .optional(),
        max: z.number().describe('The maximum price.').default(1000).optional(),
        min: z.number().describe('The minimum price.').default(1).optional(),
        symbol: z
          .string()
          .describe('The currency value to use.')
          .default('')
          .optional(),
      })
    )
    .output(
      z.object({
        price: z.string(),
      })
    )
    .query(({ input }) => ({
      price: faker.commerce.price({
        dec: input.dec,
        min: input.min,
        max: input.max,
        symbol: input.symbol,
      }),
    })),
  getProduct: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/commerce/product',
        method: 'GET',
        description: 'Returns a short product name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        product: z.string(),
      })
    )
    .query(() => ({
      product: faker.commerce.product(),
    })),
  getProductAdjective: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/commerce/product-adjective',
        method: 'GET',
        description: 'Returns an adjective describing a product.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        productAdjective: z.string(),
      })
    )
    .query(() => ({
      productAdjective: faker.commerce.productAdjective(),
    })),
  getProductDescription: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/commerce/product-description',
        method: 'GET',
        description: 'Returns a product description.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        productDescription: z.string(),
      })
    )
    .query(() => ({
      productDescription: faker.commerce.productDescription(),
    })),
  getProductMaterial: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/commerce/product-material',
        method: 'GET',
        description: 'Returns a material of a product.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        productMaterial: z.string(),
      })
    )
    .query(() => ({
      productMaterial: faker.commerce.productMaterial(),
    })),
  getProductName: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/commerce/product-name',
        method: 'GET',
        description: 'Generates a random descriptive product name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        productName: z.string(),
      })
    )
    .query(() => ({
      productName: faker.commerce.productName(),
    })),
});
