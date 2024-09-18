import { Box, FormControl, Input } from "native-base";
import { ReactNode } from "react";

interface InputsProps {
  label?: string;
  placeholder: string;
  segureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  width?: string;
  disabled?: boolean;
  value?: string;
}
export function EntradaDeTexto({
  label,
  placeholder,
  segureTextEntry = false,
  width,
  disabled,
  value,
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
        isDisabled={disabled}
        w={width == " " ? "100%" : width}
        borderRadius="lg"
        value={value}
        secureTextEntry={segureTextEntry}
        bgColor="gray.100"
        shadow={5}
      ></Input>
    </FormControl>
  );
}
