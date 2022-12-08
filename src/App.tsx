import {
  Flex, 
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,

} from '@chakra-ui/react';

function App() {

  
  /*

  */

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="#87388C"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Cadastro de Motoboys
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl
            display="flex"
            flexDir="column"
            gap="4"
          
          >
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome"/>
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="email">e-mail</FormLabel>
                <Input id="email" type="email"/>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="date">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date"/>
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="email">Naturalidade</FormLabel>
                <Input id="email" type="email"/>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input id="cel" type="number"/>
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="tel">Telefone</FormLabel>
                <Input id="tel" type="number"/>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="estado">Estado</FormLabel>
                <Input id="estado" />
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="cidade">Cidade de Atuação</FormLabel>
                <Input id="cidade" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                    <HStack spacing="24px"> 
                      <Radio value="Masculino">Masculino</Radio>
                      <Radio value="Feminino">Feminino</Radio>
                      <Radio value="Outro">Outro</Radio>
                    </HStack>
                </RadioGroup>
              </Box>    
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="modelo-moto">Modelo da moto</FormLabel>
                <Input id="modelo-moto" type="number"/>
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="ano-moto">Ano da Moto</FormLabel>
                <Input id="ano-moto" />
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="placa-moto">Placa da Moto</FormLabel>
                <Input id="placa-moto" />
              </Box>
            </HStack>

            <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="#E9B337"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "#87388C" }}
                >
                  Enviar
                </Button>
            </HStack>
          </FormControl>
        </Center>

      </Flex>
    </Box>
  )
}

export default App
