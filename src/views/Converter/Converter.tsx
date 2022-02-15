import { View } from 'react-native';
import LeftInput from './LeftInput';
import RightInput from './RightInput';

const Converter = () => (
    <View
        style={{
            flexDirection: 'column',
        }}
    >
        <LeftInput />
        <RightInput />
    </View>
);

export default Converter;
