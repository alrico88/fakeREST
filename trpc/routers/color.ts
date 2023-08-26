import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { router, publicProcedure } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['color'];

const ColorFormatEnum = z.enum(['binary', 'css', 'decimal']);

export const colorRouter = router({
  getCmyk: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/cymk',
        method: 'GET',
        description: 'Returns a CMYK color.',
      },
    })
    .input(
      z.object({
        format: ColorFormatEnum.describe('Format of generated CMYK color.')
          .default('decimal')
          .optional(),
      })
    )
    .output(
      z.object({
        cmyk: z.union([z.array(z.number()), z.string()]),
      })
    )
    .query(({ input }) => ({
      cmyk: faker.color.cmyk({
        format: input.format,
      }),
    })),
  getColorByCSSColorSpace: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/color-by-css-color-space',
        method: 'GET',
        description:
          'Returns a random color based on CSS color space specified.',
      },
    })
    .input(
      z.object({
        format: ColorFormatEnum.describe('Format of generated CMYK color.')
          .default('decimal')
          .optional(),
        space: z
          .enum(['a98-rgb', 'display-p3', 'prophoto-rgb', 'rec2020', 'sRGB'])
          .describe('Color space to generate the color for.')
          .default('sRGB')
          .optional(),
      })
    )
    .output(
      z.object({
        colorByCSSColorSpace: z.union([z.array(z.number()), z.string()]),
      })
    )
    .query(({ input }) => ({
      colorByCSSColorSpace: faker.color.colorByCSSColorSpace({
        format: input.format,
        space: input.space,
      }),
    })),
  getCssSupportedFunction: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/css-supported-function',
        method: 'GET',
        description: 'Returns a random css supported color function name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        cssSupportedFunction: z.enum([
          'cmyk',
          'color',
          'hsl',
          'hsla',
          'hwb',
          'lab',
          'lch',
          'rgb',
          'rgba',
        ]),
      })
    )
    .query(() => ({
      cssSupportedFunction: faker.color.cssSupportedFunction(),
    })),
  getCssSupportedSpace: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/css-supported-space',
        method: 'GET',
        description: 'Returns a random css supported color space name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        cssSupportedSpace: z.enum([
          'a98-rgb',
          'display-p3',
          'prophoto-rgb',
          'rec2020',
          'sRGB',
        ]),
      })
    )
    .query(() => ({
      cssSupportedSpace: faker.color.cssSupportedSpace(),
    })),
  getHsl: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/hsl',
        method: 'GET',
        description: 'Returns an HSL color.',
      },
    })
    .input(
      z.object({
        format: ColorFormatEnum.describe('Format of generated HSL color.')
          .default('decimal')
          .optional(),
        includeAlpha: processedBoolean
          .describe('Adds an alpha value to the color (RGBA).')
          .optional(),
      })
    )
    .output(
      z.object({
        hsl: z.union([z.string(), z.array(z.number())]),
      })
    )
    .query(({ input }) => ({
      hsl: faker.color.hsl({
        format: input.format,
        includeAlpha: input.includeAlpha,
      }),
    })),
  getHuman: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/human',
        method: 'GET',
        description: 'Returns a random human readable color name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        human: z.string(),
      })
    )
    .query(() => ({
      human: faker.color.human(),
    })),
  getHwb: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/hwb',
        method: 'GET',
        description: 'Returns an HWB color.',
      },
    })
    .input(
      z.object({
        format: ColorFormatEnum.describe('Format of generated HWB color.')
          .optional()
          .default('decimal'),
      })
    )
    .output(
      z.object({
        hwb: z.union([z.string(), z.array(z.number())]),
      })
    )
    .query(({ input }) => ({
      hwb: faker.color.hwb({
        format: input.format,
      }),
    })),
  getLab: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/lab',
        method: 'GET',
        description: 'Returns a LAB (CIELAB) color.',
      },
    })
    .input(
      z.object({
        format: ColorFormatEnum.describe('Format of generated LAB color.')
          .default('decimal')
          .optional(),
      })
    )
    .output(
      z.object({
        lab: z.union([z.string(), z.array(z.number())]),
      })
    )
    .query(({ input }) => ({
      lab: faker.color.lab({
        format: input.format,
      }),
    })),
  getLch: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/lch',
        method: 'GET',
        description:
          'Returns an LCH color. Even though upper bound of chroma in LCH color space is theoretically unbounded, it is bounded to 230 as anything above will not make a noticeable difference in the browser.',
      },
    })
    .input(
      z.object({
        format: ColorFormatEnum.describe('Format of generated LAB color.')
          .optional()
          .default('decimal'),
      })
    )
    .output(
      z.object({
        lch: z.union([z.string(), z.array(z.number())]),
      })
    )
    .query(({ input }) => ({
      lch: faker.color.lch({
        format: input.format,
      }),
    })),
  getRgb: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/rgb',
        method: 'GET',
        description: 'Returns an RGB color.',
      },
    })
    .input(
      z.object({
        casing: z
          .enum(['lower', 'mixed', 'upper'])
          .describe(
            "Letter type case of the generated hex color. Only applied when 'hex' format is used."
          )
          .default('lower')
          .optional(),
        format: z
          .enum(['binary', 'css', 'decimal', 'hex'])
          .describe('Format of generated RGB color.')
          .default('hex')
          .optional(),
        includeAlpha: processedBoolean
          .describe('Adds an alpha value to the color (RGBA).')
          .default(false)
          .optional(),
        prefix: z
          .string()
          .describe(
            "Prefix of the generated hex color. Only applied when 'hex' format is used."
          )
          .default('#')
          .optional(),
      })
    )
    .output(
      z.object({
        rgb: z.union([z.string(), z.array(z.number())]),
      })
    )
    .query(({ input }) => ({
      rgb: faker.color.rgb({
        format: input.format,
        casing: input.casing,
        includeAlpha: input.includeAlpha,
        prefix: input.prefix,
      }),
    })),
  getSpace: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/color/space',
        method: 'GET',
        description:
          'Returns a random color space name from the worldwide accepted color spaces.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        space: z.string(),
      })
    )
    .query(() => ({
      space: faker.color.space(),
    })),
});
