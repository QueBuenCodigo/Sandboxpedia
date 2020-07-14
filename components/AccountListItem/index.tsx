import React from "react";
import styled from "styled-components";

interface Props{
  name: string;
  email: string;
}

const AccountListItem: React.FC<Props> = (props) => {
  const {name, email} = props;
  return (
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

export default AccountListItem;
