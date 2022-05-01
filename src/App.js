import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, PublicRoute, PrivateRoute } from "./components";
import { ChatsPage, ProfilePage, GistsPage, LoginPage, SignupPage } from "./pages";
import { profileSelector } from "./store/profile";
import { subscribeAuthStateChanged } from "./store/profile";

const pageStyle = {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "min-content 1fr",
    padding: "0 10px",
};

export function App() {
    const {isAuth} = useSelector(profileSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(subscribeAuthStateChanged());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div style={pageStyle}>
                <Header isAuth={isAuth} />

                <Routes>
                <Route path="/" element={
                    <PrivateRoute isAuth={isAuth} to="/login">
                        <h1>Home page</h1>
                    </PrivateRoute>
                } />
                <Route path="/chats/*" element={
                    <PrivateRoute isAuth={isAuth}>
                        <ChatsPage />
                    </PrivateRoute>
                } />
                <Route path="/profile" element={
                    <PrivateRoute isAuth={isAuth}>
                        <ProfilePage />
                    </PrivateRoute>
                } />
                <Route path="/gists" element={
                    <PrivateRoute isAuth={isAuth}>
                        <GistsPage />
                    </PrivateRoute>
                } />
                 <Route path="/login" element={
                    <PublicRoute isAuth={isAuth}>
                        <LoginPage />
                    </PublicRoute>
                } />
                <Route path="/signup" element={
                    <PublicRoute isAuth={isAuth}>
                        <SignupPage />
                    </PublicRoute>
                } />
                <Route path="*" element={<h1>404 Page not found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}