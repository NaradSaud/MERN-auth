import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

// Layout Component to include Navbar and Footer on all pages
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main> {/* Main content area */}
      <Footer />
    </>
  );
}

function App() {
  const user = localStorage.getItem("token");

  return (
    <Layout>
      <Routes>
        {/* Show Main if user is authenticated, otherwise redirect to login */}
        {user ? (
          <>
            <Route path="/" exact element={<Main />} />
          </>
        ) : (
          <>
            {/* Redirect unauthenticated user to login */}
            <Route path="/" element={<Navigate replace to="/login" />} />
          </>
        )}

        {/* Public Routes */}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />

        {/* Redirect to login for any other path */}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Layout>
  );
}

export default App;
