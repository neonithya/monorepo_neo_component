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
      <View style={{paddingVertical: 10}}>
        {/* <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          console.log(add(1, 2));
        }}>
        <Text>Run Add function</Text>
      </TouchableOpacity> */}
        <Text style={styles.mainhead}>{'Interview Preparations'}</Text>
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
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                marginTop: 10,
              }}>
              <Text style={styles.listtext}>{`${index + 1}. `}</Text>
              <List
                style={styles.liststyele}
                name={item.qstn}
                id={item.id}></List>
            </View>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainhead: {
    padding: 10,
    fontSize: 22,
    color: 'blue',
    fontWeight: 'bold',
  },
  liststyele: {
    // alignItems: 'flex-start',
    // justifyContent:'center'
  },
  listtext: {
    fontSize: 14,
    color: 'black',
  },
  textStyle: {
    color: 'black',
  },
  textStyleselect: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonstyle: {
    backgroundColor: '#f7ae60',
    marginHorizontal: 10,
    width: itemWidth,
  },
});

export default App;
