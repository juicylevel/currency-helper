import { Side } from 'enums';
import { useRecoilState } from 'recoil';
import { currencyInputState, amountInputState } from '../state';

const useCurrencyInput = () => {
    const [currency, onChangeCurrency] = useRecoilState(
        currencyInputState(Side.RIGHT)
    );
    const [amount, onChangeAmount] = useRecoilState(
        amountInputState(Side.RIGHT)
    );

    return {
        currency,
        amount,
        onChangeCurrency,
        onChangeAmount,
    };
};

export default useCurrencyInput;
