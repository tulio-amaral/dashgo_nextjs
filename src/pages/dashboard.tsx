import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-10-05T14:14:00.000Z',
      '2021-10-06T14:14:00.000Z',
      '2021-10-07T14:14:00.000Z',
      '2021-10-08T14:14:00.000Z',
      '2021-10-09T14:14:00.000Z',
      '2021-10-10T14:14:00.000Z',
      '2021-10-11T14:14:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 51, 61, 109]
  }
]

export default function Dashboard() {
  return(
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bgColor="gray.800" borderRadius="8">
            <Text fontSize="lg" mb="4" >
              Inscritos da semana
            </Text>
            <Chart
              type="area"
              options={options}
              series={series}
              height={160}
              p="4" 
            />
          </Box>

          <Box p="8" bgColor="gray.800" borderRadius="8">
            <Text fontSize="lg" mb="4" >
              Taxa de abertura
            </Text>
            <Chart
              type="area"
              options={options}
              series={series}
              height={160}
              p="4" 
            />
          </Box>

        </SimpleGrid>
      </Flex>

    </Flex>
  )
}