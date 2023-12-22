"use client"

import Layout from "@/components/Layout"
import NavBar from "@/components/LandingComp/NavBar"
import { Box, chakra, Divider, Flex, Heading, HStack, List, ListIcon, ListItem, Progress, Stack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react"

import landingPageImage from '@/assets/images/ourGoalsPage/LandingPage.jpg'
import imageSecThree from '@/assets/images/image122334.jpg'

import { Image } from "@chakra-ui/react"
import NextImage from "next/image";
import { relative } from "path"
import { Icon, createIcon } from '@chakra-ui/react'

const CircleIcon = (props) => (
   <Icon viewBox='0 0 200 200' {...props}>
      <path
         fill='currentColor'
         d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
   </Icon>
)


const ourGoals = () => {

   const isMobile = useBreakpointValue({ base: true, md: false })
   const isDesktop = useBreakpointValue({ base: false, md: true })

   const simpleStories = [
      {
         date: 2020,
         title: 'before skillswap',
         section: 'dan and adrie started using skillsSwap at 2021 but before that each one of them has to build his own project but dan frontend dev and adrie is backend dev'
      },
      {
         date: 2021,
         title: 'dan and adrie',
         section: 'when dan get to know adire using skillswap they agreed that both of them need the other and they started to build the first project'
      },
      {
         date: 2022,
         title: 'first project',
         section: 'the first project was e-commerce website and the continue to build many other website'
      },
      {
         date: 2023,
         title: 'get the intern',
         section: 'both dan and adrie find the intern they want and start work in company and latter they became a developer in there specillization'
      }
   ]

   const cardsContainer = useColorModeValue('#edf2f7cf', 'blue.700')
   const waveColor = useColorModeValue('#FFFFFF', '#1A202C')

   return (
      <Flex flexDirection={'column'}>
         {/* Start Landing Section 1 */}
         <Flex height={'100vh'} position={'relative'} overflow={'hidden'} boxSizing="border-box" >
            <Image as={NextImage} src={landingPageImage as any} objectFit='cover' position={'absolute'} left={0} top={0} zIndex={-1} width={'100%'} height={'100%'} />
            <Box
               borderRadius={'14px'}
               overflow={'hidden'}
               margin={'10px'}
               width={'100%'}
               height={'fit-content'}
            >
               <NavBar isOurGoalPage={true} />
            </Box>

            <Box backgroundColor={cardsContainer} position={'absolute'} width={{ base: '90%', sm: '90%', md: '50%' }} top={'50%'} left={'10px'} borderRadius={10} padding={10} transform={`translateY(-50%)`}>
               <Heading fontSize={{ base: '30px', md: '40px' }} marginBottom={'10px'}>Our Goals</Heading>
               <Text letterSpacing={'0.9px'} lineHeight={1.4} fontSize={{ base: '14px', md: 'initial' }}>
                  He my polite be object oh change. Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.
               </Text>
            </Box>
            <Box position={'absolute'} width={'100%'} bottom={-15} left={0}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={waveColor} fill-opacity="1" d="M0,288L21.8,282.7C43.6,277,87,267,131,261.3C174.5,256,218,256,262,256C305.5,256,349,256,393,245.3C436.4,235,480,213,524,208C567.3,203,611,213,655,197.3C698.2,181,742,139,785,149.3C829.1,160,873,224,916,234.7C960,245,1004,203,1047,197.3C1090.9,192,1135,224,1178,208C1221.8,192,1265,128,1309,117.3C1352.7,107,1396,149,1418,170.7L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
            </Box>
         </Flex>
         {/* End Landing Section 1 */}
         {/* Start New Section 2 */}
         <Flex flexDirection={'column'} justifyContent={'center'} padding={5} alignItems={'center'} >
            {/* <Flex padding={2} backgroundColor={'blue.300'} width={'100%'} borderRadius={14} flexWrap={'wrap'}>
               <Flex backgroundColor={'white'} borderRadius={14} width={'100%'} outline={'8px dotted'} outlineColor={'white'}></Flex>
            </Flex> */}
            <Text fontWeight={700} className="section-title" position='relative' borderTop='2px solid black' borderBottom='2px solid black' marginBottom={30} fontSize={{ base: '26px', sm: '30px', md: 50 }} width={'fit-content'} marginEnd={{ base: '10px', md: '30px' }}>🔗 Simple Stories 🔗</Text>
            <Flex flexDirection={'column'} width={'100%'}>
               {simpleStories.map((data: any, index: any) => (
                  <Flex key={index} mb={'10px'}>
                     {/* Desktop view(left card) */}
                     {isDesktop && index % 2 === 0 && (
                        <>
                           <EmptyCard />
                           <LineWithDot />
                           <Card {...data} id={index} />

                        </>
                     )}

                     {/* Mobile view */}
                     {isMobile && (
                        <>
                           <LineWithDot />
                           <Card {...data} id={index} />

                        </>
                     )}

                     {/* Desktop view(right card) */}
                     {isDesktop && index % 2 !== 0 && (
                        <>
                           <Card {...data} id={index} />

                           <LineWithDot />
                           <EmptyCard />
                        </>
                     )}
                  </Flex>
               ))}
            </Flex>
         </Flex>
         {/* End New Section 2 */}
         {/* Start New Section 3 */}
         <Flex height={'100vh'} position={'relative'} overflow={'hidden'} justifyContent={'center'} alignItems={'center'}>
            <Box width={'100%'} position={'absolute'} top={0} left={0} zIndex={100} >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={waveColor} fill-opacity="1" d="M0,256L24,234.7C48,213,96,171,144,160C192,149,240,171,288,181.3C336,192,384,192,432,165.3C480,139,528,85,576,80C624,75,672,117,720,128C768,139,816,117,864,101.3C912,85,960,75,1008,64C1056,53,1104,43,1152,69.3C1200,96,1248,160,1296,176C1344,192,1392,160,1416,144L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </Box>
            <Box position={'absolute'} width={'100%'} height={'100%'} zIndex={-1}>
               <Image as={NextImage} src={imageSecThree as any} objectFit='cover' position={'absolute'} left={0} top={0} zIndex={-1} width={'100%'} height={'100%'} objectPosition={'top'} />
            </Box>
            <Box display={'flex'} flexWrap={'wrap'} zIndex={1000} marginTop={100} flexBasis={{ base: '90%', sm: '90%', md: '90%', lg: '60%' }} backgroundColor={cardsContainer} borderRadius={14} overflow={'hidden'}>
               <Box position={'relative'} display={"flex"} flexWrap={'wrap'} width={'100%'} justifyContent={'center'} p={'8px 0'}>
                  <Heading fontSize={{ base: '20px', sm: '22px', md: '30px', lg: '35px' }} textAlign={'center'}>Our Future achievement & Goals</Heading>
               </Box>
               <Divider />
               <Divider />
               <Divider />
               <TableContainer width={'100%'} padding={'10px'}>
                  <Table size='md'>
                     <Thead>
                        <Tr>
                           <Th>Attributes</Th>
                           <Th>Our Status</Th>
                           <Th>Our Goals</Th>
                        </Tr>
                     </Thead>
                     <Tbody fontWeight={500}>
                        <Tr>
                           <Td>Staibility</Td>
                           <Td >90%</Td>
                           <Td >92%</Td>
                        </Tr>
                        <Tr>
                           <Td>Users</Td>
                           <Td>200,000</Td>
                           <Td>500,000</Td>
                        </Tr>
                        <Tr>
                           <Td>Our Group</Td>
                           <Td>1200</Td>
                           <Td>2000</Td>
                        </Tr>
                        <Tr>
                           <Td>Topics</Td>
                           <Td>200</Td>
                           <Td>600</Td>
                        </Tr>
                     </Tbody>
                     <Tfoot>

                     </Tfoot>
                  </Table>
               </TableContainer>
            </Box>
         </Flex>
         {/* Ending New Section 3 */}
         {/* Start -- Footer -- */}
         <Flex display={'flex'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#ffffff36'} p={6}>
            <Text fontSize={20} fontWeight={800}>❤️❤️skillSwap❤️❤️</Text>
         </Flex>
         {/* End -- Footer -- */}
      </Flex>
   )
}

export default ourGoals


const Card = (props: any) => {
   // For even id show card on left side
   // For odd id show card on right side

   const isEvenId = props.id % 2 == 0
   let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px'
   let leftValue = isEvenId ? '-15px' : 'unset'
   let rightValue = isEvenId ? 'unset' : '-15px'

   const isMobile = useBreakpointValue({ base: true, md: false })
   if (isMobile) {
      leftValue = '-15px'
      rightValue = 'unset'
      borderWidthValue = '15px 15px 15px 0'
   }

   // const handleImageError = (self) => {
   //    self.target.src = 'https://img.icons8.com/emoji/512/carp-streamer.png'
   //    console.log('Error loading logo image')
   // }

   // const handleImageLoad = () => {
   //    console.log('Logo image loaded successfully')
   // }

   return (
      <HStack
         flex={1}
         p={{ base: 3, sm: 6 }}
         bg={useColorModeValue('gray.100', 'gray.900')}
         spacing={5}
         rounded="lg"
         alignItems="center"
         pos="relative"
         _before={{
            content: `""`,
            w: '0',
            h: '0',
            borderColor: `transparent ${useColorModeValue(
               '#edf2f6',
               '#2D394E'
            )} transparent`,
            borderStyle: 'solid',
            borderWidth: borderWidthValue,
            position: 'absolute',
            left: leftValue,
            right: rightValue,
            display: 'block',
         }}
      >
         <Box>
            {/* stack items side by side */}
            <HStack spacing={0} textAlign="left">
               <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.300'}>
                  {props.company}
               </Text>
            </HStack>

            <VStack spacing={2} mb={3} textAlign="left">
               <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%" textTransform={'capitalize'}>
                  {props.title}
                  <Text fontSize="md">{props.date}</Text>
               </chakra.h1>
               <chakra.p>
                  {props.section}
               </chakra.p>
            </VStack>
         </Box>
      </HStack>
   )
}

const LineWithDot = () => {
   return (
      <Flex
         pos="relative"
         alignItems="center"
         mr={{ base: '40px', md: '40px' }}
         ml={{ base: '0', md: '40px' }}
      >
         <chakra.span
            position="absolute"
            left="50%"
            height="calc(100% + 10px)"
            border="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            top="0px"
         ></chakra.span>
         <Box pos="relative" p="10px">
            <Box
               pos="absolute"
               top="0"
               left="0"
               bottom="0"
               right="0"
               width="100%"
               height="100%"
               backgroundSize="cover"
               backgroundRepeat="no-repeat"
               backgroundPosition="center center"
               bg={useColorModeValue('gray.600', 'gray.200')}
               borderRadius="100px"
               backgroundImage="none"
               opacity={1}
            ></Box>
         </Box>
      </Flex>
   )
}

const EmptyCard = () => {
   return (
      <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>
   )
}