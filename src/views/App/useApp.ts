import { useRecoilValueLoadable } from 'recoil';
import { rates } from 'state';

const useApp = () => {
    const { state } = useRecoilValueLoadable(rates);
    return {
        initializing: state === 'loading',
    };
};

export default useApp;
