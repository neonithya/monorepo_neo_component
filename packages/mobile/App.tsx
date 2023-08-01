import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {add} from 'shared';


const App = () => {
  return (
    <View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          console.log(add(1, 2));
        }}>
        <Text>Run Add function</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;