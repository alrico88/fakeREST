import { z } from 'zod';

export const processedBoolean = z.preprocess(
  (val) => val === 'true',
  z.boolean()
);
