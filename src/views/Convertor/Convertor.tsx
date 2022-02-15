import { View } from 'react-native';
import LeftInput from './LeftInput';
import RightInput from './RightInput';

type ConvertorProps = {};

const Convertor: React.FC<ConvertorProps> = () => {
    return (
        <View
            style={{
                flexDirection: 'column',
            }}
        >
            <LeftInput />
            <RightInput />
        </View>
    );
};

export default Convertor;
