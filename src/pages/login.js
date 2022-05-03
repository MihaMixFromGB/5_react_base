import { signInWithEmailAndPassword } from "firebase/auth";
import { Registration } from "../components";
import { auth } from "../api/firebase";

const login = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password);
};

export function LoginPage() {
    return (
        <Registration auth={auth} type="login" sendRegistration={login} />
    );
};