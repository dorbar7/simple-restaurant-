import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import "./Login.css";

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            notifyService.success("Welcome Back!");
            navigate("/home");
        }
        catch(err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="Login Box">

            <form onSubmit={handleSubmit(send)}>

                <h2>Login</h2>

                <label>Username: </label>
                <input type="text" {...register("username")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button>Login</button>

            </form>

        </div>
    );
}

export default Login;
