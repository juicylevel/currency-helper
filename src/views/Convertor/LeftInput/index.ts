import { createElement } from 'react';
import Input from '../Input';
import useInput from './useInput';

export default () => {
    const props = useInput();
    return createElement(Input, props);
};
