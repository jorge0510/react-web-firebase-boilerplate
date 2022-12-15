import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Route, Routes } from "react-router-dom"

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import AuthRoute from "./stories/components/AuthRoute";

import Home from "./stories/pages/home";
import Login from "./stories/pages/login";
import Dashboard from "./stories/pages/dashboard";

initializeApp(firebaseConfig);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" minH="100vh">
      <Box  p={3}>
        <ColorModeSwitcher position="absolute" right="20px" top="20px" />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
      </Routes>
    </Box>
  </ChakraProvider>
)
