import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          GUFTUGO - گفتگو
        </Text>
      </Box>

      <Box
        bg="white"
        color="black"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs>
          <TabList>
            <Tab>
              <Link to="#members">Login</Link>
            </Tab>
            <Tab>
              <Link to="#projects">Signup</Link>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>Login Form</p>
            </TabPanel>
            <TabPanel>
              <p>Signup Form</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
