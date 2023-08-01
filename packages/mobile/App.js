import React, { useEffect } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {add,datastored, ListView} from 'shared';


const App = () => {
  useEffect(()=>{
    console.log('dataaa---->', datastored)
  })
  return (
    <View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          console.log(add(1, 2));
        }}>
        <Text>Run Add function</Text>
      </TouchableOpacity>
      {datastored.map((item, index)=>(
        <ListView name={item.name} id={item.id}>
        </ListView>
      ))}
    </View>
  );
};

export default App;