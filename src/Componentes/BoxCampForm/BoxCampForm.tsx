import { Box } from "native-base";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";

interface BoxCampFormProps {
  children: React.ReactNode;
}
export default function BoxCampForm({ children }: BoxCampFormProps) {
  return (
    <Box padding={5} style={styles.box}>
      {children}
    </Box>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 350,
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 4,
  },
});
