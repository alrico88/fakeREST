import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['system'];

export const systemRouter = router({
  getCommonFileExt: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/common-file-ext',
        description: 'Returns a commonly used file extension.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        commonFileExt: z.string(),
      })
    )
    .query(() => ({
      commonFileExt: faker.system.commonFileExt(),
    })),
  getCommonFileName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/common-file-name',
        description:
          'Returns a random file name with a given extension or a commonly used extension.',
      },
    })
    .input(
      z.object({
        ext: z
          .string()
          .describe('Extension. Empty string is considered to be not set.')
          .optional(),
      })
    )
    .output(
      z.object({
        commonFileName: z.string(),
      })
    )
    .query(({ input }) => ({
      commonFileName: faker.system.commonFileName(input.ext),
    })),
  getCommonFileType: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/common-file-type',
        description: 'Returns a commonly used file type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        commonFileType: z.string(),
      })
    )
    .query(() => ({
      commonFileType: faker.system.commonFileType(),
    })),
  getCron: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/cron',
        description: 'Returns a random cron expression.',
      },
    })
    .input(
      z.object({
        includeNonStandard: processedBoolean
          .describe(
            'Whether to include a @yearly, @monthly, @daily, etc text labels in the generated expression.'
          )
          .optional(),
        includeYear: processedBoolean
          .describe('Whether to include a year in the generated expression.')
          .optional(),
      })
    )
    .output(
      z.object({
        cron: z.string(),
      })
    )
    .query(({ input }) => ({
      cron: faker.system.cron({
        includeNonStandard: input.includeNonStandard,
        includeYear: input.includeYear,
      }),
    })),
  getDirectoryPath: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/directory-path',
        description: 'Returns a directory path.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        directoryPath: z.string(),
      })
    )
    .query(() => ({
      directoryPath: faker.system.directoryPath(),
    })),
  getFileExt: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/file-ext',
        description: 'Returns a file extension.',
      },
    })
    .input(
      z.object({
        mimeType: z.string().describe('Valid mime-type').optional(),
      })
    )
    .output(
      z.object({
        fileExt: z.string(),
      })
    )
    .query(({ input }) => ({
      fileExt: faker.system.fileExt(input.mimeType),
    })),
  getFileName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/file-name',
        description: 'Returns a random file name with extension.',
      },
    })
    .input(
      z.object({
        extensionCount: z
          .number()
          .describe('Define how many extensions the file name should have.')
          .default(1)
          .optional(),
      })
    )
    .output(
      z.object({
        fileName: z.string(),
      })
    )
    .query(({ input }) => ({
      fileName: faker.system.fileName({
        extensionCount: input.extensionCount,
      }),
    })),
  getFilePath: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/file-path',
        description: 'Returns a file path.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        filePath: z.string(),
      })
    )
    .query(() => ({
      filePath: faker.system.filePath(),
    })),
  getFileType: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/file-type',
        description: 'Returns a file type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        fileType: z.string(),
      })
    )
    .query(() => ({
      fileType: faker.system.fileType(),
    })),
  getMimeType: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/mime-type',
        description: 'Returns a mime-type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        mimeType: z.string(),
      })
    )
    .query(() => ({
      mimeType: faker.system.mimeType(),
    })),
  getNetworkInterface: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/network-interface',
        description: 'Returns a random network interface.',
      },
    })
    .input(
      z.object({
        interfaceSchema: z
          .enum(['index', 'mac', 'pci', 'slot'])
          .describe('The interface schema.')
          .optional(),
        interfaceType: z
          .enum(['en', 'wl', 'ww'])
          .describe('The interface type.')
          .optional(),
      })
    )
    .output(
      z.object({
        networkInterface: z.string(),
      })
    )
    .query(({ input }) => ({
      networkInterface: faker.system.networkInterface({
        interfaceSchema: input.interfaceSchema,
        interfaceType: input.interfaceType,
      }),
    })),
  getSemver: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/system/semver',
        description: 'Returns a semantic version.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        semver: z.string(),
      })
    )
    .query(() => ({
      semver: faker.system.semver(),
    })),
});
