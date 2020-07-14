import React from "react";
import styled from "styled-components"

interface Props {
  variant?: string;
  className?:string;
  onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void;
}

const BCButton: React.FC<Props> = (props) => {
  const { variant, className, onClick } = props;
  return <Button onClick={onClick} className={className}>{props.children}</Button>;
};

const Button = styled.button`
    background:none;
    border:0;
    cursor:pointer;
    outline:0;
`;

export default BCButton;
