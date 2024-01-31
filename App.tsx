import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { useVocieRecognition } from "./hooks/useVoiceRecognition";

export default function App() {
  const [borderColor, setBorderColor] = useState<"lightgray" | "lightgreen">(
    "lightgray"
  );

  const { state, startRecognizing, stopRecognizing, destroyRecognizer } =
    useVocieRecognition();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 30 }}>
        TalkGPT
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#333333",
          marginVertical: 5,
          fontSize: 12,
        }}
      >
        Press and hold this button to record ypur voice. Realease to send the
        recording, and you'll hear a response
      </Text>
      <Text style={{ marginVertical: 10, fontSize: 17 }}>
        {JSON.stringify(state, null, 2)}
      </Text>
      <Text style={{ marginVertical: 10, fontSize: 17 }}>Your Message</Text>
      <Pressable
        onPressIn={() => {
          setBorderColor("lightgreen");
          startRecognizing();
        }}
        onPressOut={() => {
          setBorderColor("lightgray");
          stopRecognizing();
          //handleSubmit();
        }}
        style={{
          width: "90%",
          padding: 30,
          gap: 10,
          borderWidth: 3,
          alignItems: "center",
          borderRadius: 10,
          borderColor: borderColor,
        }}
      >
        <Text>Hold to Speak</Text>
      </Pressable>
      <Button title="Reply Last message" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
