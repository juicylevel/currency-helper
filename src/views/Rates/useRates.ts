import { useRecoilValue } from 'recoil';
import { exchangeRate } from 'state';

const useRates = () => {
    const data = useRecoilValue(exchangeRate);
    return {
        data,
    };
};

export default useRates;
