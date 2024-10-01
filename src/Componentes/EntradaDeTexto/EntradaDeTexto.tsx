import { FormControl, Input, WarningOutlineIcon } from "native-base";

interface InputsProps {
  label?: string;
  placeholder: string;
  segureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  width?: string;
  disabled?: boolean;
  value?: string;
  onChangeText: (text: any) => void;
  onBlur?: (text: any) => void;
  mascara?: boolean;
  errorMessage?: string;
  tipoMascara: "00.00.00" | "000.000.0";

}
export function EntradaDeTexto({
  label,
  placeholder,
  segureTextEntry = false,
  width,
  disabled,
  value,
  onChangeText,

  onBlur,
  errorMessage
}: InputsProps) {

  return (
    <FormControl isInvalid={!!errorMessage} width={"100%"} mt={3} >
      {label && (
        <FormControl.Label _text={{ color: "black" }}>
          {label}
        </FormControl.Label>
      )}
      <Input
        placeholder={placeholder}
        size="lg"
        isDisabled={disabled}
        w={width === " " ? "100%" : width}
        borderRadius="lg"
        value={value}
        secureTextEntry={segureTextEntry}
        bgColor="gray.100"
        shadow={5}
        onChangeText={onChangeText} // Usa o onChangeText padrão
        onBlur={onBlur}
        borderColor={errorMessage ? "red.500" : "gray.300"}
      />
      {errorMessage && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      )}

    </FormControl>
  );
}
