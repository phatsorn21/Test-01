import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../../shared/hooks/useLogin";
import { useAuth } from "../../../../shared/hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUserRole } = useAuth();
  const { login } = useLogin();

  const handleSubmitForm = async () => {
    await login({ email: email, password: password }).then((response) => {
      localStorage.setItem("token", response.data.token);
      setUserRole(response.data.data.role)
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    // <section className=" flex flex-col w-screen h-screen justify-center gap-3 items-center bg-blue">
    //   <div className=" text-[42px]">Login Page</div>
    //   <input
    //     className=" w-[200px] bg-white text-black-300 border-black border"
    //     type="text"
    //     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    //       setEmail(e.target.value)
    //     }
    //   />
    //   <input
    //     className=" w-[200px] bg-white text-black-300 border-black border"
    //     type="text"
    //     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    //       setPassword(e.target.value)
    //     }
    //   />
    //   <button onClick={() => handleSubmitForm()}>Login</button>
    // </section>
    <section className="flex flex-col w-screen h-screen justify-center gap-4 items-center bg-blue-500">
      <div className="text-[42px] text-white font-bold">Login Page</div>

      <input
        className="w-[250px] px-4 py-2 rounded-md bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        type="text"
        placeholder="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <input
        className="w-[250px] px-4 py-2 rounded-md bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        type="password"
        placeholder="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={handleSubmitForm}
        className="w-[250px] py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition duration-200"
      >
        Login
      </button>
    </section>

  );
};
export default LoginPage;
