import { FormControl, Input } from "native-base";

interface InputsProps {
  label?: string;
  placeholder: string;
  segureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  width?: string;
  disabled?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (text: string) => void

}
export function EntradaDeTexto({
  label,
  placeholder,
  segureTextEntry = false,
  width,
  disabled,
  value,
  onChangeText
}: InputsProps) {
  return (
    <FormControl width={"100%"} mt={3} >
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
        onChangeText={onChangeText}
      ></Input>
    </FormControl>
  );
}
