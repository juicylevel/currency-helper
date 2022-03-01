import { CurrencyCode, Side } from 'enums';
import { toFixed } from 'helpers';
import { RatesData } from 'types';
import AmountValue from './AmountValue';

export const leftToRight = (
    leftValue: AmountValue,
    rate: number
): AmountValue => {
    if (leftValue !== undefined) {
        return toFixed(leftValue / rate, 3);
    }
};

export const rightToLeft = (
    rightValue: AmountValue,
    rate: number
): AmountValue => {
    if (rightValue !== undefined) {
        return toFixed(rightValue * rate, 3);
    }
};

export const calcRate = (
    ratesData: RatesData,
    leftCurrency: CurrencyCode,
    rightCurrency: CurrencyCode
): number => {
    return ratesData[leftCurrency] / ratesData[rightCurrency];
};

export const getOpposite = (side: Side): Side => {
    return side === Side.LEFT ? Side.RIGHT : Side.LEFT;
};
