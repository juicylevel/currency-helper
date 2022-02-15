import { StyleSheet, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useCallback, useMemo } from 'react';
import { currencies } from 'configs';
import { CurrencyCode } from 'enums';
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

    const handleChangeText = useCallback(
        (textValue: string) => {
            onChangeAmount(textValue !== '' ? +textValue : undefined);
        },
        [onChangeAmount]
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
            <TextInput
                style={styles.input}
                placeholder="сумма"
                keyboardType="numeric"
                value={amount?.toString()}
                onChangeText={handleChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        fontSize: 20,
        flexGrow: 1,
    },
});

export default Input;
