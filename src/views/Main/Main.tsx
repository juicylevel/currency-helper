import { View } from 'react-native';
import Constants from 'expo-constants';
import Converter from 'views/Converter';
import Rates from 'views/Rates';

const Main = () => (
    <View
        style={{
            paddingTop: Constants.statusBarHeight,
            flexGrow: 1,
        }}
    >
        <Rates />
        <Converter />
    </View>
);

export default Main;
