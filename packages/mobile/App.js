import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {add, datastored, ListView, CustomButton, courses, List} from 'shared';
const {width} = Dimensions.get('window');
const itemWidth = width / 4;

const App = () => {
  const [selected, setSelected] = useState(courses[0]);
  useEffect(() => {
    console.log('dataaa---->', datastored, courses);
  });
  const selectItem = item => {
    setSelected(item);
  };
  return (
    <SafeAreaView>
    <View style={{paddingVertical:10}}>
      {/* <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          console.log(add(1, 2));
        }}>
        <Text>Run Add function</Text>
      </TouchableOpacity> */}
      <View style={{}}>
        <FlatList
          style={{}}
          horizontal
          data={courses}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <CustomButton
              title={item?.courseName}
              onClick={() => {
                selectItem(item);
              }}
              textStyle={[
                item === selected ? styles.textStyleselect : styles.textStyle,
              ]}
              buttonstyle={styles.buttonstyle}
            />
          )}></FlatList>
      </View>
      <FlatList
        style={{}}
        data={selected.questions}
        renderItem={({item, index}) => (
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={styles.listtext}>{`${index + 1}. `}</Text>
            <List style={styles.listtext} name={item.qstn} id={item.id}></List>
          </View>
        )}></FlatList>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  liststyele: {
    // alignItems: 'flex-start',
    // justifyContent:'center'
  },
  listtext: {
    fontSize: 16,
  },
  textStyle: {
    color: 'black',
  },
  textStyleselect: {
    color: 'white',
  },
  buttonstyle: {
    backgroundColor: 'grey',
    marginHorizontal: 10,
    width: itemWidth,
  },
});

export default App;
