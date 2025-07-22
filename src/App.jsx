import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetail from "./screens/PostDetail";
import AllPosts from "./screens/AllPosts";
const Home = React.lazy(() => import("./screens/Home"));
const About = React.lazy(() => import("./screens/About"));
const Contact = React.lazy(() => import("./screens/Contact"));
const CreatePost = React.lazy(() => import("./screens/CreatePost"));
// const AllPosts = React.lazy(() => import("./screens/AllPosts"));

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/posts" element={<AllPosts />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/create/:postId/:userId" element={<CreatePost />} />

            <Route path="/posts/:postId/:userId" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
