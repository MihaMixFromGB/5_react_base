import { createUserWithEmailAndPassword } from "firebase/auth";
import { Registration } from "../components";
import { auth } from "../api/firebase";

const signup = (auth, email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
};

export function SignupPage() {
    return (<Registration auth={auth} type="signUp" sendRegistration={signup} />);
};