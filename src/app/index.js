import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { borderSizing, colours, fontSize, spacing } from "../../theme";
export default function Login() {
  return (
    // main screen background
    <View style={styles.container}>
      {/* start of header container */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Log in to continue</Text>
      </View>
      {/* end of header container */}
      {/* start of card container */}
      <View style={styles.card}>
        {/* start of login detail */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="yourEmail@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="yourEmail@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {/* end of log in details */}
        <Text>Forgot password?</Text>
        {/* start of log in button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        {/* end of login button */}
      </View>
      {/* end of card container */}
      {/* start of footer container */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link href="/register" style={styles.footerLink}>
          Register
        </Link>
      </View>
      {/* end of footer container */}
    </View>
    // end of main screen
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "center",
    backgroundColor: colours.background,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colours.heading,
    fontSize: fontSize.xl,
    fontWeight: "700",
  },
  subtitle: {
    color: colours.heading,
    fontSize: fontSize.md,
    fontWeight: "600",
  },

  card: {
    padding: spacing.lg,
    backgroundColor: colours.card,
    borderRadius: borderSizing.xxl,
  },

  label: {
    fontSize: fontSize.sm,
    fontWeight: "600",
  },
  input: {
    height: 52,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    backgroundColor: colours.inputBackground,
    borderColor: colours.inputBorder,
    borderRadius: borderSizing.sm,
  },

  forgot: {},

  button: {
    height: 52,
    backgroundColor: colours.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: borderSizing.sm,
  },
  buttonText: {
    fontSize: fontSize.md,
    fontWeight: "600",
    color: colours.buttonText,
  },

  footer: {
    flexDirection: "row",
    gap: spacing.xs,
  },
  footerText: {},
  footerLink: {},
});
