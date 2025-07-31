import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { MainMenu } from "./pages/MainMenu";
import { Game } from "./pages/Game";

// Placeholder pages:
const About = () => <div>About Page</div>;
const Resume = () => <div>Resume (Skill Tree?)</div>;
const Credits = () => <div>Credits</div>;
const NotFound = () => <div>404 - Page not found</div>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>
);
