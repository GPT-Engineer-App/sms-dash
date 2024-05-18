import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Container, Box, VStack, Input, Button, Text, HStack, FormControl, FormLabel, IconButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaSms, FaMoneyBillWave, FaSignOutAlt } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Text fontSize="2xl">Login</Text>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
          <Text>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

const SignupPage = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/dashboard");
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Text fontSize="2xl">Sign Up</Text>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={handleSignup}>
            Sign Up
          </Button>
          <Text>
            Already have an account? <Link to="/login">Login</Link>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Container maxW="container.xl">
      <HStack spacing={4} justifyContent="space-between" py={4}>
        <Text fontSize="2xl">Bulk SMS Dashboard</Text>
        <Button leftIcon={<FaSignOutAlt />} colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </HStack>
      <HStack spacing={4} py={4}>
        <Button leftIcon={<FaSms />} colorScheme="teal" onClick={() => navigate("/send-sms")}>
          Send SMS
        </Button>
        <Button leftIcon={<FaMoneyBillWave />} colorScheme="teal" onClick={() => navigate("/billing")}>
          Billing
        </Button>
      </HStack>
      <Routes>
        <Route path="/send-sms" element={<SendSMS />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Container>
  );
};

const SendSMS = () => {
  const [message, setMessage] = useState("");
  const [recipients, setRecipients] = useState("");

  const handleSend = () => {
    // Logic to send SMS
    alert("SMS Sent!");
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Text fontSize="2xl">Send SMS</Text>
          <FormControl id="recipients">
            <FormLabel>Recipients</FormLabel>
            <Input type="text" value={recipients} onChange={(e) => setRecipients(e.target.value)} placeholder="Enter phone numbers separated by commas" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
          </FormControl>
          <Button leftIcon={<FaSms />} colorScheme="teal" onClick={handleSend}>
            Send
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

const Billing = () => {
  return (
    <Container centerContent>
      <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Text fontSize="2xl">Billing Details</Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>2023-10-01</Td>
                <Td>$10.00</Td>
                <Td>SMS Package</Td>
              </Tr>
              <Tr>
                <Td>2023-09-01</Td>
                <Td>$10.00</Td>
                <Td>SMS Package</Td>
              </Tr>
            </Tbody>
          </Table>
        </VStack>
      </Box>
    </Container>
  );
};

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Index;
