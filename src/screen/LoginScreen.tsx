import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native";
import * as Yup from "yup";

import Wrapper from "../components/Wrapper";
import Form from "../Authentication/Form/Form";
import Field from "../Authentication/Form/Field";
import FormButton from "../Authentication/Form/FormButton";

import { loginWithEmail } from "../Authentication/Firebase/firebase";
import ErrorMessage from "../Authentication/Form/ErrorMessage";
import Social from "../components/footer";

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
      loginWithEmail(email, password);
    } catch (error) {
      Alert.alert("Error occured", error.message);
      console.log("error.message");
      setLoginError(error.message);
    }
  }

  return (
    <Wrapper
      style={styles.container}
      footer={
        <Social
          label="Don't have an account, sign up"
          onPress={() => navigation.navigate("SignUp")}
        />
      }
      label="Welcome Back"
      subtitle="Glad to have you back"
    >
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
          autoFocus={false}
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

        <View style={styles.footerButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPasswordButtonText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPasswordButtonText}>Remeber me?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 40 }}
        >
          <FormButton label={"login to your account"} />
        </View>

        {<ErrorMessage error={loginError} visible={true} />}
      </Form>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  footerButtonContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  forgotPasswordButtonText: {
    color: "grey",
    fontSize: 15,
    fontFamily: "Medium",
  },
});
