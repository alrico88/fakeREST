import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['location'];

function getCoordSchema(
  bound: number,
  description: string,
  defaultVal: number
): z.ZodDefault<z.ZodOptional<z.ZodNumber>> {
  return z
    .number()
    .min(-bound)
    .max(bound)
    .describe(description)
    .optional()
    .default(defaultVal);
}

export const locationRouter = router({
  getBuildingNumber: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/building-number',
        description: 'Generates a random building number.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        buildingNumber: z.string(),
      })
    )
    .query(() => ({
      buildingNumber: faker.location.buildingNumber(),
    })),
  getCardinalDirection: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/cardinal-direction',
        description:
          'Returns a random cardinal direction (north, east, south, west).',
      },
    })
    .input(
      z.object({
        abbreviated: processedBoolean
          .describe(
            'If true this will return abbreviated directions (N, E, etc). Otherwise this will return the long name.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        cardinalDirection: z.string(),
      })
    )
    .query(({ input }) => ({
      cardinalDirection: faker.location.cardinalDirection({
        abbreviated: input.abbreviated,
      }),
    })),
  getCity: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/city',
        description: 'Generates a random localized city name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        city: z.string(),
      })
    )
    .query(() => ({
      city: faker.location.city(),
    })),
  getCountry: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/country',
        description: 'Returns a random country name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        country: z.string(),
      })
    )
    .query(() => ({
      country: faker.location.country(),
    })),
  getCountryCode: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/country-code',
        description: 'Returns a random ISO_3166-1 country code.',
      },
    })
    .input(
      z.object({
        variant: z
          .enum(['alpha-2', 'alpha-3'])
          .describe(
            "The code to return. Can be either 'alpha-2' (two letter code) or 'alpha-3' (three letter code)."
          )
          .default('alpha-2')
          .optional(),
      })
    )
    .output(
      z.object({
        countryCode: z.string(),
      })
    )
    .query(({ input }) => ({
      countryCode: faker.location.countryCode({
        variant: input.variant,
      }),
    })),
  getCounty: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/county',
        description:
          "Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.",
      },
    })
    .input(z.void())
    .output(
      z.object({
        county: z.string(),
      })
    )
    .query(() => ({
      county: faker.location.county(),
    })),
  getDirection: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/direction',
        description:
          'Returns a random direction (cardinal and ordinal; northwest, east, etc).',
      },
    })
    .input(
      z.object({
        abbreviated: processedBoolean
          .describe(
            'If true this will return abbreviated directions (NW, E, etc). Otherwise this will return the long name.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        direction: z.string(),
      })
    )
    .query(({ input }) => ({
      direction: faker.location.direction({
        abbreviated: input.abbreviated,
      }),
    })),
  getLatitude: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/latitude',
        description: 'Generates a random latitude.',
      },
    })
    .input(
      z.object({
        min: getCoordSchema(
          90,
          'The lower bound for the latitude to generate.',
          -90
        ),
        max: getCoordSchema(
          90,
          'The upper bound for the latitude to generate.',
          90
        ),
        precision: z
          .number()
          .describe(
            'The number of decimal points of precision for the latitude.'
          )
          .optional()
          .default(4),
      })
    )
    .output(
      z.object({
        latitude: z.number(),
      })
    )
    .query(({ input }) => ({
      latitude: faker.location.latitude({
        min: input.min,
        max: input.max,
        precision: input.precision,
      }),
    })),
  getLongitude: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/longitude',
        description: 'Generates a random longitude.',
      },
    })
    .input(
      z.object({
        min: getCoordSchema(
          180,
          'The lower bound for the longitude to generate.',
          -180
        ),
        max: getCoordSchema(
          180,
          'The upper bound for the longitude to generate.',
          180
        ),
        precision: z
          .number()
          .describe(
            'The number of decimal points of precision for the longitude.'
          )
          .default(4)
          .optional(),
      })
    )
    .output(
      z.object({
        longitude: z.number(),
      })
    )
    .query(({ input }) => ({
      longitude: faker.location.longitude({
        min: input.min,
        max: input.max,
        precision: input.precision,
      }),
    })),
  getNearbyGPSCoordinate: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/nearby-gps-coordinate',
        description:
          'Generates a random GPS coordinate within the specified radius from the given coordinate.',
      },
    })
    .input(
      z.object({
        isMetric: processedBoolean
          .describe(
            'If true assume the radius to be in kilometers. If false for miles.'
          )
          .optional(),
        originLongitude: z
          .number()
          .describe(
            'The original coordinate longitude to get a new coordinate close to. If no coordinate is given, a random one will be chosen.'
          )
          .optional(),
        originLatitude: z
          .number()
          .describe(
            'The original coordinate latitude to get a new coordinate close to. If no coordinate is given, a random one will be chosen.'
          )
          .optional(),
        radius: z
          .number()
          .describe(
            'The maximum distance from the given coordinate to the new coordinate.'
          )
          .default(10)
          .optional(),
      })
    )
    .output(
      z.object({
        nearbyGPSCoordinate: z.array(z.number()).length(2),
      })
    )
    .query(({ input }) => {
      const [longitude, latitude] = faker.location.nearbyGPSCoordinate({
        isMetric: input.isMetric,
        radius: input.radius,
        origin: [input.originLongitude, input.originLatitude],
      });

      return {
        nearbyGPSCoordinate: [longitude, latitude],
      };
    }),
  getOrdinalDirection: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/ordinal-direction',
        description:
          'Returns a random ordinal direction (northwest, southeast, etc).',
      },
    })
    .input(
      z.object({
        abbreviated: processedBoolean
          .describe(
            'If true this will return abbreviated directions (NW, SE, etc). Otherwise this will return the long name.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        ordinalDirection: z.string(),
      })
    )
    .query(({ input }) => ({
      ordinalDirection: faker.location.ordinalDirection({
        abbreviated: input.abbreviated,
      }),
    })),
  getSecondaryAddress: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/secondary-address',
        description:
          'Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        secondaryAddress: z.string(),
      })
    )
    .query(() => ({
      secondaryAddress: faker.location.secondaryAddress(),
    })),
  getState: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/state',
        description:
          "Returns a random localized state, or other equivalent first-level administrative entity for the locale's country such as a province or region.",
      },
    })
    .input(
      z.object({
        abbreviated: processedBoolean
          .describe(
            'If true this will return abbreviated first-level administrative entity names. Otherwise this will return the long name.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        state: z.string(),
      })
    )
    .query(() => ({
      state: faker.location.state(),
    })),
  getStreet: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/street',
        description: 'Generates a random localized street name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        street: z.string(),
      })
    )
    .query(() => ({
      street: faker.location.street(),
    })),
  getStreetAddress: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/street-address',
        description: 'Generates a random localized street address.',
      },
    })
    .input(
      z.object({
        useFullAddress: processedBoolean
          .describe(
            'When true this will generate a full address. Otherwise it will just generate a street address.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        streetAddress: z.string(),
      })
    )
    .query(() => ({
      streetAddress: faker.location.streetAddress(),
    })),
  getTimeZone: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/time-zone',
        description: 'Returns a random time zone.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        timeZone: z.string(),
      })
    )
    .query(() => ({
      timeZone: faker.location.timeZone(),
    })),
  getZipCode: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/location/zip-code',
        description:
          "Generates random zip code from specified format. If format is not specified, the locale's zip format is used.",
      },
    })
    .input(
      z.object({
        format: z
          .string()
          .describe(
            'The optional format used to generate the the zip code. This wont be used if the state option is specified.'
          )
          .optional(),
        state: z
          .string()
          .describe(
            'The state to generate the zip code for. If the currrent locale does not have a corresponding postcode_by_state definition, an error is thrown.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        zipCode: z.string(),
      })
    )
    .query(({ input }) => ({
      zipCode: faker.location.zipCode({
        format: input.format,
        state: input.state,
      }),
    })),
});
