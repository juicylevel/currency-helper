import { isObject, isEmpty as _isEmpty, isFunction } from 'lodash';

const isEmpty = (value: any): boolean => {
    if (isFunction(value)) {
        return false;
    }
    if (isObject(value)) {
        return _isEmpty(value);
    }
    return value === null || value === undefined || value === '';
};

export default isEmpty;
