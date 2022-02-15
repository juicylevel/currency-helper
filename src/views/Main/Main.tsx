import { View } from 'react-native';
import Constants from 'expo-constants';
import Convertor from 'views/Convertor';
import Rates from 'views/Rates';

const Main = () => (
    <View
        style={{
            paddingTop: Constants.statusBarHeight,
            flexGrow: 1,
        }}
    >
        <Rates />
        <Convertor />
    </View>
);

export default Main;
