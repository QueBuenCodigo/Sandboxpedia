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
  const [isVisiblePost, setIsVisiblePost] = useState(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);
  const [type, setType] = useState("")
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [uid, setUid] = useState("");
  const [id, setId] = useState("");

  const clearState = () => {
    setName("");
    setPass("");
    setEmail("");
  };

  useEffect(() => {
    (async () => {
      const accounts = (await db.collection('users').get()).docs
        .map(account => ({ id: account.id, ...account.data() }));
      setAccounts(accounts);
    })();
  }, []);

  const update = async (account) => {
    const { name, pass, email, rol } = account;
    try {
      const response = await axios.put("api/users", {
        user: {
          name: name,
          password: pass,
          email: email
        },
        uid: uid
      }
      );
      if (await response.status === 200) {
        alert('La cuenta ha sido actualizada exitosamente');
      }
    } catch (error) {
      alert('Hubo un fallo al actualizar la cuenta, verifique que los valores sean correctos');
    }

    db.collection('users').doc(id).update({
      "name": name,
      "email": email,
      "rol": rol
    })
    const oldAccounts = [...accounts];
    const newAccounts = oldAccounts.map(account => {
      if (account.id === id) {
        account.name = name;
        account.email = email;
        return account;
      }
    })
    setAccounts(newAccounts);
    clearState();
    setIsVisibleUpdate(false);
  }

  const deleteUser = async (account, index) => {
    const { uid, id } = account;
    console.log(account);
    try {
      const response = await axios.delete(`api/users?id=${uid}`);
      if (await response.status === 200) {
        alert('La cuenta ha sido eliminada exitosamente');
      }
    } catch (error) {
      alert('Hubo un fallo al eliminar la cuenta');
    }

    db.collection("users").doc(id).delete()
    const newAccounts = [...accounts];
    newAccounts.splice(index, 1);
    setAccounts(newAccounts);
    clearState();
  }

  const submit = async () => {
    const account = {
      name: name,
      pass: pass,
      email: email,
      rol: rol
    };
    try {
      const response = await axios.post("/api/users", {
        user: {
          name: name,
          password: pass,
          email: email
        }
      });
      if (await response.status === 200) {
        alert('La cuenta ha sido creada exitosamente');
        account.uid = response.data.uid;
      }
    } catch (error) {
      alert('Hubo un fallo al crear la cuenta, verifique que los valores sean correctos');
    }
    delete account.pass;
    const userRef = db.collection('users').doc();
    userRef.set(account);
    account.id = userRef.id;
    const newAccounts = [...accounts];
    newAccounts.push(account);
    setAccounts(newAccounts);

    clearState();
    setIsVisiblePost(false);
  };

  const closeModal = () => {

  };

  return (
    <AccountsWrapper>
      <StyledTitle>Cuentas</StyledTitle>
      <AddItem onClick={() => {
        setType("post");
        setIsVisiblePost(true)
      }} />
      {accounts.map((account, index) => (
        <AccountListItem
          key={account.email}
          name={account.name}
          email={account.email}
          updateusr={() => {
            setName(account.name);
            setPass(account.pass);
            setEmail(account.email);
            setUid(account.uid);
            setId(account.id);
            setRol(account.rol);
            setIsVisibleUpdate(true);
            setType("update");

          }}
          deleteusr={() => deleteUser(account, index)}
        />
      ))}

      <Modal
        title="Crear cuenta"
        visible={isVisiblePost}
        onCancel={() => {
          setIsVisiblePost(false);
          clearState();
        }}
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
        <Select
          onChange={(e) => setRol(e.currentTarget.value)}
          value={rol}>
          <option value="0">Selecciona un rol</option>
          <option value="ADMIN">Administrador</option>
          <option value="SELLER">Vendedor</option>
        </Select>
      </Modal>

      <Modal
        title="Editar cuenta"
        visible={isVisibleUpdate}
        onCancel={() => {
          setIsVisibleUpdate(false);
          clearState();
        }}
        onSubmit={() => update({
          name: name,
          pass: pass,
          email: email,
          rol: rol
        })}
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
        <Select
          onChange={(e) => setRol(e.currentTarget.value)}
          value={rol}>
          <option value="0">Selecciona un rol</option>
          <option value="ADMIN">Administrador</option>
          <option value="SELLER">Vendedor</option>
        </Select>

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

const Select = styled.select`
  width: 98%;
  margin: 10px 0;
  font-size: 16px;
  padding-left: 8px;
  height: 27px;

  border: solid 1px #c1e4fe;
  border-radius: 8px;

  outline-color: #3899ec;
`;


export default Accounts;
