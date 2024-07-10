import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
  animation: ${fadeIn} 1s ease-in-out;
`;

const SuccessMessage = styled.h2`
  font-size: 2em;
  color: #4CAF50;
  margin-bottom: 20px;
  animation: ${bounce} 2s ease infinite;
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

const OrderSuccess = () => {
    const navigation = useNavigate()
    return (
        <>
            <SuccessContainer>

                <SuccessMessage>Order Successful!</SuccessMessage>

            </SuccessContainer>
            <Button onClick={() => navigation('/')} type="submit">Shop more</Button>
        </>


    );
};

export default OrderSuccess;
