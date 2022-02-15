import { createElement } from 'react';
import Rates from './Rates';
import useRates from './useRates';

export default () => {
    const props = useRates();
    return createElement(Rates, props);
};
