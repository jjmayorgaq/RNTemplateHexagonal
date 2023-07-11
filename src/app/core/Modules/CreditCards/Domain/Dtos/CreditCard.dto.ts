import {z} from 'zod';

const CreditCardResponseSchema = z.object({
  alias: z.string().optional(),
  bankName: z.string().optional(),
  cashAdvance: z.number().optional(),
  currency: z.string().optional(),
  currencyUS: z.string().optional(),
  currentBalanceRD: z.number().optional(),
  expirationDateCC: z.string().optional(),
  isInternational: z.boolean().optional(),
  name: z.string().optional(),
  pendingBalanceAtCutRD: z.number().optional(),
  productNumber: z.string().optional(),
  productType: z.string().optional(),
});

export type CreditCardDto = z.infer<typeof CreditCardResponseSchema>;
export const AllCreditCardsDtoSchema = z.array(CreditCardResponseSchema);
export type AllCreditCardsDto = z.infer<typeof AllCreditCardsDtoSchema>;
