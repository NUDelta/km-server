import React, { useState } from "react";
import Explore from "./components/Explore";
import Instructions from "./components/Instructions";

import { examples } from "./lib/examples";
import UserEntry from "./components/UserEntry";

// @ts-ignore
export default function NewApp(): JSX.Element {
  const possibleSteps = ["One", "Two", "Three", "Four", "Five"]
  // var i = 0
  const [firstSelectedIdx, setFirstSelectedIdx] = useState(0);
  const [secondSelectedIdx, setSecondSelectedIdx] = useState(1);
  const [selectedStep, setSelectedStep] = useState(1);
 

  return (
    <div className="body">
      <div className = "steps">
        <Instructions curr_step={selectedStep}/> 
      </div>
      <UserEntry curr_step={selectedStep} setCurrStep={setSelectedStep} ></UserEntry>
      <div className="flex items-center justify-evenly relative mb-1 mt-2">
        <div>
          <h1 className="text-center">Compare Websites: </h1>
          <div className="flex items-center justify-center relative">
            <label>
              <select
                className="select"
                value={firstSelectedIdx}
                onChange={(e) => setFirstSelectedIdx(Number(e.target.value))}
              >
                {examples.map((example, idx) => (
                  <option key={idx} value={idx}>
                    {example.name}
                  </option>
                ))}
              </select>
            </label>
            <p className="mx-4">vs</p>
            <label>
              <select
                className="select"
                value={secondSelectedIdx}
                onChange={(e) => setSecondSelectedIdx(Number(e.target.value))}
              >
                {examples.map((example, idx) => (
                  <option key={idx} value={idx}>
                    {example.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      <Explore
        firstExample={examples[firstSelectedIdx]}
        secondExample={examples[secondSelectedIdx]}
        selectedStep={selectedStep}
      />
    </div>
  );
}
