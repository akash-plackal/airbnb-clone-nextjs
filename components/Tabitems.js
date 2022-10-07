import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Tabitems = ({ item }) => {
  return (
    <Link
      key={item.name}
      href="/section/[keyword]"
      as={`/section/${item.word}`}
    >
      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src={`/${item.word}.jpg`} alt="houses" height="30" width="30" />
        <Text fontSize="xs" className="open" color="black" fontWeight="600">
          {item.name}
        </Text>
      </Box>
    </Link>
  );
};

export default Tabitems;
