import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Log in to continue</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="yourEmail@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="yourEmail@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Forgot password?</Text>

        <Pressable style={styles.mainBtn}>
          <Text style={styles.label}>Log in</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.label}>Don't have an account?</Text>
        <Link href="/register" style={styles.mainBtnLink}>
          Register
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#F4F4FB",
  },
  card: {
    backgroundColor: "#ffff",
    padding: 24,
    borderRadius: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#1F2937",
    fontSize: 28,
    fontWeight: "700",
  },
  TextInput: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F9FAFB",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  mainBtn: {
    height: 52,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F46E5",
  },
  mainBtnLink: {
    backgroundColor: "#4F46E5",
    borderWidth: 1,
    borderRadius: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
