import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { isNaN } from 'lodash';
import { isEmpty } from 'helpers';

const formatNumber = (value: number): string => {
    return !isEmpty(value) ? value.toString().replace('.', ',') : '';
};

const parseInputValue = (value: string): number | undefined => {
    if (!isEmpty(value)) {
        let withoutFormat = value.replace(/\s/g, '');
        withoutFormat = withoutFormat.replace(',', '.');
        if (
            isNaN(+withoutFormat) ||
            /(((\.)|(\.\d*0))$|(^0{2,}$))/g.test(withoutFormat)
        ) {
            return NaN;
        }
        return +withoutFormat;
    } else {
        return undefined;
    }
};

type NumberInputProps = Pick<TextInputProps, 'placeholder'> & {
    value?: number;
    onChange: (value?: number) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
    value,
    placeholder,
    onChange,
}) => {
    const [inputValue, setInputValue] = useState<string>();

    console.log(value);

    useEffect(() => {
        const formattedValue = !isEmpty(value) ? formatNumber(value!) : '';
        setInputValue(formattedValue);
    }, [value]);

    const handleChangeText = useCallback(
        (textValue: string) => {
            setInputValue(textValue);
            const parsedValue = parseInputValue(textValue);
            if (!isNaN(parsedValue)) {
                onChange(parsedValue);
            }
        },
        [onChange]
    );

    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType="numeric"
            value={inputValue}
            onChangeText={handleChangeText}
        />
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

export default NumberInput;
