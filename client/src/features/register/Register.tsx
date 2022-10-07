import axios from "axios";
import { isUserExist, register } from "../helpers";
import { useNavigate } from "react-router-dom";


const Register = () => {

  // const navigate = useNavigate();

  const handleSubmitRegister = async (event: any) => {
    try {
      event.preventDefault();
      const [email, password, confirmPassword]: Array<string> = [
        event.target.elements.email.value,
        event.target.elements.password.value,
        event.target.elements.confirmPassword.value];
      if (!email || !password || !confirmPassword) throw new Error("All fields are required");

      const isRegistered = register(email, password, confirmPassword);
      

      // TODO: check if password and rePassword match

      // const isExist = await isUserExist(email);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitRegister}>
        <input type="email" name="email" id="email" placeholder="Enter email:" />
        <input type="password" name="password" id="password" placeholder="Enter password" />
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
