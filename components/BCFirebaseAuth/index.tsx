import React,{useState} from 'react'
import Login from './Login';
import Signup from "./Signup";
import LostPassword from "./LostPassword";

interface Callbacks{
    signInSuccessWithAuthResult:()=>void;
    signInErrorWithErrorMessage:(errorMessage:string)=>void;
    lostPasswordSuccess: ()=>void;
}

interface UIConfig{
    callbacks:Callbacks
}

interface Props{
    uiConfig:UIConfig
}

export enum Step{
    login="login",
    lostPassword="lost-password",
    signup="signup"
}

const BCFirebaseAuth:React.FC<Props> = (props) => {
    const {uiConfig:{callbacks:{signInSuccessWithAuthResult,signInErrorWithErrorMessage,lostPasswordSuccess}}} = props;
    const [step,setStep] = useState("login");

    const goTo = (step:Step) =>{
        setStep(step);
    }

    return (
        <>
        {step === "login" && <Login signInSuccessWithAuthResult={signInSuccessWithAuthResult} signInErrorWithErrorMessage={signInErrorWithErrorMessage} goTo={goTo} />}
        {step === "signup" && <Signup goTo={goTo}/>}
        {step === "lost-password" && <LostPassword goTo={goTo} lostPasswordSuccess={lostPasswordSuccess} signInErrorWithErrorMessage={signInErrorWithErrorMessage} />}
        </>
    )
}

export default BCFirebaseAuth
