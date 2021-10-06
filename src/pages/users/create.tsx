import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from '../../components/Form/Input'


export default function UserCreate() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px='6' >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
          <Heading size="lg" fontWeight="normal" >
            Criar usuário
          </Heading>          
          <Divider />

          <VStack>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" />
              <Input name="p" label="E-mail" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack>
              <Button colorScheme="whiteAlpha" >Cancelar</Button>
              <Button colorScheme="pink" >Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}