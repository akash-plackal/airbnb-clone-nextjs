import { Box, Text } from "@chakra-ui/react";
import Tabitems from "./Tabitems";

const sectionData = [
  { word: "design", name: "Design" },
  { word: "arctic", name: "Arctic" },
  { word: "cabin", name: "Cabin" },
  { word: "country+side", name: "Country" },
  { word: "islands", name: "Islands" },
  { word: "technology", name: "Omg" },
  { word: "beaches", name: "Beaches" },
  { word: "pools", name: "Pools" },
  { word: "parks", name: "Parks" },
  { word: "tiny+homes", name: "Homes" },
  { word: "lakes", name: "Lakes" },
  { word: "amazing+view", name: "Views" },
  { word: "caves", name: "Caves" },
  { word: "tropical", name: "Tropical" },
  { word: "windmill", name: "Windmill" },
  { word: "towers", name: "Towers" },
  { word: "treehouse", name: "Treehouse" },
  { word: "desert", name: "Desert" },
];

const TabSection = () => {
  return (
    <Box display="flex" style={{ overflowX: "scroll" }}>
      {sectionData.map((item) => {
        return <Tabitems key={item.name} item={item} />;
      })}
    </Box>
  );
};

export default TabSection;
