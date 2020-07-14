import React from "react";
import { useField } from "formik";
import styled from "styled-components";

interface Props {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}
const BCField: React.FC<Props> = (props) => {
  const { type, label, placeholder } = props;
  const [field, meta] = useField(props);
  return (
    <>
      {type !== "checkbox" && (
        <FormItem>
          <InputLabel className="form__label">
            <Input
              type={type}
              className="form__field"
              placeholder={placeholder}
              {...field}
            />
            <span>{label}</span>
          </InputLabel>
        </FormItem>
      )}
      {type === "checkbox" && (
        <CheckboxLabel>
         
          <Checkbox type={type} {...field} />
          <Checkmark />
          {label}
        </CheckboxLabel>
      )}
    </>
  );
};

const FormItem = styled.div`
  font-family: "Lato", sans-serif;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
`;

const InputLabel = styled.label`
  span {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }
`;

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #000000;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ span {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus ~ span {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const CheckboxLabel = styled.label`
position:relative;
  font-weight:300;
  font-family: "Lato", sans-serif;
  text-align: left;
  padding-left: 35px;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover input ~ span {
    background-color: #ccc;
  }
  & input:checked ~ span {
    background-color: #2196f3;
  }
  & input:checked ~ span:after {
    display: block;
  }
  & span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  input:checked ~ span:after {
    display: block;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export default BCField;
