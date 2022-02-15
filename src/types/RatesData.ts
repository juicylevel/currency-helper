import { CurrencyCode } from 'enums';

type RatesData = {
    [key in CurrencyCode]: number;
};

export default RatesData;
