import {useCreditCardImpl} from '@core/Modules/CreditCards/Applications/UseCases';

export const LoginHook = () => {
  const creditCardImpl = useCreditCardImpl();

  const login = () => {
    try {
    } catch (error) {}
  };

  return {login};
};
