import { Currency } from 'types';
import { CurrencyCode } from 'enums';

const { RUB, USD, CNY, EUR, GBP } = CurrencyCode;

const currencies: { [key in CurrencyCode]?: Currency } = {
    [RUB]: { code: RUB, num: 643, symbol: '₽' },
    [USD]: { code: USD, num: 840, symbol: '$' },
    [CNY]: { code: CNY, num: 156, symbol: '¥' },
    [EUR]: { code: EUR, num: 978, symbol: '€' },
    [GBP]: { code: GBP, num: 826, symbol: '£' },
};

export default currencies;
