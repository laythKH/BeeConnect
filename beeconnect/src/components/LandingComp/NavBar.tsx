"use client"

import {
   Heading,
   useDisclosure,
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   HStack,
   Text,
   useColorModeValue,
   useColorMode,
} from "@chakra-ui/react"
import { Icon, createIcon } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Container, Box, Flex, Spacer, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { motion } from 'framer-motion'
// import Link from "next/link"

const NavBar = ({ isOurGoalPage = false }) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const toggleTheme = useColorModeValue('🌙', '💡')
   const { toggleColorMode } = useColorMode()
   const formBackground = useColorModeValue(isOurGoalPage ? '#edf2f7cf' : 'gray.100', 'gray.700')
   const placeholderBackground = useColorModeValue('gray.400', 'gray.200')
   const cardBackgroundColor = useColorModeValue('gray.300', 'gray.600')
   const navLinkHover = useColorModeValue('blue.300', 'blue.700')

   return (
      <Flex minWidth='max-content' alignItems='center' backgroundColor={formBackground} gap='2' height={70} className="landing_nav" p={'0 12px'}>
         <Box p='2' display='flex' alignItems={'center'}>
            <Heading fontSize='22px'>
               <Link href={'/'} textDecoration='none' position={'relative'}>
                  <Box position={'absolute'} left={'0'}>🍯</Box>
                  <motion.div
                     animate={{
                        x: [-2, 2, -2], // Animation loop between -2px and 2px
                     }}
                     transition={{
                        duration: 2,
                        repeat: Infinity, // Repeat the animation infinitely
                        repeatType: "reverse", // Reverse the animation after reaching the end
                     }}
                  >
                     <Box position={'absolute'} fontSize={'15px'} left={'15px'} transform={'rotate(-23deg)'} top={'-10px'}>🐝</Box>
                  </motion.div>
                  <Text marginLeft={'30px'}>BeeConnect</Text>
               </Link>
            </Heading>
            <Button
               onClick={toggleColorMode}
               _hover={{ bg: 'transparent' }}
               bg="transparent"
            >
               {toggleTheme}
            </Button>
         </Box>
         <Box flex='1' flexDirection={'row'} display={"flex"} >
            <Show below='720px'>
               {/* mobail nav */}
               <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen} size={"xl"}>
                  <DrawerOverlay />
                  <DrawerContent borderRadius='14px 14px 0 0' overflow='hidden'>
                     <DrawerBody backgroundColor={formBackground} display='flex' flexWrap='wrap' justifyContent='center'>
                        <Box position='relative' width='80%' height='8px' backgroundColor={placeholderBackground} borderRadius='20px' marginBottom='15px' onClick={onClose}></Box>
                        <Link href='/about' marginBottom='10px' width={'100%'}>
                           <Card align='center' backgroundColor={cardBackgroundColor}>
                              <CardHeader paddingBottom='0'>
                                 <Heading size='lg' fontWeight={800}>🤔 How To Use</Heading>
                              </CardHeader>
                              <CardBody paddingTop='10px'>
                                 <Text textAlign='center' fontWeight={500}>You will see brief view about website and how to use it</Text>
                              </CardBody>
                           </Card>
                        </Link>
                        <Link href='/about' marginBottom='10px' width={'100%'}>
                           <Card align='center' backgroundColor={cardBackgroundColor}>
                              <CardHeader paddingBottom='0'>
                                 <Heading size='lg' fontWeight={800}>ℹ️ About Us</Heading>
                              </CardHeader>
                              <CardBody paddingTop='10px'>
                                 <Text textAlign='center' fontWeight={500}>You will Get to See Our Teams With The contact Information</Text>
                              </CardBody>
                           </Card>
                        </Link>
                        <Link href='/about' marginBottom='10px' width={'100%'}>
                           <Card align='center' backgroundColor={cardBackgroundColor}>
                              <CardHeader paddingBottom='0'>
                                 <Heading size='lg' fontWeight={800}>🤓 Our Goals</Heading>
                              </CardHeader>
                              <CardBody paddingTop='10px'>
                                 <Text textAlign='center' fontWeight={500}>You will see our vision for now and for the future</Text>
                              </CardBody>
                           </Card>
                        </Link>
                     </DrawerBody>
                     <DrawerFooter borderTopWidth='1px'>
                        <Box style={{
                           width: '100%',
                           margin: '0 10px',
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           flexDirection: 'column',
                           // backgroundColor: 'red',
                           borderRadius: 8,

                        }}>
                           <Button
                              colorScheme="blue"
                              color='blue.400'
                              style={{
                                 display: 'block',
                                 color: 'black',
                                 width: '100%',
                                 borderRadius: '8px',
                                 textAlign: 'center',
                                 fontSize: '20px',
                                 fontWeight: 'bold',
                              }}
                           >
                              <Link href="/login">Login</Link>
                           </Button>
                        </Box>
                     </DrawerFooter>
                  </DrawerContent>
               </Drawer>
               <Spacer />
               <IconButton
                  colorScheme='blue'
                  aria-label='Search database'
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />}
                  onClick={onOpen}
               />
            </Show>
            <Show above="721px">
               {/* Here the native nav */}
               <Box display='flex' flexDirection='row' gap='15px' alignItems='center' marginLeft='15px' position='relative'>
                  <Link
                     href={'/ourGoals'}
                     className="navLinkHead"
                     _hover={{
                        color: navLinkHover,
                        '&::before': {
                           backgroundColor: navLinkHover,
                           display: 'block'
                        }
                     }}
                  > Our Goals</Link>
                  <Link
                     href={'/aboutUs'}
                     className="navLinkHead"
                     _hover={{
                        color: navLinkHover,
                        '&::before': {
                           backgroundColor: navLinkHover,
                           display: 'block'
                        }
                     }}
                  > About Us</Link>
                  <Link
                     href={'/howToUse'}
                     className="navLinkHead"
                     _hover={{
                        color: navLinkHover,
                        '&::before': {
                           backgroundColor: navLinkHover,
                           display: 'block'
                        }
                     }}
                  > How To Use</Link>
               </Box>
               <Spacer />
               <Box height='70px' display='flex' alignItems='center'>
                  <Button colorScheme="blue">
                     <Link href={'/login'} fontSize={'20px'}>Login 😊</Link>
                  </Button>
               </Box>
            </Show>
         </Box>
      </Flex>
   )
}


export default NavBar