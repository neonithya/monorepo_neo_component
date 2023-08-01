import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  id: string;
  name: string;
  style:{}
};

export const ListView = (props: Props) => {
  return (
    <View style={[styles.mainContainer, props?.style]}>
      <Text>{props?.id}</Text>
      <Text>{props?.name}</Text>
    </View>
  );
};
export const List = (props: Props) => {
  return (
    <View style={[styles.mainContainer, props?.style]}>
      <Text>{props?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // padding: 10,
  },
});
