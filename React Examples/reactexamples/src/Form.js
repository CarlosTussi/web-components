import { useState } from "react";
import { validateEmail } from "./utils";

function Form()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState({
        value: "",
        isTouched: false
    });
    const [role, setRole]= useState("");


    const PasswordErrorMessage = () => {
        return (
          <p className="FieldError">Password should have at least 8 characters</p>
        );
      };


      const getIsFormValid = () => {        
        if(firstName && 
            email && 
            validateEmail(email) && 
            password.value.length >=8 &&
            (role == "individual") || (role == "business"))
            {
                return true;
            }
        else return false;

      };
    
      const clearForm = () => {
       setFirstName("");
       setLastName("");
       setEmail("");
       setPassword({
        value: "",
        isTouched: false
       });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
      };


    return (
    <div className="Form">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Sign Up</h2>
        <div className="Field">
          <label>
            First name <sup>*</sup>
          </label>
          <input 
           required 
           type="text" 
           value={firstName} 
           onChange={(e)=> setFirstName(e.target.value)} 
           placeholder="First name" />
        </div>
        <div className="Field">
          <label>Last name</label>
          <input 
           required 
           type="text"
           value={lastName}
           onChange={(e)=> setLastName(e.target.value)}
           placeholder="Last name" />
        </div>
        <div className="Field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input
           required
           type="email" 
           value={email} 
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Email address" />
        </div>
        <div className="Field">
          <label>
            Password <sup>*</sup>
          </label>
          <input
           type="password"
           placeholder="Password"
           value={password.value}
           onChange ={(e) => setPassword({
            ...password,
            value: e.target.value,
           })}
           onBlur ={(e) => setPassword({
            ...password,
            isTouched: true
           })}
           required />
        {(password.value.length <= 8 && password.isTouched) ? PasswordErrorMessage()  : null}
        </div>
        <div className="Field">
          <label>
            Role <sup>*</sup>
          </label>    
          <select 
            value={role} 
            required
            onChange={(e) => setRole(e.target.value)}>
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button 
            type="submit" 
            disabled={!getIsFormValid()}
            onClick={handleSubmit}>
          Create account
        </button>
      </fieldset>
    </form>
  </div>
  );
}

export default Form;