import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Container = Styled.div`
   position: relative;
   min-width: 20vw;
   height: 46rem;
   background: rgba(0, 0, 0, 0.32);
   border: 1px solid rgba(0, 0, 0, 0.65);

   @media ${devices.laptop} {
      width: 40vw;
      margin: 0 auto;
   }

   @media ${devices.mobile} {
      width: 80vw;
      margin: 0 auto;
   }
`;

export const Span = Styled.span`
   &.dishInfoName {
      font-family: 'Poppins';
      font-weight: 700;
      font-size: 2.3rem;
      color: ${({theme}) => theme.TEXT_COLORS.FAINT_GRAY};
      position: absolute;
      top: 18rem;
   }

   &.dishPrice {
      font-size: 3.2rem;
      color: ${({theme}) => theme.TEXT_COLORS.FAINT_BLUE};
   }

`;

export const Section = Styled.section`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.6rem;
   padding: 3rem 4rem;
   border-radius: 0.8rem;
   cursor: pointer;

   & .dishImage {
      width: 13rem;
      height: 13rem;
      border-radius: 50%;
      background-size: cover;
   }

   & .dishDescription {
      font-family: 'Roboto';
      font-size: 1.4rem;
      margin-top: 4rem;
      text-align: center;
      color: ${({theme}) => theme.TEXT_COLORS.GRAY_PRIMARY};
   }

   &:hover {
      transition-delay: 0.1s;
      opacity: 0.7;
   }
`;

export const IncludeDishContainer = Styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1.2rem;
   color: ${({theme}) => theme.TEXT_COLORS.GRAY_PRIMARY};

   & .minusAndPlusButton {
      display: flex;
      align-items: center;
      width: 3rem;
   }

   & .dishAmount {
      font-weight: 700;
      font-size: 2rem;
   }

   & .addButton {
      width: 8rem;
   }
`;

export const ButtonsContainer = Styled.div`
   display: flex;
   align-items: center;
   justify-content: end;

   & .buttons {
      display: flex;
      padding: 1.6rem 1.6rem 0 0;
      justify-content: end;
      width: 5rem;
      cursor: pointer;
   }
`;

export const ItemButton = Styled.button`
   background: none;
   border: none;
   cursor: pointer;

   &:focus {
      transition-delay: 0.1s;
      opacity: 0.7;
   }
`