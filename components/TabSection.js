import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const TabSection = () => {
  return (
    <Box display="flex" style={{ overflowX: "scroll" }}>
      <Link href="/">
        <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
          <Image src="/design.jpg" alt="houses" height="30" width="30" />
          <Text fontSize="xs" color="black" fontWeight="600">
            Design
          </Text>
        </Box>
      </Link>

      <Link href="/section/[keyword]" as="/section/arctic">
        <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
          <Image src="/design.jpg" alt="houses" height="30" width="30" />
          <Text fontSize="xs" color="black" fontWeight="600">
            Design
          </Text>
        </Box>
      </Link>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}

      <Box minW="4rem" display="flex" alignItems="center" flexDir="column">
        <Image src="/design.jpg" alt="houses" height="30" width="30" />
        <Text fontSize="xs" color="black" fontWeight="600">
          Design
        </Text>
      </Box>

      {/* ========================== */}
    </Box>
  );
};

export default TabSection;
