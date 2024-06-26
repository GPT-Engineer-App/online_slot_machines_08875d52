import { Flex, Box, Text } from "@chakra-ui/react";
import { MockAPIProvider } from "./contexts/MockAPIContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import RealPokiesPage from "./pages/RealPokiesPage";
import Index from "./pages/Index";
import Pokies from "./pages/Pokies";
import Navigation from "./components/Navigation";
import GenericGamePage from "./pages/GenericGamePage";
import NewGamePage from "./pages/NewGamePage";
import TopGames from "./pages/TopGames";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    // Wrap the entire application with the MockAPIProvider
    <MockAPIProvider>
      <Router>
        <Navigation />
        <Flex direction="column" minH="100vh" bg="gray.50">
          <Box flex="1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/real-pokies" element={<RealPokiesPage />} />
              <Route path="/pokies" element={<Pokies />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </MockAPIProvider>
  );
}

export default App;
