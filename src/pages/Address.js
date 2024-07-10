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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 8px;
  }
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

const AddressForm = () => {
    const navigation = useNavigate()
  return (
    <FormContainer>
      <h2>Address Form</h2>
      <Input type="text" placeholder="Address1" />
      <Input type="text" placeholder="Address2" />
      <Input type="text" placeholder="City" />
      <Input type="text" placeholder="State" />
      <Input type="text" placeholder="Pin Code" />
      <Button onClick={()=> navigation('payment')} type="submit">Submit</Button>
    </FormContainer>
  );
};

export default AddressForm;
