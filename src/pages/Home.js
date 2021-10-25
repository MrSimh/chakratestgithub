import Sidebar from "../components/Sidebar";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import TopMenu from "../components/TopMenu";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <TopMenu />
      <Flex w="100%">
        <Sidebar />
        <Flex
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Form />
        </Flex>
      </Flex>
    </>
  );
}
