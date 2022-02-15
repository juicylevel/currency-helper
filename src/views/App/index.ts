import { createElement } from 'react';
import App from './App';
import useApp from './useApp';

export default () => {
    const props = useApp();
    return createElement(App, props);
};
