import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile(){
  return(
    <Flex align="center">
      <Box
        mr="4"
        textAlign="right"
      >
        <Text>Alef Freitas</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          alef.freitas07@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Alef Freitas" src="https://github.com/aleffreitas.png" />
    </Flex>
  );
}