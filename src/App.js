import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

const App = () => {
  return (
    <TouchableOpacity style={styles.header} onPress={() => alert('hi')}>
      <View>
        <Text>touch</Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
