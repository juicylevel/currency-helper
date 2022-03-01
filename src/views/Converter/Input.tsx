import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMemo } from 'react';
import { currencies } from 'configs';
import { CurrencyCode } from 'enums';
import { NumberInput } from 'components';
import AmountValue from './AmountValue';

type InputProps = {
    currency: CurrencyCode;
    amount: AmountValue;
    onChangeCurrency: (value: CurrencyCode) => void;
    onChangeAmount: (value: AmountValue) => void;
};

const Input: React.FC<InputProps> = ({
    currency,
    amount,
    onChangeCurrency,
    onChangeAmount,
}) => {
    const currenciesOptions = useMemo(
        () =>
            Object.entries(currencies).map(([code, currency]) => (
                <Picker.Item key={code} label={currency.symbol} value={code} />
            )),
        []
    );

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <Picker
                selectedValue={currency}
                onValueChange={onChangeCurrency}
                style={{ width: 100 }}
            >
                {currenciesOptions}
            </Picker>
            <NumberInput
                value={amount}
                placeholder="сумма"
                onChange={onChangeAmount}
            />
        </View>
    );
};

export default Input;
