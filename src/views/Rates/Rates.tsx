import { CurrencyCode } from 'enums';
import { StyleSheet, View } from 'react-native';
import Rate from './Rate';

const { USD, EUR, CNY } = CurrencyCode;

export type RatesProps = {
    data: {
        [USD]: number;
        [EUR]: number;
        [CNY]: number;
    };
};

const Rates: React.FC<RatesProps> = ({ data }) => {
    return (
        <View style={styles.container}>
            <Rate currency={USD} value={data?.USD} />
            <Rate currency={EUR} value={data?.EUR} />
            <Rate currency={CNY} value={data?.CNY} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingTop: 25,
        paddingBottom: 25,
        paddingRight: 10,
        paddingLeft: 10,
    },
});

export default Rates;
