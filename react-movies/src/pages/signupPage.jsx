import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = () => {

const context = useContext(AuthContext)

 const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const register = async () => {
  setUserNameError("");
    setPasswordError("");

   // check username for validation
    if (userName.trim().length < 3) {
      setUserNameError("Username must be at least 3 characters long");
      return;
    }


    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);


     if (!validPassword) {
      setPasswordError(
        "Password must contain uppercase, lowercase, number, symbol and be at least 8 characters"
      );
      return;
    }

    // if "password" don't match "password again"
    if (password !== passwordAgain) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Register user
    let result = await context.register(userName, password);

    if (result) {
      setRegistered(true);
    } else {
      setUserNameError("Username already exists");
    }
  };


  if (registered === true) {
    return <Navigate to="/login" replace />;
  }




  return (
    <>
      <h2>SignUp page</h2>
       <p>
         Usernames must be unique. Passwords must have:
       </p>

      <ul>
        <li style={{ color: "green"}}>At Least <b>8 Characters</b></li>
         <li style={{ color: "purple"}}>One <b>Uppercase Letter</b></li>
          <li style={{ color: "green"}}>One <b>Lowercase Letter</b></li>
          <li style={{ color: "purple"}}>One <b>Number</b></li>
           <li style={{ color: "green"}}>One <b>Symbol</b></li>
      </ul>



        <input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      {userNameError && <p style={{ color: "red", fontWeight: "bold"}}>{userNameError}</p>}

      <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
           {passwordError && <p style={{ color: "salmon", fontWeight: "bold" }}>{passwordError}</p>}

      {/* Login web form  */}
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;


