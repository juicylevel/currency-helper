import { selector } from 'recoil';
import { mapValues } from 'lodash';
import rates from './rates';

const exchangeRate = selector({
    key: 'exchangeRate',
    get: ({ get }) => {
        const ratesData = get(rates);
        const exchangeRateData = mapValues(ratesData, (value) => 1 / value);
        return exchangeRateData;
    },
});

export default exchangeRate;
