import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';
import { stringArray } from '../../schemas/stringArray';

const tags = ['internet'];

const colorSchema = z.number().min(0).max(255);

export const internetRouter = router({
  getAvatar: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/avatar',
        description: 'Returns a random avatar url.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        avatar: z.string(),
      })
    )
    .query(() => ({
      avatar: faker.internet.avatar(),
    })),
  getColor: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/color',
        description:
          'Generates a random css hex color code in aesthetically pleasing color palette.',
      },
    })
    .input(
      z.object({
        blueBase: colorSchema
          .describe('The optional base blue.')
          .default(0)
          .optional(),

        greenBase: colorSchema
          .describe('The optional base green.')
          .default(0)
          .optional(),

        redBase: colorSchema
          .describe('The optional base red.')
          .default(0)
          .optional(),
      })
    )
    .output(
      z.object({
        color: z.string(),
      })
    )
    .query(({ input }) => ({
      color: faker.internet.color({
        blueBase: input.blueBase,
        greenBase: input.greenBase,
        redBase: input.redBase,
      }),
    })),
  getDisplayName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/display-name',
        description:
          "Generates a display name using the given person's name as base. The resulting display name may use one or both of the provided names. If the input names include Unicode characters, the resulting display name will contain Unicode characters. It will not contain spaces.",
      },
    })
    .input(
      z.object({
        firstName: z
          .string()
          .describe('The optional first name to use.')
          .optional(),
        lastName: z
          .string()
          .describe('The optional last name to use.')
          .optional(),
      })
    )
    .output(
      z.object({
        displayName: z.string(),
      })
    )
    .query(({ input }) => ({
      displayName: faker.internet.displayName({
        firstName: input.firstName,
        lastName: input.lastName,
      }),
    })),
  getDomainName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/domain-name',
        description: 'Generates a random domain name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        domainName: z.string(),
      })
    )
    .query(() => ({
      domainName: faker.internet.domainName(),
    })),
  getDomainSuffix: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/domain-suffix',
        description: 'Returns a random domain suffix.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        domainSuffix: z.string(),
      })
    )
    .query(() => ({
      domainSuffix: faker.internet.domainSuffix(),
    })),
  getDomainWord: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/domain-word',
        description: 'Generates a random domain word.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        domainWord: z.string(),
      })
    )
    .query(() => ({
      domainWord: faker.internet.domainWord(),
    })),
  getEmail: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/email',
        description:
          "Generates an email address using the given person's name as base.",
      },
    })
    .input(
      z.object({
        allowSpecialCharacters: processedBoolean
          .describe(
            "Whether special characters such as .!#$%&'*+-/=?^_`{|}~ should be included in the email address."
          )
          .optional(),
        firstName: z
          .string()
          .describe('The optional first name to use.')
          .optional(),
        lastName: z
          .string()
          .describe('The optional last name to use.')
          .optional(),
        provider: z
          .string()
          .describe(
            'The mail provider domain to use. If not specified, a random free mail provider will be chosen.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        email: z.string(),
      })
    )
    .query(({ input }) => ({
      email: faker.internet.email({
        allowSpecialCharacters: input.allowSpecialCharacters,
        firstName: input.firstName,
        lastName: input.lastName,
        provider: input.provider,
      }),
    })),
  getEmoji: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/emoji',
        description: 'Generates a random emoji.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        emoji: z.string(),
      })
    )
    .query(() => ({
      emoji: faker.internet.emoji(),
    })),
  getExampleEmail: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/example-email',
        description:
          "Generates an email address using an example mail provider using the given person's name as base.",
      },
    })
    .input(
      z.object({
        allowSpecialCharacters: processedBoolean
          .describe(
            "Whether special characters such as .!#$%&'*+-/=?^_`{|}~ should be included in the email address."
          )
          .optional(),
        firstName: z
          .string()
          .describe('The optional first name to use.')
          .optional(),
        lastName: z
          .string()
          .describe('The optional last name to use.')
          .optional(),
      })
    )
    .output(
      z.object({
        exampleEmail: z.string(),
      })
    )
    .query(({ input }) => ({
      exampleEmail: faker.internet.exampleEmail({
        allowSpecialCharacters: input.allowSpecialCharacters,
        firstName: input.firstName,
        lastName: input.lastName,
      }),
    })),
  getHttpMethod: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/http-method',
        description: 'Returns a random http method.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        httpMethod: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
      })
    )
    .query(() => ({
      httpMethod: faker.internet.httpMethod(),
    })),
  getHttpStatusCode: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/http-status-code',
        description: 'Generates a random HTTP status code.',
      },
    })
    .input(
      z.object({
        types: stringArray
          .describe(
            "A list of the HTTP status code types that should be used. Ex.: ['success', 'serverError']"
          )
          .optional(),
      })
    )
    .output(
      z.object({
        httpStatusCode: z.number(),
      })
    )
    .query(({ input }) => ({
      httpStatusCode: faker.internet.httpStatusCode({
        types: input.types as any[],
      }),
    })),
  getIp: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/ip',
        description: 'Generates a random IPv4 or IPv6 address.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        ip: z.string(),
      })
    )
    .query(() => ({
      ip: faker.internet.ip(),
    })),
  getIpv4: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/ipv4',
        description: 'Generates a random IPv4 address.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        ipv4: z.string(),
      })
    )
    .query(() => ({
      ipv4: faker.internet.ipv4(),
    })),
  getIpv6: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/ipv6',
        description: 'Generates a random IPv6 address.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        ipv6: z.string(),
      })
    )
    .query(() => ({
      ipv6: faker.internet.ipv6(),
    })),
  getMac: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/mac',
        description: 'Generates a random mac address.',
      },
    })
    .input(
      z.object({
        separator: z
          .enum([':', '-', '.'])
          .describe(
            "The optional separator to use. Can be either ':', '-' or ''."
          )
          .default(':')
          .optional(),
      })
    )
    .output(
      z.object({
        mac: z.string(),
      })
    )
    .query(({ input }) => ({
      mac: faker.internet.mac({
        separator: input.separator,
      }),
    })),
  getPassword: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/password',
        description: 'Generates a random password.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe('The length of the password to generate.')
          .default(15)
          .optional(),

        memorable: processedBoolean
          .describe('Whether the generated password should be memorable.')
          .optional(),
        pattern: z
          .string()
          .describe(
            'The pattern that all chars should match should match. This option will be ignored, if memorable is true.'
          )
          .default('/w/')
          .optional(),

        prefix: z
          .string()
          .describe('The prefix to use.')
          .default('')
          .optional(),
      })
    )
    .output(
      z.object({
        password: z.string(),
      })
    )
    .query(({ input }) => ({
      password: faker.internet.password({
        length: input.length,
        memorable: input.memorable,
        pattern: input.pattern as unknown as RegExp,
        prefix: input.prefix,
      }),
    })),
  getPort: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/port',
        description: 'Generates a random port number.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        port: z.number(),
      })
    )
    .query(() => ({
      port: faker.internet.port(),
    })),
  getProtocol: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/protocol',
        description: 'Returns a random web protocol.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        protocol: z.enum(['http', 'https']),
      })
    )
    .query(() => ({
      protocol: faker.internet.protocol(),
    })),
  getUrl: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/url',
        description: 'Generates a random http(s) url.',
      },
    })
    .input(
      z.object({
        appendSlash: processedBoolean
          .describe('Whether to append a slash to the end of the url (path).')
          .optional(),
        protocol: z
          .enum(['http', 'https'])
          .describe('The protocol to use.')
          .optional()
          .default('https'),
      })
    )
    .output(
      z.object({
        url: z.string(),
      })
    )
    .query(({ input }) => ({
      url: faker.internet.url({
        appendSlash: input.appendSlash,
        protocol: input.protocol,
      }),
    })),
  getUserAgent: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/user-agent',
        description: 'Generates a random user agent string.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        userAgent: z.string(),
      })
    )
    .query(() => ({
      userAgent: faker.internet.userAgent(),
    })),
  getUserName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/internet/user-name',
        description:
          "Generates a username using the given person's name as base. The resuling username may use neither, one or both of the names provided. This will always return a plain ASCII string. Some basic stripping of accents and transliteration of characters will be done.",
      },
    })
    .input(
      z.object({
        firstName: z
          .string()
          .describe('The optional first name to use.')
          .optional(),
        lastName: z
          .string()
          .describe('The optional last name to use.')
          .optional(),
      })
    )
    .output(
      z.object({
        userName: z.string(),
      })
    )
    .query(({ input }) => ({
      userName: faker.internet.userName({
        firstName: input.firstName,
        lastName: input.lastName,
      }),
    })),
});
