import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps){
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alef Freitas</Text>
          <Text color="gray.300" fontSize="small">
            alef.freitas07@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Alef Freitas" src="https://github.com/aleffreitas.png" />
    </Flex>
  );
}