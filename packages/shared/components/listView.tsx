import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  id: string;
  name: string;
};

export const ListView = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text>{props?.id}</Text>
      <Text>{props?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "green",
    margin: 20,
    padding: 10,
    width: "80%",
  },
});
