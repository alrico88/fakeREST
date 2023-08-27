import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { publicProcedure, router } from '../trpc';
import { processedBoolean } from '../../schemas/processedBoolean';

const tags = ['finance'];

export const financeRouter = router({
  getAccountName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/account-name',
        description: 'Generates a random account name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        accountName: z.string(),
      })
    )
    .query(() => ({
      accountName: faker.finance.accountName(),
    })),
  getAccountNumber: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/account-number',
        description: 'Generates a random account number.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe('The length of the account number.')
          .default(8)
          .optional(),
      })
    )
    .output(
      z.object({
        accountNumber: z.string(),
      })
    )
    .query(({ input }) => ({
      accountNumber: faker.finance.accountNumber({
        length: input.length,
      }),
    })),
  getAmount: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/amount',
        description:
          'Generates a random amount between the given bounds (inclusive).',
      },
    })
    .input(
      z.object({
        autoFormat: processedBoolean
          .describe(
            'If true this method will use Number.toLocaleString(). Otherwise it will use Number.toFixed().'
          )
          .optional(),
        dec: z
          .number()
          .describe('The number of decimal places for the amount.')
          .default(2)
          .optional(),
        max: z
          .number()
          .describe('The upper bound for the amount.')
          .default(1000)
          .optional(),
        min: z
          .number()
          .describe('The lower bound for the amount.')
          .default(0)
          .optional(),
        symbol: z
          .string()
          .describe('The symbol used to prefix the amount.')
          .default('')
          .optional(),
      })
    )
    .output(
      z.object({
        amount: z.string(),
      })
    )
    .query(({ input }) => ({
      amount: faker.finance.amount({
        autoFormat: input.autoFormat,
        dec: input.dec,
        max: input.max,
        min: input.min,
        symbol: input.symbol,
      }),
    })),
  getBic: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/bic',
        description:
          'Generates a random SWIFT/BIC code based on the ISO-9362 format.',
      },
    })
    .input(
      z.object({
        includeBranchCode: processedBoolean
          .describe(
            'Whether to include a three-digit branch code at the end of the generated code.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        bic: z.string(),
      })
    )
    .query(({ input }) => ({
      bic: faker.finance.bic({
        includeBranchCode: input.includeBranchCode,
      }),
    })),
  getBitcoinAddress: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/bitcoin-address',
        description: 'Generates a random Bitcoin address.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        bitcoinAddress: z.string(),
      })
    )
    .query(() => ({
      bitcoinAddress: faker.finance.bitcoinAddress(),
    })),
  getCreditCardCVV: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/credit-card-cvv',
        description: 'Generates a random credit card CVV.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        creditCardCVV: z.string(),
      })
    )
    .query(() => ({
      creditCardCVV: faker.finance.creditCardCVV(),
    })),
  getCreditCardIssuer: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/credit-card-issuer',
        description: 'Returns a random credit card issuer.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        creditCardIssuer: z.string(),
      })
    )
    .query(() => ({
      creditCardIssuer: faker.finance.creditCardIssuer(),
    })),
  getCreditCardNumber: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/credit-card-number',
        description: 'Generates a random credit card number.',
      },
    })
    .input(
      z.object({
        issuer: z
          .string()
          .describe(
            'The name of the issuer (case insensitive) or the format used to generate one.'
          )
          .optional(),
      })
    )
    .output(
      z.object({
        creditCardNumber: z.string(),
      })
    )
    .query(({ input }) => ({
      creditCardNumber: faker.finance.creditCardNumber({
        issuer: input.issuer,
      }),
    })),
  getCurrency: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/currency',
        description:
          'Returns a random currency object, containing code, name and symbol properties.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        currency: z.object({
          code: z.string().describe('Ex.: USD'),
          name: z.string().describe('Ex.: US Dollar'),
          symbol: z.string().describe('Ex.: $'),
        }),
      })
    )
    .query(() => ({
      currency: faker.finance.currency(),
    })),
  getCurrencyCode: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/currency-code',
        description:
          'Returns a random currency code. (The short text/abbreviation for the currency (e.g. US Dollar -> USD))',
      },
    })
    .input(z.void())
    .output(
      z.object({
        currencyCode: z.string(),
      })
    )
    .query(() => ({
      currencyCode: faker.finance.currencyCode(),
    })),
  getCurrencyName: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/currency-name',
        description: 'Returns a random currency name.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        currencyName: z.string(),
      })
    )
    .query(() => ({
      currencyName: faker.finance.currencyName(),
    })),
  getCurrencySymbol: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/currency-symbol',
        description: 'Returns a random currency symbol.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        currencySymbol: z.string(),
      })
    )
    .query(() => ({
      currencySymbol: faker.finance.currencySymbol(),
    })),
  getEthereumAddress: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/ethereum-address',
        description: 'Creates a random, non-checksum Ethereum address.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        ethereumAddress: z.string(),
      })
    )
    .query(() => ({
      ethereumAddress: faker.finance.ethereumAddress(),
    })),
  getIban: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/iban',
        description: 'Generates a random iban.',
      },
    })
    .input(
      z.object({
        countryCode: z
          .string()
          .transform((val) => val.toUpperCase())
          .describe(
            'The country code from which you want to generate an IBAN, if none is provided a random country will be used.'
          )
          .optional(),
        formatted: processedBoolean
          .describe('Return a formatted version of the generated IBAN.')
          .optional(),
      })
    )
    .output(
      z.object({
        iban: z.string(),
      })
    )
    .query(({ input }) => ({
      iban: faker.finance.iban({
        countryCode: input.countryCode,
        formatted: input.formatted,
      }),
    })),
  getLitecoinAddress: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/litecoin-address',
        description: 'Generates a random Litecoin address.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        litecoinAddress: z.string(),
      })
    )
    .query(() => ({
      litecoinAddress: faker.finance.litecoinAddress(),
    })),
  getMaskedNumber: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/masked-number',
        description: 'Generates a random masked number.',
      },
    })
    .input(
      z.object({
        ellipsis: processedBoolean
          .describe('Whether to prefix the numbers with an ellipsis.')
          .default(true)
          .optional(),
        length: z
          .number()
          .describe('The length of the unmasked number.')
          .default(4)
          .optional(),
        parens: processedBoolean
          .describe('Whether to use surrounding parenthesis.')
          .default(true)
          .optional(),
      })
    )
    .output(
      z.object({
        maskedNumber: z.string(),
      })
    )
    .query(({ input }) => ({
      maskedNumber: faker.finance.maskedNumber({
        ellipsis: input.ellipsis,
        length: input.length,
        parens: input.parens,
      }),
    })),
  getPin: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/pin',
        description: 'Generates a random PIN number.',
      },
    })
    .input(
      z.object({
        length: z
          .number()
          .describe('The length of the PIN to generate.')
          .default(4)
          .optional(),
      })
    )
    .output(
      z.object({
        pin: z.string(),
      })
    )
    .query(({ input }) => ({
      pin: faker.finance.pin({
        length: input.length,
      }),
    })),
  getRoutingNumber: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/routing-number',
        description: 'Generates a random routing number.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        routingNumber: z.string(),
      })
    )
    .query(() => ({
      routingNumber: faker.finance.routingNumber(),
    })),
  getTransactionDescription: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/transaction-description',
        description: 'Generates a random transaction description.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        transactionDescription: z
          .string()
          .describe(
            "Ex.: 'invoice transaction at Kilback - Durgan using card ending with ***(...4316) for UAH 783.82 in account ***16168663'"
          ),
      })
    )
    .query(() => ({
      transactionDescription: faker.finance.transactionDescription(),
    })),
  getTransactionType: publicProcedure
    .meta({
      openapi: {
        tags,
        method: 'GET',
        path: '/finance/transaction-type',
        description: 'Returns a random transaction type.',
      },
    })
    .input(z.void())
    .output(
      z.object({
        transactionType: z.string(),
      })
    )
    .query(() => ({
      transactionType: faker.finance.transactionType(),
    })),
});
