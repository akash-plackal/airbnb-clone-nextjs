import { Box, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { RiListSettingsLine } from "react-icons/ri";
import TabSection from "./TabSection";

const Navbar = () => {
  return (
    <Box border="1px" w="100%" minH="19vh">
      <Box
        // border="1px"
        w="100%"
        py="4%"
        // minH="5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          boxShadow="lg"
          className="shadow"
          borderRadius="2rem"
          border="1px"
          color="gray.100"
          w="90%"
          h="40%"
          py="3%"
          px="5%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="1.5rem" color="#222222">
            <BiSearch />
          </Text>
          <Box>
            <Text fontSize="sm" color="black" fontWeight="600">
              Where to?
            </Text>
            <Text fontSize="xs" fontWeight="400" color="gray.600">
              Any where &#x2022; Any week &#x2022; Any guest
            </Text>
          </Box>
          <Box border="1px" color="gray.400" borderRadius="50%" p="0.4rem">
            <RiListSettingsLine color="black" />
          </Box>
        </Box>
      </Box>
      <TabSection />
    </Box>
  );
};

export default Navbar;
