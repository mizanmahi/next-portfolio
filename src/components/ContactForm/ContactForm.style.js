import styled from 'styled-components';

export const Form = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   & input,
   & textarea {
      width: 90%;
      height: 40px;
      background: #212d45;
      border: none;
      outline: none;
      padding: 0.2rem 1rem;
      margin-bottom: 2rem;
   }
   & textarea {
      height: 100px;
   }
`;
