import { ChakraProvider, Box, Flex, theme } from "@chakra-ui/react";

function ChakraUI()
{
    return(
    <ChakraProvider theme={theme}>
        <Flex direction="column">
            <Box>My Box</Box>
            <Box>My Other Box</Box>
            <Box maxW="500px" mx="auto"/>
        </Flex>
    </ChakraProvider>
    );

}

export default ChakraUI;