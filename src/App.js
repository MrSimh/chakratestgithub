import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/globals.css";
// BrowserRouter pour gérer la navigation, englobe toute l'application
// Switch pour tester toute les routes (et aller sur la 404 si il ne trouve pas)
// path il faut que ce soit exact sinon il va être ok avec toute url contenant un "/"

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
