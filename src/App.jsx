import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GithubLogin from "./pages/GithubLogin";


function App() {
  return (
    <GoogleOAuthProvider  clientId="203571099479-rksr2l7odk6d8m71nrk8n2g1jv5aerpo.apps.googleusercontent.com">
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
        
        </Routes>
      </Router>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
