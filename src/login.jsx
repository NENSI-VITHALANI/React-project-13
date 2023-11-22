import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const record = await signInWithPopup(auth, googleAuthProvider);
            localStorage.setItem('token', record.user.accessToken);
            localStorage.setItem('user', JSON.stringify(record.user));
            navigate('/home');
        } catch (err) {
            return false;
        }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [])

    return (
        <center>
            <h1>Welcome</h1>
            <button onClick={handleSubmit}>Google</button>
        </center>
    )
}

export default Login;