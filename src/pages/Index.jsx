import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaGlobe, FaCommentDots } from "react-icons/fa";

const articles = [
  {
    title: "Market Hits Record High",
    summary: "The stock market reached an all-time high today, driven by strong earnings reports.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Global Economic Outlook",
    summary: "Experts predict a steady recovery in the global economy over the next year.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Opinion: The Future of Finance",
    summary: "An in-depth look at how technology is shaping the future of the financial industry.",
    image: "https://via.placeholder.com/150",
  },
];

const financialData = [
  { name: "S&P 500", value: "4,500.50", change: "+0.5%" },
  { name: "Dow Jones", value: "35,000.75", change: "-0.2%" },
  { name: "NASDAQ", value: "14,000.25", change: "+1.2%" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="/" fontSize="xl" fontWeight="bold">
            Financial Times
          </Link>
          <HStack spacing={4}>
            <Link href="/"><FaHome /> Home</Link>
            <Link href="/markets"><FaChartLine /> Markets</Link>
            <Link href="/world"><FaGlobe /> World</Link>
            <Link href="/opinion"><FaCommentDots /> Opinion</Link>
          </HStack>
        </HStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
        <Box as="main" colSpan={{ base: 1, md: 2 }}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          {articles.map((article, index) => (
            <Box key={index} mb={6}>
              <Image src={article.image} alt={article.title} mb={4} />
              <Heading as="h3" size="md">{article.title}</Heading>
              <Text>{article.summary}</Text>
            </Box>
          ))}
        </Box>

        <Box as="aside" colSpan={{ base: 1, md: 1 }} bg="gray.100" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>Financial Data</Heading>
          {financialData.map((data, index) => (
            <Box key={index} mb={4}>
              <Text fontWeight="bold">{data.name}</Text>
              <Text>{data.value} <Text as="span" color={data.change.startsWith('+') ? 'green.500' : 'red.500'}>{data.change}</Text></Text>
            </Box>
          ))}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;