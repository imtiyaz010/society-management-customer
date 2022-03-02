import { StyleSheet, View } from 'react-native';
import LogIn from './components/login';

export default function App() {
    return (
        <View style={styles.container}>
            <LogIn />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
