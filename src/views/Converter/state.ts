import { Side, CurrencyCode } from 'enums';
import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { rates } from 'state';
import { calcRate, leftToRight, rightToLeft, getOpposide } from './utils';
import AmountValue from './AmountValue';

const DEFAULT_LEFT_AMOUNT = 1;

const currencyState = atomFamily<CurrencyCode, Side>({
    key: 'currency',
    default: (side) =>
        side === Side.LEFT ? CurrencyCode.USD : CurrencyCode.RUB,
});

const rateState = atom<number>({
    key: 'rate',
    default: selector<number>({
        key: 'defaultRate',
        get: ({ get }) => {
            return calcRate(
                get(rates),
                get(currencyState(Side.LEFT)),
                get(currencyState(Side.RIGHT))
            );
        },
    }),
});

const defaultAmountState = selectorFamily<AmountValue, Side>({
    key: 'defaultAmount',
    get:
        (side) =>
        ({ get }) => {
            if (side === Side.RIGHT) {
                const rate = get(rateState);
                return leftToRight(DEFAULT_LEFT_AMOUNT, rate);
            } else if (side === Side.LEFT) {
                return DEFAULT_LEFT_AMOUNT;
            }
        },
});

const amountState = atomFamily<AmountValue, Side>({
    key: 'amount',
    default: defaultAmountState,
});

export const amountInputState = selectorFamily<AmountValue, Side>({
    key: 'amountInput',
    get: (side) => () => amountState(side),
    set:
        (side) =>
        ({ get, set }, newValue) => {
            const newAmount = newValue as AmountValue;
            const rate = get(rateState);

            const leftAmount =
                side === Side.LEFT ? newAmount : rightToLeft(newAmount, rate);
            const rightAmount =
                side === Side.RIGHT ? newAmount : leftToRight(newAmount, rate);

            set(amountState(Side.LEFT), leftAmount);
            set(amountState(Side.RIGHT), rightAmount);
        },
});

export const currencyInputState = selectorFamily<CurrencyCode, Side>({
    key: 'currencyInput',
    get: (side) => () => currencyState(side),
    set:
        (side) =>
        ({ get, set }, newValue) => {
            let newCurrency = newValue as CurrencyCode;
            let opposideCurrency = get(currencyState(getOpposide(side)));
            let leftCurrency, rightCurrency;

            const currentLeft = get(currencyState(Side.LEFT));
            const currentRight = get(currencyState(Side.RIGHT));

            if (newCurrency === opposideCurrency) {
                leftCurrency = currentRight;
                rightCurrency = currentLeft;
            } else {
                leftCurrency = side === Side.LEFT ? newCurrency : currentLeft;
                rightCurrency =
                    side === Side.RIGHT ? newCurrency : currentRight;
            }

            set(currencyState(Side.LEFT), leftCurrency);
            set(currencyState(Side.RIGHT), rightCurrency);

            const newRate = calcRate(get(rates), leftCurrency, rightCurrency);
            const newRightAmount = leftToRight(
                get(amountState(Side.LEFT)),
                newRate
            );

            set(rateState, newRate);
            set(amountState(Side.RIGHT), newRightAmount);
        },
});
