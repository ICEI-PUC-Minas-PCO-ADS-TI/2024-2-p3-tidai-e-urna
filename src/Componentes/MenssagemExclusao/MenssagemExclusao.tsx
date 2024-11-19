import { Alert, Divider, HStack, ScrollView, Stack, Text, VStack } from "native-base";

export default function MenssagemExclusao() {
  const getTextColor = variant => {
    switch (variant) {
      case "left-accent":
      case "top-accent":
      case "subtle":
        return "coolGray.800";

      case "solid":
        return "warmGray.50";
    }
  };

  return (
    <ScrollView mt={5}>
      <Stack space={3} maxW="400" mr={5} flexDirection="column" justifyContent="center" alignItems="center">
        {["solid"].map(key => {
          return <>
            <Alert w="100%" variant={key} colorScheme="success" status="success">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                  <HStack space={2} flexShrink={1} alignItems="center">
                    <Alert.Icon />
                    <Text color={getTextColor(key)}>
                      Remoção feita com sucesso!!
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </Alert>
            <Divider mt="5" mb="2.5" />
          </>;
        })}
      </Stack>
    </ScrollView>
  )
}