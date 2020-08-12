import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import * as Yup from "yup";

import Wrapper from "../components/Wrapper";
import Form from "../Authentication/Form/Form";
import Field from "../Authentication/Form/Field";
import FormButton from "../Authentication/Form/FormButton";

import IconButton from "../components/IconButton";

import { loginWithEmail } from "../Authentication/Firebase/firebase";
import ErrorMessage from "../Authentication/Form/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a registered email")
    .email("Invalid email")
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password")
    .max(20, "Try something you can remember"),
});

export default function LoginScreen({ navigation }: any) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");

  function handlePasswordVisibility() {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  async function handleOnLogin(values: { email: string; password: string }) {
    const { email, password } = values;
    try {
      await loginWithEmail(email, password);
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (
    <Wrapper style={styles.container}>
      <View style={{ marginBottom: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "600", color: "#333" }}>
          Login to your account
        </Text>
        <Text style={{ fontSize: 15, marginTop: 10, color: "grey" }}>
          Glad to have you back
        </Text>
      </View>
      <Form
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values: any) => handleOnLogin(values)}
      >
        <Field
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <Field
          name="password"
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          rightIcon={rightIcon}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <View style={{ marginHorizontal: 20 }}>
          <FormButton label={"login"} />
        </View>

        {<ErrorMessage error={loginError} visible={true} />}
      </Form>
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <IconButton
        style={styles.backButton}
        iconName="keyboard-backspace"
        color="#fff"
        size={30}
        onPress={() => navigation.goBack()}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    color: "#161616",
    fontSize: 18,
    fontWeight: "500",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
