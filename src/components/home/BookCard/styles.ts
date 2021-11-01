import styled from 'styled-components';

export const CardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  min-width: 250px;
  max-width: 300px;
  width: 100%;
  height: 160px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
`;

export const Cover = styled.img`
  width: 81px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Heebo';
  margin-left: 16px;
`;

export const Title = styled.h5`
  font-size: 14px;
`;

export const Authors = styled.p`
  font-size: 12px;
  color: #ab2680;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #999999;
`;
