import { toFixed } from 'helpers';
import { Text, View } from 'react-native';

export type RateProps = {
    currency: string;
    value: number;
};

const Rate: React.FC<RateProps> = ({ currency, value }) => {
    const formattedValue = toFixed(value);
    return (
        <View
            style={{
                flexDirection: 'row',
            }}
        >
            <Text style={{ fontWeight: 'bold', marginRight: 5, fontSize: 16 }}>
                {currency}
            </Text>
            <Text style={{ fontSize: 16 }}>{formattedValue}</Text>
        </View>
    );
};

export default Rate;
