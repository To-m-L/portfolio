import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Summary />
      <WorkExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
