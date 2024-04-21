import React, { useState, useCallback, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

const SlotMachine = ({ isSpinning, onSpinEnd }) => {
  const generateSlotResult = () => {
    // Generate an array of random numbers for each slot
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 5) + 1);
  };

  useEffect(() => {
    if (isSpinning) {
      const newSlots = generateSlotResult();
      setSlots(newSlots);

      // Delay the end of the spin to simulate spinning time
      setTimeout(() => {
        const won = checkWin(newSlots);
        onSpinEnd(won);
      }, 2000);
    }
  }, [isSpinning, onSpinEnd]);
  const [slots, setSlots] = useState(["?", "?", "?"]);
  const [results, setResults] = useState({});

  const checkWin = (slotsArray) => {
    // A simple win logic where all slots match
    return new Set(slotsArray).size === 1;
  };

  const spinSlots = useCallback(() => {
    if (isSpinning) {
      const newSlots = slots.map(() => Math.floor(Math.random() * 9) + 1);
      const won = checkWin(newSlots);
      setSlots(newSlots);
      setResults({ won, slots: newSlots });
      onSpinEnd(won);
    }
  }, [isSpinning, slots, onSpinEnd]);

  useEffect(() => {
    spinSlots();
  }, [isSpinning, spinSlots]);

  useEffect(() => {
    if (!isSpinning && results.slots) {
      // When the spinning stops, we show the results
      alert(`You have ${results.won ? "won" : "lost"}!`);
    }
  }, [isSpinning, results]);

  return (
    <Flex justifyContent="center">
      {results.slots
        ? results.slots.map((slot, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p={4} m={1} width="50px" height="50px" display="flex" alignItems="center" justifyContent="center" fontSize="2xl" bg={results.won ? "green.300" : "red.300"}>
              {slot}
            </Box>
          ))
        : slots.map((slot, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p={4} m={1} width="50px" height="50px" display="flex" alignItems="center" justifyContent="center" fontSize="2xl">
              {slot}
            </Box>
          ))}
    </Flex>
  );
};

export default SlotMachine;
