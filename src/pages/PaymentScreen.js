import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 500px;
  margin: auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const RadioButton = styled.input`
  margin: 10px 10px 10px 0;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const PaymentForm = () => {
    const navigation = useNavigate()
  return (
    <FormContainer>
      <h2>Payment Method</h2>
      <Label>
        <RadioButton type="radio" name="payment" value="cod" defaultChecked />
        Cash on Delivery
      </Label>
      <Button onClick={()=> navigation('success')} type="submit">Submit</Button>
    </FormContainer>
  );
};

export default PaymentForm;
