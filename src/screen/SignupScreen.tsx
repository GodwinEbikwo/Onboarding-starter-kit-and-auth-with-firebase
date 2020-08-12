import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";
import { Form, FormButton, Field, ErrorMessage } from "../Authentication/Form";
import Wrapper from "../components/Wrapper";
import { registerWithEmail } from "../Authentication/Firebase/firebase";
import { StackNavigationProps, Routes } from "../components/Navigation";
import Social from "../components/footer";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must match Password")
    .required("Confirm Password is required"),
});

export default function SignUpScreen({
  navigation,
}: StackNavigationProps<Routes, "SignUp">) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState("eye");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
    true
  );
  const [registerError, setRegisterError] = useState("");

  function handlePasswordVisibility() {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === "eye") {
      setConfirmPasswordIcon("eye-off");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === "eye-off") {
      setConfirmPasswordIcon("eye");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  }

  async function handleOnSignUp(values: { email: string; password: string }) {
    const { email, password } = values;
    try {
      await registerWithEmail(email, password);
    } catch (error) {
      setRegisterError(error.message);
    }
  }

  return (
    <Wrapper
      style={styles.container}
      footer={
        <Social
          label="Don't have an account, sign in"
          onPress={() => navigation.navigate("Login")}
        />
      }
      label="Let's get you going"
      subtitle="Lorem ipsum dolor sit amet consectetur."
    >
      <Form
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values: { email: string; password: string }) =>
          handleOnSignUp(values)
        }
      >
        <Field
          name="name"
          leftIcon="account"
          placeholder="Enter name"
          autoFocus={false}
        />
        <Field
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
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
        <Field
          name="confirmPassword"
          leftIcon="lock"
          placeholder="Confirm password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={confirmPasswordVisibility}
          textContentType="password"
          rightIcon={confirmPasswordIcon}
          handlePasswordVisibility={handleConfirmPasswordVisibility}
        />
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 40 }}
        >
          <FormButton label={"Register"} />
        </View>
        {<ErrorMessage error={registerError} visible={true} />}
      </Form>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});
