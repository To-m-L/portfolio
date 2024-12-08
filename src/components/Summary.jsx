import React from "react";

const Summary = () => (
  <section
    className="min-h-screen flex flex-col justify-center items-start bg-gray-900 text-white text-left p-10"
  >
    <h1 className="text-6xl font-bold mb-6">Hi, I'm Tom</h1>
    <p className="text-2xl max-w-3xl">
      I'm a{" "}
      <span className="text-emerald-400">Full Stack Developer</span> with a passion for crafting{" "}
      <span className="text-teal-300">efficient</span>,{" "}
      <span className="text-cyan-300">user-friendly</span> applications. Proficient in both{" "}
      <span className="text-blue-500">front-end</span> and{" "}
      <span className="text-indigo-400">back-end</span> development, with a strong foundation in multiple programming
      languages and frameworks.
    </p>
  </section>
);

export default Summary;
