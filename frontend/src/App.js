import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { Toaster } from "sonner";

function App() {
    return (
        <div className="App grain">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                theme="dark"
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#0B1221",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff",
                    },
                }}
            />
        </div>
    );
}

export default App;
