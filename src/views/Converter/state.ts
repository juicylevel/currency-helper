import { CurrencyCode } from 'enums';
import { atom, selector } from 'recoil';
import { rates } from 'state';
import AmountValue from './AmountValue';
import { calcRate, leftToRight, rightToLeft } from './utils';

const leftCurrencyState = atom<CurrencyCode>({
    key: 'leftCurrency',
    default: CurrencyCode.USD,
});

const rightCurrencyState = atom<CurrencyCode>({
    key: 'rightCurrency',
    default: CurrencyCode.RUB,
});

const rateState = atom<number>({
    key: 'rate',
    default: selector<number>({
        key: 'defaultRate',
        get: ({ get }) => {
            return calcRate(
                get(rates),
                get(leftCurrencyState),
                get(rightCurrencyState)
            );
        },
    }),
});

const rightDefaultAmountState = selector<AmountValue>({
    key: 'defaultRight',
    get: ({ get }) => {
        const rate = get(rateState);
        return leftToRight(get(leftAmountState), rate);
    },
});

const leftAmountState = atom<AmountValue>({
    key: 'leftAmount',
    default: 1,
});

const rightAmountState = atom<AmountValue>({
    key: 'rightAmount',
    default: rightDefaultAmountState,
});

export const leftCurrencyInputState = selector<CurrencyCode>({
    key: 'leftCurrencyInput',
    get: () => leftCurrencyState,
    set: ({ get, set }, newValue) => {
        const newLeftCurrency = newValue as CurrencyCode;
        let rightCurrency = get(rightCurrencyState);

        if (newLeftCurrency === rightCurrency) {
            rightCurrency = get(leftCurrencyState);
            set(leftCurrencyState, newLeftCurrency);
            set(rightCurrencyState, rightCurrency);
        } else {
            set(leftCurrencyState, newLeftCurrency);
        }

        const newRate = calcRate(get(rates), newLeftCurrency, rightCurrency);
        const newRightAmount = leftToRight(get(leftAmountState), newRate);
        set(rateState, newRate);
        set(rightAmountState, newRightAmount);
    },
});

export const rightCurrencyInputState = selector<CurrencyCode>({
    key: 'rightCurrencyInput',
    get: () => rightCurrencyState,
    set: ({ get, set }, newValue) => {
        const newRightCurrency = newValue as CurrencyCode;
        let leftCurrency = get(leftCurrencyState);

        if (newRightCurrency === leftCurrency) {
            leftCurrency = get(rightCurrencyState);
            set(leftCurrencyState, leftCurrency);
            set(rightCurrencyState, newRightCurrency);
        } else {
            set(rightCurrencyState, newRightCurrency);
        }

        const newRate = calcRate(get(rates), leftCurrency, newRightCurrency);
        const newRightAmount = leftToRight(get(leftAmountState), newRate);
        set(rateState, newRate);
        set(rightAmountState, newRightAmount);
    },
});

export const leftAmountInputState = selector<AmountValue>({
    key: 'leftAmountInput',
    get: () => leftAmountState,
    set: ({ get, set }, newLeftAmount) => {
        if (!isNaN(newLeftAmount as number)) {
            const rate = get(rateState);
            const newRightAmount = leftToRight(
                newLeftAmount as AmountValue,
                rate
            );
            set(leftAmountState, newLeftAmount);
            set(rightAmountState, newRightAmount);
        }
    },
});

export const rightAmountInputState = selector<AmountValue>({
    key: 'rightAmountInput',
    get: () => rightAmountState,
    set: ({ get, set }, newRightAmount) => {
        if (!isNaN(newRightAmount as number)) {
            const rate = get(rateState);
            const newLeftAmount = rightToLeft(
                newRightAmount as AmountValue,
                rate
            );
            set(leftAmountState, newLeftAmount);
            set(rightAmountState, newRightAmount);
        }
    },
});
