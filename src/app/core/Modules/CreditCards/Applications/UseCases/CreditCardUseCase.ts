import {CreditCard} from '../../Domain/Entities/CreditCard';
import {CreditCardRepository} from '../../Domain/Repository/CreditCard.repository';

export class CreditCardUseCase {
  private readonly creditCardRepository = new CreditCardRepository();

  public async executeGetAll(): Promise<CreditCard[]> {
    return await this.creditCardRepository.getAll();
  }
}
