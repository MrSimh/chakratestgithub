import React, { Component } from "react";
import { Center, Flex, Box, Avatar, Heading, Text } from "@chakra-ui/react";

class TopMenu extends Component {
  render() {
    return (
      <Flex>
        <Center bg="#aec8ca" h="50px" w="100%" color="white">
          <Text fontSize="2xl">Pierrevaligator Russe Rex</Text>
        </Center>
        <Box bg="#aec8ca" h="50px" w="15%">
          <Flex mt={4} align="center">
            <Heading as="h3" size="sm">
              Alfred Jaja &nbsp;&nbsp;&nbsp;
            </Heading>
            <Avatar size="sm" src="avatar-1.jpg" />
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default TopMenu;
