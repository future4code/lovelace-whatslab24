import styled from "styled-components";

export const TeacherItem = styled.li`
  /* border: 1px solid black; */
margin-left:34%;
  padding: 16px;
  margin-right:34%;

  display: flex;
  justify-content: flex-start;
  background-color: bisque;

  span:nth-child(2) {
    color: black;

    
  }
  span:nth-child(1) {
    color: black;
    font-weight: bold;

    
  }

  span:nth-child(3) {
    :hover {
      cursor: pointer;
      
    }
  }
`;
