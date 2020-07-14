import React from "react";
import styled from "styled-components";

interface Props {
  visible: boolean;
  title: string;
  onCancel?: (event: React.MouseEvent<HTMLButtonElement>)=>void;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>)=>void;
}

const Modal: React.FC<Props> = (props) => {
  const { children, visible, title, onCancel, onSubmit } = props;

  return (
    <NewModal visible={visible}>
      <ModalBody>
        <div>
          <p>{title}</p>
          <button onClick={onCancel}>X</button>
        </div>
        <div>{children}</div>
        <div>
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onSubmit}>Guardar</button>
        </div>
        </ModalBody>
    </NewModal>
  );
};

interface NewModalProps {
  visible: boolean;
}

const NewModal = styled.div<NewModalProps>`
  display: ${({ visible }) => (visible ? `block` : `none`)};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

`;

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 51.7%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  div{
    

    &:nth-child(1){
      display: flex;
      flex-direction:row;
      height: 40px;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      border-bottom: solid 1px #f0f0f0;
      border-radius: 8px 8px 0 0;
      background-color: #3899EC;

      p{
        color: white;
        font-size: 24px
      }

      button{
        border: none;
        border-radius: 50%;
        color: white;
        background-color: #307FC3;
        outline: none;
        cursor: pointer;
      }
    }

    &:nth-child(2){
      padding: 12px;
      display:flex;
      flex-direction: column;
      justify-content: center;
    }

    &:nth-child(3){
      display: flex;
      flex-direction:row;
      height: 30px;
      justify-content: flex-end;
      padding: 0 10px;
      margin-bottom: 10px;

      button{
        border: none;
        border-radius: 20px;
        outline: none;
        color: white;
        padding: 0 20px;
        cursor: pointer;
        &:nth-child(2){
          margin-left: 5px;
          background-color: #3899EC;
          &:nth-child(2):hover{
            background-color: rgba(56,153,236,0.60);
          }
        }
        &:nth-child(1){
          margin-right: 5px;
          background-color: red;
          &:nth-child(1):hover{
            background-color: rgba(255,0,0,0.60);
          }
        }
      }
    }
  }
`;

export default Modal;
