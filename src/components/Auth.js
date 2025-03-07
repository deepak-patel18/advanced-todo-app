import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => dispatch(login())}>Login</button>
        </>
      )}
    </div>
  );
};

export default Auth;
