import React from "react";
import styled from "styled-components";

interface Props{
  onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void;
}
const AddItem:React.FC<Props> = (props) => {
  const {onClick} = props;
  return (
    <StyledAddItem onClick={onClick}>
      <div>Add Item</div>
    </StyledAddItem>
  );
}; 

const StyledAddItem = styled.button`
  display: flex;
  height: 100%;
  width: 100%;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin:10px 0;
  padding: 12px 30px;
  border: dashed 1px #4eb7f5;
  background-color: rgba(255, 255, 255, 0.48);
  border-radius: 8px;
  &:hover {
      background-color: #daeffe;
    }
  div {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #6db4f0;
   
  }
`;

export default AddItem;
