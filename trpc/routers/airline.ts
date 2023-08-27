import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['airline'];

const AircraftTypeEnum = z.enum(['regional', 'narrowbody', 'widebody']);

export const airlineRouter = router({
  getAircraftType: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/airline/aircraft-type',
        method: 'GET',
        description: 'Returns a random aircraft type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        aircraftType: AircraftTypeEnum,
      })
    )
    .query(() => ({
      aircraftType: faker.airline.aircraftType(),
    })),
  getAirline: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/airline/airline',
        method: 'GET',
        description: 'Generates a random airline',
      },
    })
    .input(z.void())
    .output(
      z.object({
        airline: z.object({
          name: z.string(),
          iataCode: z.string(),
        }),
      })
    )
    .query(() => ({
      airline: faker.airline.airline(),
    })),
  getAirplane: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/airline/airplane',
        method: 'GET',
        description: 'Generates a random airplane.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        airplane: z.object({
          name: z.string(),
          iataTypeCode: z.string(),
        }),
      })
    )
    .query(() => ({
      airplane: faker.airline.airplane(),
    })),
  getAirport: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/airline/airport',
        method: 'GET',
        description: 'Generates a random airport.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        airport: z.object({
          name: z.string(),
          iataCode: z.string(),
        }),
      })
    )
    .query(() => ({
      airport: faker.airline.airport(),
    })),
  getFlightNumber: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/airline/flight-number',
        method: 'GET',
        description:
          'Returns a random flight number. Flight numbers are always 1 to 4 digits long. Sometimes they are used without leading zeros (e.g.: American Airlines flight 425) and sometimes with leading zeros, often with the airline code prepended (e.g.: AA0425).',
      },
    })
    .input(
      z.object({
        addLeadingZeros: processedBoolean
          .describe(
            'Whether to pad the flight number up to 4 digits with leading zeros.'
          )
          .default(false)
          .optional(),
        minLength: z
          .number()
          .describe('The lower bound of range of digits to generate.')
          .default(1)
          .optional(),
        maxLength: z
          .number()
          .describe('The upper bound of range of digits to generate.')
          .default(4)
          .optional(),
      })
    )
    .output(
      z.object({
        flightNumber: z.string(),
      })
    )
    .query(({ input }) => ({
      flightNumber: faker.airline.flightNumber({
        addLeadingZeros: input.addLeadingZeros,
        length: {
          min: input.minLength,
          max: input.maxLength,
        },
      }),
    })),
  getRecordLocator: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/airline/record-locator',
        method: 'GET',
        description:
          "Generates a random record locator. Record locators are used by airlines to identify reservations. They're also known as booking reference numbers, locator codes, confirmation codes, or reservation codes.",
      },
    })
    .input(
      z.object({
        allowNumerics: processedBoolean
          .describe('Whether to allow numeric characters.')
          .default(true)
          .optional(),
        allowVisuallySimilarCharacters: processedBoolean
          .describe(
            "Whether to allow visually similar characters such as '1' and 'I'."
          )
          .default(false)
          .optional(),
      })
    )
    .output(
      z.object({
        recordLocator: z.string(),
      })
    )
    .query(({ input }) => ({
      recordLocator: faker.airline.recordLocator({
        allowNumerics: input.allowNumerics,
        allowVisuallySimilarCharacters: input.allowVisuallySimilarCharacters,
      }),
    })),
  getSeat: publicProcedure
    .meta({
      openapi: {
        tags,
        path: '/airline/seat',
        method: 'GET',
        description: 'Generates a random seat.',
      },
    })
    .input(
      z.object({
        aircraftType: AircraftTypeEnum.optional(),
      })
    )
    .output(
      z.object({
        seat: z.string(),
      })
    )
    .query(({ input }) => ({
      seat: faker.airline.seat({
        aircraftType: input.aircraftType,
      }),
    })),
});
