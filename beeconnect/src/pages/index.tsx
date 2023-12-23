'use client'

import colla from '@/assets/images/arrows.jpg'
import NavBar from '@/components/LandingComp/NavBar'
import Layout from '@/components/Layout'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
  calc,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'

import image0 from '@/assets/images/imageForCollabration/findTheRightPerson.png'
import image1 from '@/assets/images/imageForCollabration/findingMissingPerson.png'
import image2 from '@/assets/images/imageForCollabration/findingPersonInternet.png'
import image3 from '@/assets/images/imageForCollabration/spliteJob.png'

import image5 from '@/assets/images/dotGrid.png'
import image4 from '@/assets/images/newSec.jpg'

import BackToTopBtn from '@/components/BackToTopBtn/BackToTopBtn'

const Home = () => {
  const specialLetter = useColorModeValue('blue.300', 'blue.700')
  const cardsContainer = useColorModeValue('gray.100', 'gray.600')
  const backgroundCardHeaderColor = useColorModeValue('blue.100', 'blue.400')

  return (
    <Layout>
      <NavBar />
      {/* Start Landing Section */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        p={8}
        display={'flex'}
        alignItems={'center'}
        // backgroundColor={'red'}
        height={'calc(100vh - 70px)'}
      >
        {/* Content Part */}
        <Box
          flexBasis={{ base: '100%', md: '50%' }}
          display={'flex'}
          alignItems={'center'}
        >
          <Box marginTop={{ base: 0, md: '-30px' }}>
            <Heading
              fontSize={{ base: 35, sm: 55, md: 55, xl: 70 }}
              marginBottom={'30px'}
              textAlign={{ base: 'center', md: 'initial' }}
            >
              <Text as="span" color={specialLetter}>
                C
              </Text>
              reative 🤓🤓
              <br />
              <Text as="span" color={specialLetter}>
                C
              </Text>
              ollabretation{' '}
              <Text as="span" color={specialLetter}>
                P
              </Text>
              eople
            </Heading>
            <Divider display={{ base: 'none', md: 'bock' }} />
            <Text
              fontWeight={600}
              lineHeight={{ base: 6, sm: 8 }}
              textAlign={{ base: 'center', md: 'initial' }}
            >
              the key to success in today's interconnected world. By working
              together, we can pool our knowledge, skills, and perspectives to
              achieve remarkable outcomes. Collaborative efforts foster innovation,
              enhance problem-solving capabilities, and promote a sense of shared
              ownership.
            </Text>
            <Divider display={{ base: 'none', md: 'bock' }} />
          </Box>
        </Box>
        {/* Image Part */}
        <Box
          flexBasis={{ base: '100%', md: '50%' }}
          position="relative"
          right={'-3%'}
          borderRadius={20}
          overflow={'hidden'}
          backgroundColor={'blue.400'}
          marginTop={'30px'}
          style={{
            backgroundColor: 'red',
          }}
          display={{ base: 'none', sm: 'none', md: 'block' }}
        >
          <Image
            as={NextImage}
            src={colla as any}
            alt="Image Description"
            objectFit="cover"
            w="200%"
            h="auto"
            mx="auto"
          />
        </Box>
      </Flex>
      {/* End Landing Section */}
      {/* Start New Section For Benefits */}
      <Flex
        flexDirection={'column'}
        backgroundColor={cardsContainer}
        p={'40px 0'}
        borderRadius={20}
        margin={'0 30px'}
      >
        {/* Here the Title For Benefits */}
        <Box display="flex" justifyContent="center">
          <Text
            fontSize={{ base: '20px', sm: '30px', md: 50 }}
            fontWeight={700}
            className="section-title"
            position="relative"
            borderTop="2px solid black"
            borderBottom="2px solid black"
            marginBottom={30}
          >
            🔗🔗 Benfites 🔗🔗
          </Text>
        </Box>
        {/* Card For Benefit Section */}
        <Flex
          display={'flex'}
          justify={'center'}
          p={'0 8px'}
          gap={10}
          flexWrap={'wrap'}
        >
          <Card
            align="center"
            boxShadow={'#63B3ED 0px 2px 8px 0px;'}
            minHeight={'200px'}
            maxWidth={300}
            margin={{ base: ' 0 3px', sm: 'initial' }}
          >
            <CardHeader
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              paddingBottom={0}
            >
              <Image
                as={NextImage}
                src={image0 as any}
                width={'150px'}
                height={'150px'}
              />
              <Heading size="md" fontSize={22} fontWeight={700} paddingBottom={0}>
                Right Person
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={'center'}>
                Finding the right person not easy as you think, but we make it more
                and more easier
              </Text>
            </CardBody>
          </Card>
          <Card
            align="center"
            boxShadow={'#63B3ED 0px 2px 8px 0px;'}
            minHeight={'200px'}
            maxWidth={300}
            margin={{ base: ' 0 3px', sm: 'initial' }}
          >
            <CardHeader
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              paddingBottom={0}
            >
              <Image
                as={NextImage}
                src={image1 as any}
                width={'150px'}
                height={'150px'}
              />
              <Heading size="md" fontSize={22} fontWeight={700} paddingBottom={0}>
                Right Person
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={'center'}>
                Finding the right person not easy as you think, but we make it more
                and more easier
              </Text>
            </CardBody>
          </Card>
          <Card
            align="center"
            boxShadow={'#63B3ED 0px 2px 8px 0px;'}
            minHeight={'200px'}
            maxWidth={300}
            margin={{ base: ' 0 3px', sm: 'initial' }}
          >
            <CardHeader
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              paddingBottom={0}
            >
              <Image
                as={NextImage}
                src={image2 as any}
                width={'150px'}
                height={'150px'}
              />
              <Heading size="md" fontSize={22} fontWeight={700} paddingBottom={0}>
                Right Person
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={'center'}>
                Finding the right person not easy as you think, but we make it more
                and more easier
              </Text>
            </CardBody>
          </Card>
          <Card
            align="center"
            boxShadow={'#63B3ED 0px 2px 8px 0px;'}
            minHeight={'200px'}
            maxWidth={300}
            margin={{ base: ' 0 3px', sm: 'initial' }}
          >
            <CardHeader
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              paddingBottom={0}
            >
              <Image
                as={NextImage}
                src={image3 as any}
                width={'150px'}
                height={'150px'}
              />
              <Heading size="md" fontSize={22} fontWeight={700} paddingBottom={0}>
                Right Person
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={'center'}>
                Finding the right person not easy as you think, but we make it more
                and more easier
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
      {/* End New Section For Benefits */}
      {/* Start New Section For "_______" */}
      <Flex
        p={'20px 8px'}
        height={{ base: '80vh', sm: '100vh' }}
        alignItems={'center'}
        position={'relative'}
      >
        {/* dotted Images */}
        <Box position="absolute" zIndex="-1" bottom={{ base: 2, sm: 4, lg: 10 }}>
          <Image
            as={NextImage}
            src={image5 as any}
            width={{ base: '100px', sm: 'initial' }}
          />
        </Box>
        <Box
          position="absolute"
          zIndex="-1"
          right={'10px'}
          top={{ base: 10, sm: 7, lg: 10 }}
        >
          <Image
            as={NextImage}
            src={image5 as any}
            width={{ base: '100px', sm: 'initial' }}
          />
        </Box>
        {/* Image Part */}
        <Box
          flexBasis={{ base: 0, sm: '30%', md: '40%' }}
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}
        >
          <Image
            as={NextImage}
            src={image4 as any}
            marginLeft={'-10px'}
            borderRadius={'0 20px 20px 0'}
            width={{ base: 0, sm: 0, md: '500px' }}
            height={{ base: 0, sm: 0, md: '500px' }}
            boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'}
          />
        </Box>
        {/* Content Part */}
        <Box
          display={'flex'}
          flexDirection={'column'}
          flexBasis={{ base: '100%', sm: '100%', md: '40%' }}
          flex={1}
          alignItems={{ base: 'center', sm: 'center', lg: 'initial' }}
        >
          <Box
            position={'relative'}
            width={'100%'}
            height={2}
            backgroundColor={'blue.400'}
            display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}
          ></Box>
          <Heading
            fontSize={{ base: '28px', sm: '40px', md: '50px' }}
            textAlign={{ base: 'center', lg: 'initial' }}
          >
            Main Here is The Best
          </Heading>
          <Heading
            fontSize={{ base: '18px', sm: '20px', md: '20px' }}
            fontWeight={600}
            marginTop={'-6px'}
            marginBottom={4}
            color="blue.400"
            textAlign={{ base: 'center', lg: 'initial' }}
          >
            Here Sub Heading soo you can tal
          </Heading>
          <Text
            letterSpacing={1}
            lineHeight={{ base: 1.3, sm: 1.5 }}
            maxWidth={{ base: 350, sm: 600 }}
            textAlign={{ base: 'center', sm: 'center', lg: 'initial' }}
          >
            Admiration we surrounded possession frequently he. Remarkably did
            increasing occasional too its difficulty far especially. Known tiled but
            sorry joy balls. Bed sudden manner indeed fat now feebly. Face do with in
            need of wife paid that be. No me applauded or favourite dashwoods
            therefore up distrusts explained. She literature discovered increasing
            how diminution understood. Though and highly the enough county for man.
            Of it up he still court alone widow seems. Suspected he remainder
            rapturous my sweetness
          </Text>
        </Box>
        {/* <Spacer /> */}
      </Flex>
      {/* End New Section For "_______" */}
      {/* Start New Section For Some Of Our Success */}
      <Flex
        flexDirection={'column'}
        backgroundColor={cardsContainer}
        p={{ base: '30px 0', sm: '40px 0' }}
        borderRadius={20}
        margin={{ base: '0 10px', sm: '0 30px' }}
        marginBottom={50}
      >
        {/* Here the Title For Benefits */}
        <Box display="flex" justifyContent="center">
          <Text
            fontWeight={700}
            className="section-title"
            position="relative"
            borderTop="2px solid black"
            borderBottom="2px solid black"
            marginBottom={30}
            fontSize={{ base: '20px', sm: '30px', md: 50 }}
          >
            🔗🔗 Success Stories 🔗🔗
          </Text>
        </Box>

        <Flex
          padding={{ base: '0 10px', sm: '0 20px' }}
          gap={{ base: 5, sm: 10 }}
          flexWrap={'wrap'}
          justifyContent={'center'}
        >
          <Card maxW="420px">
            <CardHeader paddingBottom={{ base: 0, sm: 'initial' }}>
              <Flex
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
                backgroundColor={backgroundCardHeaderColor}
                p={5}
                borderRadius={7}
              >
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the
                speed of design. I wanted the developer to be just as excited as the
                designer to create a screen.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Box
                width={'100%'}
                position={'relative'}
                height={'9px'}
                borderRadius={9}
                backgroundColor={backgroundCardHeaderColor}
              ></Box>
            </CardFooter>
          </Card>
          <Card maxW="420px">
            <CardHeader paddingBottom={{ base: 0, sm: 'initial' }}>
              <Flex
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
                backgroundColor={backgroundCardHeaderColor}
                p={5}
                borderRadius={7}
              >
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the
                speed of design. I wanted the developer to be just as excited as the
                designer to create a screen.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Box
                width={'100%'}
                position={'relative'}
                height={'9px'}
                borderRadius={9}
                backgroundColor={backgroundCardHeaderColor}
              ></Box>
            </CardFooter>
          </Card>
          <Card maxW="420px">
            <CardHeader paddingBottom={{ base: 0, sm: 'initial' }}>
              <Flex
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
                backgroundColor={backgroundCardHeaderColor}
                p={5}
                borderRadius={7}
              >
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the
                speed of design. I wanted the developer to be just as excited as the
                designer to create a screen.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Box
                width={'100%'}
                position={'relative'}
                height={'9px'}
                borderRadius={9}
                backgroundColor={backgroundCardHeaderColor}
              ></Box>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
      {/* Start New Section For Some Of Our Success */}
      {/* Start -- Footer -- */}
      <Flex
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={'gray.400'}
        p={6}
      >
        <Text fontSize={20} fontWeight={800}>
          ❤️❤️skillSwap❤️❤️
        </Text>
      </Flex>
      {/* End -- Footer -- */}
      <BackToTopBtn />
    </Layout>
  )
}

export default Home
