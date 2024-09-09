import { Box, FormControl, Input } from "native-base";
import { ReactNode } from "react";

interface InputsProps {
  label?: string;
  placeholder: string;
  segureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}
export function EntradaDeTexto({
  label,
  placeholder,
  segureTextEntry = false,
}: InputsProps) {
  return (
    <FormControl mt={3}>
      {label && (
        <FormControl.Label _text={{ color: "black" }}>
          {label}
        </FormControl.Label>
      )}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        secureTextEntry={segureTextEntry}
        bgColor="gray.100"
        shadow={5}
      ></Input>
    </FormControl>
  );
}
