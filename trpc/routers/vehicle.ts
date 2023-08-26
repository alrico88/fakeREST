import { faker } from '@faker-js/faker';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const tags = ['vehicle'];

export const vehicleRouter = router({
  getBicycle: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/bicycle',
        description: 'Returns a type of bicycle.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        bicycle: z.string(),
      })
    )
    .query(() => ({
      bicycle: faker.vehicle.bicycle(),
    })),
  getColor: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/color',
        description: 'Returns a vehicle color.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        color: z.string(),
      })
    )
    .query(() => ({
      color: faker.vehicle.color(),
    })),
  getFuel: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/fuel',
        description: 'Returns a fuel type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        fuel: z.string(),
      })
    )
    .query(() => ({
      fuel: faker.vehicle.fuel(),
    })),
  getManufacturer: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/manufacturer',
        description: 'Returns a manufacturer name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        manufacturer: z.string(),
      })
    )
    .query(() => ({
      manufacturer: faker.vehicle.manufacturer(),
    })),
  getModel: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/model',
        description: 'Returns a vehicle model.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        model: z.string(),
      })
    )
    .query(() => ({
      model: faker.vehicle.model(),
    })),
  getType: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/type',
        description: 'Returns a vehicle type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        type: z.string(),
      })
    )
    .query(() => ({
      type: faker.vehicle.type(),
    })),
  getVehicle: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/vehicle',
        description: 'Returns a random vehicle.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        vehicle: z.string(),
      })
    )
    .query(() => ({
      vehicle: faker.vehicle.vehicle(),
    })),
  getVin: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/vin',
        description: 'Returns a vehicle identification number (VIN).',
      },
    })
    .input(z.void())
    .output(
      z.object({
        vin: z.string(),
      })
    )
    .query(() => ({
      vin: faker.vehicle.vin(),
    })),
  getVrm: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/vehicle/vrm',
        description:
          'Returns a vehicle registration number (Vehicle Registration Mark - VRM)',
      },
    })
    .input(z.void())
    .output(
      z.object({
        vrm: z.string(),
      })
    )
    .query(() => ({
      vrm: faker.vehicle.vrm(),
    })),
});
