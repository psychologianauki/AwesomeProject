import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { SCREEN_NAMES } from "../App";
import { TouchableOpacity } from "react-native";

const selectedColor = "#f06795";
const nonSelectedColor = "#5c5c5c";

const TopBar = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarIcon screenName={SCREEN_NAMES.MAIN} iconName="fire" {...props} />
      <TopBarIcon
        screenName={SCREEN_NAMES.CHAT}
        iconName="comments"
        {...props}
      />
      <TopBarIcon
        screenName={SCREEN_NAMES.PROFILE}
        iconName="users"
        {...props}
      />
    </SafeAreaView>
  );
};

const TopBarIcon = ({ screenName, iconName, selectScreen, currentScreen }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        selectScreen(screenName);
      }}
    >
      <FontAwesome5
        name={iconName}
        size={27}
        color={currentScreen === screenName ? selectedColor : nonSelectedColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default TopBar;
