import { airlineRouter } from './routers/airline';
import { animalRouter } from './routers/animal';
import { colorRouter } from './routers/color';
import { commerceRouter } from './routers/commerce';
import { companyRouter } from './routers/company';
import { databaseRouter } from './routers/database';
import { dateRouter } from './routers/date';
import { financeRouter } from './routers/finance';
import { gitRouter } from './routers/git';
import { hackerRouter } from './routers/hacker';
import { imageRouter } from './routers/image';
import { internetRouter } from './routers/internet';
import { locationRouter } from './routers/location';
import { loremRouter } from './routers/lorem';
import { musicRouter } from './routers/music';
import { numberRouter } from './routers/number';
import { personRouter } from './routers/person';
import { phoneRouter } from './routers/phone';
import { scienceRouter } from './routers/science';
import { stringRouter } from './routers/string';
import { systemRouter } from './routers/system';
import { vehicleRouter } from './routers/vehicle';
import { wordRouter } from './routers/word';
import { router } from './trpc';

export const appRouter = router({
  airline: airlineRouter,
  animal: animalRouter,
  color: colorRouter,
  commerce: commerceRouter,
  company: companyRouter,
  database: databaseRouter,
  dates: dateRouter,
  finance: financeRouter,
  git: gitRouter,
  hacker: hackerRouter,
  image: imageRouter,
  internet: internetRouter,
  location: locationRouter,
  lorem: loremRouter,
  music: musicRouter,
  number: numberRouter,
  person: personRouter,
  phone: phoneRouter,
  science: scienceRouter,
  string: stringRouter,
  system: systemRouter,
  vehicle: vehicleRouter,
  word: wordRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
