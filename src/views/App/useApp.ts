import { useRecoilValueLoadable } from 'recoil';
import { rates } from 'state';

const useApp = () => {
    const { state } = useRecoilValueLoadable(rates);
    console.log(state);
    return {
        initializing: state === 'loading',
    };
};

export default useApp;
