import NavBar from "@/components/LandingComp/NavBar"
import { Box, Flex, Heading, Image, SimpleGrid, Text, useColorModeValue, chakra, Divider, Input, Textarea, Button, useToast } from "@chakra-ui/react"
import NextImage from "next/image";
import salimImage from '@/assets/images/salim.jpg'
import aboutus from '@/assets/images/aboutus.jpg'
import { useState } from "react";

const aboutUs = () => {
   const cardsContainer = useColorModeValue('#edf2f7cf', 'blue.700')
   const waveColor = useColorModeValue('#FFFFFF', '#1A202C')
   const bgCardColor = useColorModeValue('blue.100', 'blue.700')

   const [nameUser, setNameUser] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const toast = useToast()

   const handleSubmit = (event) => {
      event.preventDefault();
      // Simulate sending the message to a specific email address
      const emailData = {
         to: 'your-email@example.com',
         subject: 'New contact form submission',
         body: `Name: ${nameUser}\nEmail: ${email}\nMessage: ${message}`,
      };
      // Simulate the API call to send the email
      simulateSendEmail(emailData);
      // Reset the form fields
      setNameUser('');
      setEmail('');
      setMessage('');
      // Show success toast message
      toast({
         title: 'Message sent',
         description: 'Your message has been sent successfully.',
         status: 'success',
         duration: 3000,
         isClosable: true,
      });
   };

   const simulateSendEmail = (data) => {
      // Simulate sending an API request to the server to send the email
      setTimeout(() => {
         console.log('Sending email:', data);
         // Perform any additional logic here
      }, 1000);
   };

   return (
      <Flex flexDirection={'column'}>
         {/* Start Landing Section 1 */}
         <Flex height={'70vh'} position={'relative'} overflow={'hidden'} boxSizing="border-box" >
            {/* <Image as={NextImage} src={landingPageImage as any} objectFit='cover' position={'absolute'} left={0} top={0} zIndex={-1} width={'100%'} height={'100%'} /> */}
            <Box position={'absolute'} width={'100%'} height={'100%'} zIndex={-1} backgroundColor={'blue.700'}></Box>
            {/* <Box position={'absolute'} width={'100%'} height={'100%'} zIndex={-1} backgroundColor={'#29b6f6'}></Box> */}
            <Box
               borderRadius={'14px'}
               overflow={'hidden'}
               margin={'10px'}
               width={'100%'}
               height={'fit-content'}
            >
               <NavBar isOurGoalPage={true} />
            </Box>
            <Box position={'absolute'} top={'50%'} left={'50%'} transform={`translate(-50%, -50%)`} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
               <Heading fontSize={{ base: '20px', sm: '25px', md: '30px', lg: '50px' }}>
                  😊About Us😊
               </Heading>
               <Text textAlign={'center'} fontSize={'22px'} fontWeight={400} >We are just a simple group that contains three developer</Text>
            </Box >
            <Box position={'absolute'} width={'100%'} bottom={-15} left={0}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={waveColor} fill-opacity="1" d="M0,288L21.8,282.7C43.6,277,87,267,131,261.3C174.5,256,218,256,262,256C305.5,256,349,256,393,245.3C436.4,235,480,213,524,208C567.3,203,611,213,655,197.3C698.2,181,742,139,785,149.3C829.1,160,873,224,916,234.7C960,245,1004,203,1047,197.3C1090.9,192,1135,224,1178,208C1221.8,192,1265,128,1309,117.3C1352.7,107,1396,149,1418,170.7L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
            </Box>
         </Flex>
         {/* End Landing Section 1 */}
         {/* Start Landing Section 2 */}
         {/* <Heading as='h3' size={'lg'}>Our Team</Heading> */}
         <Flex flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={'40px'}>
            <Box width={'30%'} backgroundColor={bgCardColor} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={'20px 10px'} borderRadius={'20px'} border={'2px solid'} borderColor={'blue.600'}>
               <Image as={NextImage} src={salimImage as any} objectFit='cover' borderRadius='full' width={'350px'} height={'350px'} border={'2px solid'} borderColor={'blue.600'} />
               <Box p={'20px'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                  <Heading as={'h1'} marginBottom={'10px'}>Layth Alkhoury</Heading>
                  {/* <Divider /> */}
                  <Text textAlign={'center'} fontWeight={500}>Hello I am a backend Developer, I love work with people, playing music and soo many thing. get in love with backend side of application because i love to think how the data transfer and work behind the scene
                  </Text>
               </Box>
            </Box>
            <Box width={'30%'} backgroundColor={bgCardColor} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={'20px 10px'} borderRadius={'20px'} border={'2px solid'} borderColor={'blue.600'}>
               <Image as={NextImage} src={salimImage as any} objectFit='cover' borderRadius='full' width={'350px'} height={'350px'} border={'2px solid'} borderColor={'blue.600'} />
               <Box p={'20px'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                  <Heading as={'h1'} marginBottom={'10px'}>Layth Alkhoury</Heading>
                  {/* <Divider /> */}
                  <Text textAlign={'center'} fontWeight={500}>Hello I am a backend Developer, I love work with people, playing music and soo many thing. get in love with backend side of application because i love to think how the data transfer and work behind the scene
                  </Text>
               </Box>
            </Box>
            <Box width={'30%'} backgroundColor={bgCardColor} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={'20px 10px'} borderRadius={'20px'} border={'2px solid'} borderColor={'blue.600'}>
               <Image as={NextImage} src={salimImage as any} objectFit='cover' borderRadius='full' width={'350px'} height={'350px'} border={'2px solid'} borderColor={'blue.600'} />
               <Box p={'20px'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                  <Heading as={'h1'} marginBottom={'10px'}>Layth Alkhoury</Heading>
                  {/* <Divider /> */}
                  <Text textAlign={'center'} fontWeight={500}>Hello I am a backend Developer, I love work with people, playing music and soo many thing. get in love with backend side of application because i love to think how the data transfer and work behind the scene
                  </Text>
               </Box>
            </Box>

         </Flex>
         {/* End Landing Section 2 */}
         {/* Start New Section 3 */}
         <Flex height={'100vh'} position={'relative'} overflow={'hidden'} justifyContent={'center'} alignItems={'center'}>
            <Box width={'100%'} position={'absolute'} top={0} left={0} zIndex={100} >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={waveColor} fill-opacity="1" d="M0,256L24,234.7C48,213,96,171,144,160C192,149,240,171,288,181.3C336,192,384,192,432,165.3C480,139,528,85,576,80C624,75,672,117,720,128C768,139,816,117,864,101.3C912,85,960,75,1008,64C1056,53,1104,43,1152,69.3C1200,96,1248,160,1296,176C1344,192,1392,160,1416,144L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </Box>
            <Box position={'absolute'} width={'100%'} height={'100%'} zIndex={-1}>
               <Image as={NextImage} src={aboutus as any} objectFit='cover' position={'absolute'} left={0} top={0} zIndex={-1} width={'100%'} height={'100%'} objectPosition={'top'} />
            </Box>
            <Box flexBasis={'60%'} backgroundColor={cardsContainer} p={'20px'} borderRadius={'14px'} marginTop={'50px'} zIndex={10000}>
               <Heading as="h2" size="lg" mb={4} textAlign={'center'}>
                  Contact Us
               </Heading>
               <form onSubmit={handleSubmit}>
                  <Box mb={4}>
                     <Input
                        type="text"
                        placeholder="Your Name"
                        name="nameUser"
                        value={nameUser}
                        onChange={(e) => setNameUser(e.target.value)}
                     />
                  </Box>
                  <Box mb={4}>
                     <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </Box>
                  <Box mb={4}>
                     <Textarea
                        placeholder="Your Message"
                        rows={4}
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                     />
                  </Box>
                  <Button type="submit" colorScheme="blue" width={'100%'} >
                     Send
                  </Button>
               </form>
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

export default aboutUs