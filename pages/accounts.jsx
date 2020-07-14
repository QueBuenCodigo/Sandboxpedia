import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import AccountListItem from "../components/AccountListItem";
import Modal from "../components/Modal";
import styled from "styled-components";
import axios from "axios";
import initFirebase from "../utils/auth/initFirebase";
import firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();
const db = firebase.firestore();

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const clearState = () => {
    setName("");
    setPass("");
    setEmail("");
  };

  const signUp = async () => {
    try {
      await axios.post("/api/users", {user:{
        name: name,
        password: pass,
        email: email
      }});
    } catch (error) {}
  };

  useEffect(()=>{
    (async () => {
        const accounts = (await db.collection('users').get()).docs
        .map(account => ({...account.data()}));
        setAccounts(accounts);
    })();
  },[])

  const submit = () => {
    const account = {
      name: name,
      pass: pass,
      email: email,
    };
    db.collection('users').add(account);
    const newAccounts = [...accounts];
    newAccounts.push(account);
    setAccounts(newAccounts);
    signUp();
    clearState();
    setIsVisible(false);
    console.log()
  };

  const closeModal = () => {
    setIsVisible(false);
    clearState();
  };

  return (
    <AccountsWrapper>
      <StyledTitle>Cuentas</StyledTitle>
      <AddItem onClick={() => setIsVisible(true)} />
      {accounts.map((account) => (
        <AccountListItem
          key={account.email}
          name={account.name}
          email={account.email}
        />
      ))}

      <Modal
        title="Crear cuenta"
        visible={isVisible}
        onCancel={closeModal}
        onSubmit={submit}
      >
        <Input
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
          placeholder="Nombre"
        />
        <Input
          type="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          placeholder="Email"
        />
        <Input
          type="password"
          onChange={(e) => setPass(e.currentTarget.value)}
          value={pass}
          placeholder="Contraseña"
        />
      </Modal>
    </AccountsWrapper>
  );
};

const AccountsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const StyledTitle = styled.h1`
  margin: 10px 0;
  color: #6db4f0;
`;

const Input = styled.input`
  width: 98%;
  margin: 10px 0;
  font-size: 16px;
  padding-left: 8px;
  height: 27px;

  border: solid 1px #c1e4fe;
  border-radius: 8px;

  outline-color: #3899ec;
  ::placeholder {
    font-size: 14px;
  }
`;

export default Accounts;
