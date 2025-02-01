import { Avatar, Box, Button, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';


const SideDrawer = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState("");
  const [loadingChat, setloadingChat] = useState("");
  const { user } = ChatState();
  const navigate = useNavigate();


  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  }

  return (

    <>

      <Box
        bg="white"
        w="100%"
        p="5px 10px"
        borderWidth="5px"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          spacing={{ base: 3, md: 0 }}
        >

          <Tooltip label="Search User To Chat" hasArrow placement="bottom-end">
            <Button variant="ghost" display="flex" alignItems="center">
              <i className="fa fa-search" aria-hidden="true"></i>
              <Text display={{ md: "flex" }} px="4"> {/* base: "none", */}
                Search User
              </Text>
            </Button>
          </Tooltip>


          <Text fontSize="2xl" fontFamily="Work sans" whiteSpace="nowrap" textAlign="center">
            GUFTUGO - گفتگو
          </Text>
          <Stack direction="row" align="center" spacing={3}>

            <Menu>
              <MenuButton as={IconButton} icon={<i className="fa fa-bell" />} variant="ghost" />
            </Menu>

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
              </MenuButton>
              <MenuList>
                <ProfileModal>
                  <MenuItem>My Profile</MenuItem>
                </ProfileModal>
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </Box>






    </>



  )
}

export default SideDrawer