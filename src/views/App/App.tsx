import { FullscreenFallback } from 'components';
import Main from 'views/Main';

type AppProps = {
    initializing: boolean;
};

const App: React.FC<AppProps> = ({ initializing }) => {
    return initializing ? <FullscreenFallback /> : <Main />;
};

export default App;
