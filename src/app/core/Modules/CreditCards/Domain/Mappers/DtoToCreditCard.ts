import { CreditCard } from '../Entities/CreditCard';
import { CreditCardDto } from '../Dtos/CreditCard.dto';

export const dtoToCreditCard = (dto: CreditCardDto): CreditCard => {
  return new CreditCard(
   dto.alias,
   dto.bankName,
   dto.cashAdvance,
   dto.currency,
   dto.currencyUS,
   dto.currentBalanceRD,
   dto.expirationDateCC,
   dto.isInternational,
   dto.name,
   dto.pendingBalanceAtCutRD,
   dto.productNumber,
   dto.productType,
  );
};

export const dtoToAllCreditCards = (dto: CreditCardDto[]): CreditCard[] => {
  return dto.map((creditCard) => dtoToCreditCard(creditCard));
};
