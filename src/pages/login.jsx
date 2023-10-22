import { useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import FirebaseContext from "../context/firebase";

export default function Login() {
  const navigate = useNavigate();
  const {firebase} = useContext(FirebaseContext);

  const [emailAddress,setEmailAddress] = useState('');
  const [password,setPassword] = useState('');

  const [error,setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram'
  }, [])

  return (
    <div>
      <h1>I am th login page</h1>
    </div>
  )
}
