import { Currency } from 'types';

const currencies: { [key: string]: Currency } = {
    RUB: { code: 'RUB', num: 643, symbol: '₽' },
    USD: { code: 'USD', num: 840, symbol: '$' },
    EUR: { code: 'EUR', num: 978, symbol: '€' },
    GBP: { code: 'GBP', num: 826, symbol: '£' },
};

export default currencies;
