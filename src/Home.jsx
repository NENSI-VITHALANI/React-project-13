
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/')
        } catch (err) {
            return false;
        }
        console.log(user);
    }
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [])

    return (
        <center>
            <h1>welcome to react firebase google authentication</h1>
            <hr/>
            <h2>{user && user.email}</h2>
            {/* {user && (<img src={user.photoURL} />)} */}
            <h3>{user.displayName}</h3>
            <hr/>
            <button onClick={handleLogOut}>Logout</button>
        </center>

    )
}

export default Home;