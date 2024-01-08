import { Box, Divider, HStack, Link, Spacer } from "@chakra-ui/react";
import { NavLink, useLocation } from "@remix-run/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeButton";

export default function RootNavBar(){
    const location = useLocation();
    return (
        <React.Fragment>
            <HStack spacing={4}>
                <Link color={location.pathname == "/" ? "red.500" : undefined} marginLeft={4} as={NavLink} to={"/"}>Home</Link>
                <Spacer/>
                <Box m={1}>
                    <ColorModeSwitcher/>
                </Box>
            </HStack>
            <Divider/>
        </React.Fragment>
    )
}