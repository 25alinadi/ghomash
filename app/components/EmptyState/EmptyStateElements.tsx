import styled from 'styled-components';

export const EmptyStateDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  text-align: center;
`

export const EmptyStateH4 = styled.h4``

export const EmptyStateImg = styled.img`
  width: 350px;
  height: 100%;
  @media (max-width: 768px) {
    width: 150px;
  }
`