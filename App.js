import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopBar from "./components/top-bar";
import { useState } from "react";
import ChatScreen from "./screens/chat-screen";
import MainScreen from "./screens/main-screen";
import ProfileScreen from "./screens/profile-screen";

export const SCREEN_NAMES = {
  MAIN: "main",
  PROFILE: "profile",
  CHAT: "chat",
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("main");

  return (
    <SafeAreaView style={styles.container}>
      <TopBar selectScreen={setCurrentScreen} currentScreen={currentScreen} />
      {currentScreen === SCREEN_NAMES.MAIN && <MainScreen />}
      {currentScreen === SCREEN_NAMES.PROFILE && <ProfileScreen />}
      {currentScreen === SCREEN_NAMES.CHAT && <ChatScreen />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
