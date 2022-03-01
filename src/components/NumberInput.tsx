import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const isValid = (value: string | undefined): boolean => {
    return /^(\d*)(\.)*(\d+)$/gi.test(value!);
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
        const formattedValue =
            value !== undefined ? value.toString().replace('.', ',') : '';
        setInputValue(formattedValue);
    }, [value]);

    const handleChangeText = useCallback(
        (textValue: string) => {
            setInputValue(textValue);

            const fixedValue = textValue.replace(',', '.');
            if (fixedValue === '') {
                onChange(undefined);
            } else if (isValid(fixedValue)) {
                onChange(+fixedValue);
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
