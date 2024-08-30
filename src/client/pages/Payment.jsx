import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(45deg, #ff8e53 30%, #fe6b8b 90%);
  }
`;

const Payment = () => {
  // Sample data for demo purposes
  const sampleDietItems = [
    { name: "Item 1", price: 100, quantity: 2 },
    { name: "Item 2", price: 150, quantity: 1 },
  ];

  const sampleCartTotal = 250; // Example total from other items in the cart

  const dietItemsTotal = sampleDietItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalAmount = sampleCartTotal + dietItemsTotal;
  const [amount, setAmount] = useState(totalAmount);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Proceeding with payment of amount: ₹${amount}`);
    // Razorpay integration code would go here
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Proceed Payment</Title>
        <Input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(totalAmount)}
        />
        <Button type="submit">Pay Now</Button>
      </Form>
    </Container>
  );
};

export default Payment;
