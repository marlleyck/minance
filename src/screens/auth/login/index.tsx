import React, { useState } from "react";
import { Text } from "@/src/components/layout/text";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import icon from "@/assets/icon.png";
import { useLogin } from "@/src/api/auth/service";
import { Controller, useForm } from "react-hook-form";
import { Colors } from "@/styles/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Google } from "@/src/constants/icons";

type FormValues = {
  email: string;
  password: string;
};

export function LoginScreen() {
  const { login } = useLogin();
  const { control, handleSubmit } = useForm<FormValues>();

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const onSubmit = (data: FormValues) => {
    login({ email: data.email, password: data.password });
  };

  return (
    <LinearGradient
      colors={["#0A223F", "#1B3A70", "#2D55A0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <View style={styles.header}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>Bem Vindo de Volta!</Text>
          </View>

          <View style={styles.form}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="white"
                  keyboardType="email-address"
                  onBlur={() => {
                    onBlur();
                    setEmailFocused(false);
                  }}
                  onFocus={() => setEmailFocused(true)}
                  onChangeText={onChange}
                  value={value}
                  style={[styles.input, emailFocused && styles.inputFocused]}
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    placeholder="Senha"
                    secureTextEntry={true}
                    placeholderTextColor="white"
                    onBlur={() => {
                      onBlur();
                      setPasswordFocused(false);
                    }}
                    onFocus={() => setPasswordFocused(true)}
                    onChangeText={onChange}
                    value={value}
                    style={[
                      styles.input,
                      passwordFocused && styles.inputFocused,
                    ]}
                  />
                  <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </>
              )}
              name="password"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <View style={styles.orContainer}>
              <View style={styles.bar}></View>
              <Text style={styles.orText}>OU</Text>
              <View style={styles.bar}></View>
            </View>
            <TouchableOpacity style={styles.googleButton}>
              <View style={styles.googleButtonContent}>
                <Google />
                <Text style={styles.googleButtonText}>Entrar com Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: "10%",
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "100",
    marginTop: 16,
  },
  form: {
    paddingHorizontal: 16,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#B0B0B0",
    paddingHorizontal: 16,
    height: 60,
    color: "white",
  },
  inputFocused: {
    borderColor: Colors.light.base,
  },
  forgotPassword: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "right",
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.light.base,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
  },
  bar: {
    width: "40%",
    height: 1,
    backgroundColor: "#B0B0B0",
  },
  orText: {
    marginHorizontal: 10,
    color: "#B0B0B0",
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#B0B0B0",
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  googleButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
