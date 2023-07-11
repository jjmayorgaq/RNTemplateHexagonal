export class CreditCard {
  constructor(
    public alias: string = '',
    public bankName: string = '',
    public cashAdvance: number = 0,
    public currency: string = '',
    public currencyUS: string = '',
    public currentBalanceRD: number = 0,
    public expirationDateCC: string = '',
    public isInternational: boolean = false,
    public name: string = '',
    public pendingBalanceAtCutRD: number = 0,
    public productNumber: string = '',
    public productType: string = '',
  ) {}
}
