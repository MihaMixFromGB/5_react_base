import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ChatsPage, ProfilePage } from "./pages";
import { GistsPage } from "./pages/gists";

const pageStyle = {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "min-content 1fr",
    padding: "0 10px",
};

export function App() {
    return (
        <BrowserRouter>
            <div style={pageStyle}>
                <Header />

                <Routes>
                <Route path="/" element={<ChatsPage />} />
                <Route path="/chats/*" element={<ChatsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/gists" element={<GistsPage />} />
                <Route path="*" element={<h1>404 Page not found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}