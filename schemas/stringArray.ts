import { z } from 'zod';

export const stringArray = z.string().transform((val) => val.split(','))
