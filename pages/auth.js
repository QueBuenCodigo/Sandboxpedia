import React,{useState} from "react"
import FirebaseAuth from "../components/BCFirebaseAuth";
import initFirebase from "../utils/auth/initFirebase";
import Toast from "../components/Toast"
initFirebase();
const Auth = () => {
  const [toastList,setToastList] = useState([]);

  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: () => {},
      lostPasswordSuccess: ()=>{
        const toast = {
          title:"Correo enviado",
          description: "Un enlace para restablecer tu contraseña ha sido enviado a tu correo electrónico.",
          variant:"success"
        }
        setToastList(list=>[...list,toast]);
      },
      signInErrorWithErrorMessage: (errorMessage) => {
        const toast = {
          title:"Error",
          description: errorMessage,
          variant:"error"
        }
        setToastList(list=>[...list,toast]);
      },
    },
  };
  return (
    <div>
      <p>Sign in</p>
      <div>
        <Toast toastList={toastList} autoDelete />
        <FirebaseAuth uiConfig={uiConfig} />
      </div>
    </div>
  );
};

export default Auth;
