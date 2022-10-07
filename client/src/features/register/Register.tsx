import axios from "axios";

const Register = () => {
  const handleSubmitRegister = async (event: any) => {
    try {
        event.preventDefault();
      const [email, password, rePassword] = [
        event.target.elements.email.value,
        event.target.elements.password.value,
        event.target.elements.rePassword.value
      ];
      const { data } = await axios.post("/users/is-exist", {email, password,rePassword});
      if(!data) throw new Error("no data from /users/is-exist")
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitRegister}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email:"
        />
        <input type="password" name="password" id="password" placeholder="Enter your Password"/>
        <input type="password" name="rePassword" id="rePassword" placeholder="Confirm Password"/>
        <button type="submit">LOL</button>
      </form>
    </div>
  );
};

export default Register;
