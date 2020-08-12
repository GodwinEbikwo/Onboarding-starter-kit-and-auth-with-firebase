import React from "react";
import { AuthUserProvider } from "./AuthUserProvider";
import Navigator from "./Navigator";

export function Providers() {
  return (
    <AuthUserProvider>
      <Navigator />
    </AuthUserProvider>
  );
}
