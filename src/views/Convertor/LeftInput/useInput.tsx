import { useRecoilState } from 'recoil';
import { leftAmountInputState, leftCurrencyInputState } from '../state';

const useInput = () => {
    const [currency, onChangeCurrency] = useRecoilState(leftCurrencyInputState);
    const [amount, onChangeAmount] = useRecoilState(leftAmountInputState);

    return {
        currency,
        amount,
        onChangeCurrency,
        onChangeAmount,
    };
};

export default useInput;
