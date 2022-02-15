import { RATES_URL } from 'constants/urls';
import { selector } from 'recoil';
import { RatesData } from 'types';

const rates = selector<RatesData>({
    key: 'rates',
    get: async () => {
        const ratesData = await fetch(`${RATES_URL}&base_currency=RUB`).then(
            (res) => res.json()
        );
        return ratesData?.data;
    },
});

export default rates;
