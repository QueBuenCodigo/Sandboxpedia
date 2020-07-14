import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import FieldFormItem from "../../BCField";

const Signup = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    tos: false,
  };

  const validationSchema = yup.object({
    name: yup.string().required("Escribe tu nombre completo."),
    email: yup
      .string()
      .email("Revisa qué tu correo esté bien escrito")
      .required("Falta el correo electrónico."),
    password: yup.string().required("Debes agregar una contraseña."),
    passwordConfirmation: yup
      .string()
      .required("Debes agregar una contraseña.")
      .oneOf(
        [yup.ref("password"), ""],
        "Las contraseñas proporcionadas no coinciden."
      ),
    tos: yup
      .boolean()
      .oneOf(
        [true],
        "Debes aceptar los términos de servicio y política de privacidad para usar la aplicación."
      ),
  });

  return (
    <LoginWithEmail>
      <Formik
        validateOnChange
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {}}
      >
        {({ errors, touched }) => (
          <GridForm>
            <LoginInput
              name="name"
              placeholder="Nombre completo"
              label="Nombre completo"
            />
            <LoginInput
              name="email"
              placeholder="Correo electrónico"
              label="Correo electrónico"
            />
            <LoginInput
              type="password"
              placeholder="Contraseña"
              name="password"
              label="Contraseña"
            />
            <LoginInput
              type="password"
              name="passwordConfirmation"
              placeholder="Confirma tu contraseña"
              label="Confirma tu contraseña"
            />
            <FieldFormItem
              type="checkbox"
              name="tos"
              label="Acepto Términos de Servicio y Política de Privacidad"
            />

            <LoginButton>Crear mi cuenta</LoginButton>
          </GridForm>
        )}
      </Formik>
    </LoginWithEmail>
  );
};

const GridForm = styled(Form)`
  display: grid;
  gap: 16px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #d3d3d3;
  border: none;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: 13px;
  padding: 8px 0.8em 6px 0.8em;
  text-decoration: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  &:active {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -o-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  svg {
    margin-right: 0.5em;
    vertical-align: middle;
  }
`;

const LoginWithEmail = styled.div`
  padding: 16px 10px 24px;
  @media only screen and (min-width: 48em) {
    padding: 24px 40px 24px;
  }
  @media only screen and (min-width: 64em) {
    padding: 24px 32px 24px;
  }
`;

const LoginInput = styled(FieldFormItem)`
  margin: 0;
  text-align: left;
  input {
    padding: 15px 12px;
    border-radius: 0.25rem;
  }
`;

const LoginButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 14px 0;
  font-weight: bold;
  font-size: 1rem;
  background: -webkit-linear-gradient(
    right,
    #95ca3e 0%,
    #95ca3e 50%,
    #85c638 100%
  );
  background: -moz-linear-gradient(
    right,
    #95ca3e 0%,
    #95ca3e 50%,
    #85c638 100%
  );
  background: -o-linear-gradient(right, #95ca3e 0%, #95ca3e 50%, #85c638 100%);
  background: -ms-linear-gradient(right, #95ca3e 0%, #95ca3e 50%, #85c638 100%);
  background: linear-gradient(to left, #95ca3e 0%, #95ca3e 50%, #85c638 100%);
  -webkit-box-shadow: 0 1px 1px 0 #58902d;
  box-shadow: 0 1px 1px 0 #58902d;
  &:hover {
    -webkit-box-shadow: 0 2px 13px 0 rgba(88, 144, 45, 0.49);
    box-shadow: 0 2px 13px 0 rgba(88, 144, 45, 0.49);
    color: #fff;
  }
`;

export default Signup;
