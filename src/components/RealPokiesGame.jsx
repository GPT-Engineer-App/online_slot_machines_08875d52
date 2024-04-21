import React, { useState, useContext } from "react";
import { Box, Button, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import SlotMachine from "./SlotMachine";
import { MockAPIContext } from "../contexts/MockAPIContext";

const RealPokiesGame = () => {
  const { recordGameResult } = useContext(MockAPIContext);

  const handleSpinEnd = (won) => {
    setIsSpinning(false);
    recordGameResult("Real Pokies", won ? "win" : "lose");
  };
  const [isSpinning, setIsSpinning] = useState(false);
  const bg = useColorModeValue("gray.100", "gray.700");

  // Removed the useContext from inside the function and corrected the playGame context method usage
  const { playGame } = useContext(MockAPIContext);

  const handleSpinClick = () => {
    setIsSpinning(true);

    // Use the context playGame function to mark the game as played
    setTimeout(() => {
      setIsSpinning(false);
      playGame("Real Pokies");
    }, 2000); // Let's assume the spin animation takes 2 seconds.
  };

  return (
    <VStack spacing={8} padding={8} align="center" bg={bg}>
      <Text fontSize="2xl" fontWeight="bold">
        Real Pokies Slot Machine
      </Text>
      <Box position="relative" width="full" maxWidth="lg">
        <SlotMachine isSpinning={isSpinning} />
      </Box>
      <Button colorScheme="blue" onClick={handleSpinClick} isDisabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin"}
      </Button>
    </VStack>
  );
};

export default RealPokiesGame;
