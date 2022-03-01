import { Side } from 'enums';
import { useRecoilState } from 'recoil';
import { currencyInputState, amountInputState } from '../state';

const useInput = () => {
    const [currency, onChangeCurrency] = useRecoilState(
        currencyInputState(Side.LEFT)
    );
    const [amount, onChangeAmount] = useRecoilState(
        amountInputState(Side.LEFT)
    );

    return {
        currency,
        amount,
        onChangeCurrency,
        onChangeAmount,
    };
};

export default useInput;
