import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./layouts";
import Home from "./pages/Home";
import { CreatePost } from "./pages";

function App() {
  return (
    <>
      <Layout>
        <main className="max-w-7xl mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createPost" element={<CreatePost />} />
          </Routes>
        </main>
      </Layout>
    </>
  );
}

export default App;
