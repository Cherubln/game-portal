import { Text } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return;
  return <Text>{children}</Text>;
};

export default ErrorMessage;
