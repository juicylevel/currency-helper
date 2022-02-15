import { useRecoilState } from 'recoil';
import { rightAmountInputState, rightCurrencyInputState } from '../state';

const useCurrencyInput = () => {
    const [currency, onChangeCurrency] = useRecoilState(
        rightCurrencyInputState
    );
    const [amount, onChangeAmount] = useRecoilState(rightAmountInputState);

    return {
        currency,
        amount,
        onChangeCurrency,
        onChangeAmount,
    };
};

export default useCurrencyInput;
