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
  Checkbox,
  CheckboxGroup

} from '@chakra-ui/react';

function App() {

  
  /*

  */

  return (
    <Box h="100vh">
      <Center as="header" h={150} fontSize={{ base: '25px', md:'25px' , lg:'35px' }}  
      bg="#87388C"  color="white" fontWeight="bold"    pb="8" 
      >
        Cadastro de Motoboys
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(185vh - 150px)"
      >
        <Center
          w="100%"
          maxW={{base:'500', md:'800', lg:'800'}}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p={6}
          boxShadow="0 1px 2px #ccc"
          
        >
          
          <FormControl  display={{ md:"flex" }} flexDir="column" gap="4.5">
            <FormLabel fontSize="xl">Informações Pessoais</FormLabel>
            <HStack spacing="4" display={{ md: 'flex' }}>
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="65%">
              <FormLabel htmlFor="email">e-mail</FormLabel>
                <Input id="email" type="email"/>
              </Box>
            </HStack>
            <HStack spacing="4"  display={{ md: 'flex' }}>
              <Box w="25%">
                <FormLabel htmlFor="date">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date"/>
              </Box>
              <Box w="50%">
              <FormLabel htmlFor="email">Naturalidade</FormLabel>
                <Input id="email" type="email"/>
              </Box>
              <Box w="35%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input id="cel" type="number"/>
              </Box>
              <Box w="35%">
              <FormLabel htmlFor="tel">Telefone</FormLabel>
                <Input id="tel" type="number"/>
              </Box>
            </HStack>
           
            <HStack spacing="4"  display={{ md: 'flex' }}>
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="50%">
              <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
              <Box w="30%">
                <FormLabel htmlFor="estado">Estado</FormLabel>
                <Input id="estado" />
              </Box>
            </HStack>
            <HStack spacing="4"  display={{ md: 'flex' }}>
              <Box w="50%">
              <FormLabel htmlFor="cidade">Cidade de Atuação</FormLabel>
                <Input id="cidade" />
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="estado">Estado de Atuação</FormLabel>
                <Input id="estado" />
              </Box>
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
            <br/>
            <FormLabel fontSize="xl">Dados veiculares</FormLabel>
            <HStack spacing="4"  display={{ md: 'flex' }}>
              <Box w="100%">
                <FormLabel htmlFor="modelo-moto">Modelo da Moto</FormLabel>
                <Input id="modelo-moto" type="number"/>
              </Box>
              <Box w="50%">
              <FormLabel htmlFor="ano-moto">Ano</FormLabel>
                <Input id="ano-moto" />
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="placa-moto">Placa da Moto</FormLabel>
                <Input id="placa-moto" />
              </Box>
              <Box w="100%">
              <FormLabel htmlFor="cnh">CNH</FormLabel>
                <Input id="cnh" />
              </Box>
            </HStack>
            <br/>
            <FormLabel fontSize="xl">Dados Bancários</FormLabel>
            <HStack  display={{ md: 'flex' }}>
              <Box w="100%">
               
                  <FormLabel htmlFor="Banco">Banco</FormLabel>
                    <Input id="Banco"></Input>
              </Box>
              <Box w="100%">
                  <FormLabel htmlFor="agência">Agência</FormLabel>
                    <Input id="agência"></Input>
              </Box>
              <Box w="100%">
                  <FormLabel htmlFor="conta">Conta</FormLabel>
                    <Input id="conta"></Input>
              </Box>
             
            </HStack>
            <br/>
            <Checkbox defaultChecked>Compreendo que a YouPOP tratará minhas informações com sigilo, segurança e responsabilidade</Checkbox>
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
