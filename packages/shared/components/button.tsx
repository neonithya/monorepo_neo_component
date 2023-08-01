import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  buttonstyle: {},
  textStyle: {},
  onClick : ()=>{}
};

export const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props?.onClick} activeOpacity={0.6} style={[styles.mainContainer,props?.buttonstyle]}>
      <Text style={[props.textStyle]}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
});
