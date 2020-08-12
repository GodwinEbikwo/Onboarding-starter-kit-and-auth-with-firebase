import React from "react";
import { useFormikContext } from "formik";

import Input from "../../components/Input";
import ErrorMessage from "./ErrorMessage";

export default function Field({ name, width, ...rest }: any) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <React.Fragment>
      <Input
        value={values[name]}
        onChangeText={(text: string) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}
