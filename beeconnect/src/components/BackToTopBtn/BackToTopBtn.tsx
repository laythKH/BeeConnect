'use client'

import { Box, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const BackToTopBtn = () => {
   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.pageYOffset > 100) {
            setShowButton(true);
         } else {
            setShowButton(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0.5 }}
         exit={{ opacity: 0, scale: 0.5 }}
      >
         {showButton && (
            <Box position="fixed" bottom={4} right={4}>
               <IconButton
                  icon={<ChevronUpIcon />}
                  size="lg"
                  fontSize={40}
                  onClick={handleScrollToTop}
                  aria-label="Scroll to top"
                  bg="blue.600"
                  color="white"
                  _hover={{ bg: "blue.200" }}
                  _active={{ bg: "blue.300" }}
               />
            </Box>
         )}
      </motion.div>
   );
}

export default BackToTopBtn