import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="card-left">
          <h1>Hello World.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deleniti fugit architecto unde eveniet dicta dolores excepturi
            consequuntur impedit velit!
          </p>
          <span>Don&apos;t you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="card-right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
