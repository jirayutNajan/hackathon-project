import React from "react";

const Walkthrough = () => {
  return (
    <div className="font-sans leading-relaxed p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Computer Documentation Walkthrough
      </h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">How It Works</h2>
      <p className="text-gray-700 mb-6">
        Computers operate by processing binary data through a series of logical
        operations. The CPU fetches instructions from memory, decodes them, and
        executes them to perform tasks.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Step-by-Step Creation</h2>
      <ol className="list-decimal list-inside mb-6">
        <li className="mb-2">
          Wind picks up tiny particles from the Earth's surface and carries them away, forming something light and airy.
        </li>
        <li className="mb-2">
          When fire burns natural materials, it creates small particles that float in the air.
        </li>
        <li className="mb-2">
          Over time, those tiny particles get compressed and turn into something solid and strong.
        </li>
        <li className="mb-2">
          Rocks break down into small pieces over time, forming a common beach material.
        </li>
        <li className="mb-2">
          Some rocks contain valuable materials. When heated and processed, they can become something useful.
        </li>
        <li className="mb-2">
          If you heat this common material at high temperatures, it transforms into something clear and hard.
        </li>
        <li className="mb-2">
          When this clear material is heated even further, it becomes something useful in various industries.
        </li>
        <li className="mb-2">
          Heating certain ores at high temperatures can extract a material used in many fields.
        </li>
        <li className="mb-2">
          Deep within the Earth, heat and pressure can form something precious and highly valued.
        </li>
        <li className="mb-2">
          When metals are exposed to electricity, they can generate something important for communication.
        </li>
        <li className="mb-2">
          This material can control the flow of electricity and is used in electronic devices.
        </li>
        <li className="mb-2">
          When these two materials come together, they form an essential component in electronics.
        </li>
        <li className="mb-2">
          Combining these components results in the brain of a computer.
        </li>
        <li className="mb-2">
          Finally, bringing everything together creates a powerful machine that can calculate and store data.
        </li>
      </ol>
    </div>
  );
};

export default Walkthrough;
