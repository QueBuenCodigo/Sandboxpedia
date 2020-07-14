import React from "react";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  name: string;
  email: string;
  onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void;
  updateusr?:(event: React.MouseEvent<HTMLButtonElement>)=>void;
  deleteusr?:(event: React.MouseEvent<HTMLButtonElement>)=>void;
}

const AccountListItem: React.FC<Props> = (props) => {
  const { name, email, updateusr, deleteusr } = props;
  return (
    <ContainerItems>
      <StyledAccountItem>
        <img
          src="https://w7.pngwing.com/pngs/858/581/png-transparent-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service-logo.png"
          alt="user"
        />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </StyledAccountItem>
        
      <ButtonOptions>
        <button onClick={updateusr}><FiEdit width="20px" height="20px" /><span>Editar</span></button>
        <button onClick={deleteusr}><RiDeleteBin6Line width="20px" height="20px" /> <span>Eliminar</span></button>
      </ButtonOptions>
    </ContainerItems>
  );
};

const StyledAccountItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 10px 0px 10px 30px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    object-fit: cover;
  }

  div {
    flex-direction: column;
    margin-left: 15px;
    p {
      color: #6db4f0;
      &:nth-child(1) {
        font-size: 20px;
        font-weight: 800;
        margin: 0;
      }
      &:nth-child(2) {
        font-size: 14px;
        margin: 0;
      }
    }
  }
`;

const ButtonOptions = styled.div`
  display: flex;
  margin:10px;
  button{
    border: solid 1px #6db4f0;
    border-radius: 50px;
    padding: 10px 15px;
    display: flex;
    color: #6db4f0;
    cursor: pointer;
      &:nth-child(1){
        margin-right: 10px;
      }
  }
  button:hover{
    background-color: rgba(56,153,236,0.6);
    color: #fff;
  }
  span{
    margin-left: 10px;
  }
`;

const ContainerItems = styled.div`
  display: flex;
`;

export default AccountListItem;
