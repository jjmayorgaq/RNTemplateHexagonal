import {useCreditCardImpl} from '@core/Modules/CreditCards/Applications/UseCases';

export const RecoverPasswordHook = () => {
  const creditCardImpl = useCreditCardImpl();

  const recoverPassword = () => {
    try {
    } catch (error) {}
  };

  return {recoverPassword};
};
