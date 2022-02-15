import { ActivityIndicator, View } from 'react-native';

const FullscreenFallback = () => (
    <View
        style={{
            flexGrow: 1,
            justifyContent: 'center',
        }}
    >
        <ActivityIndicator size="large" />
    </View>
);

export default FullscreenFallback;
