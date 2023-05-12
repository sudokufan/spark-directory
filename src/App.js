import "./App.css";
import Walker from "./walker";
import characters from "./characters.json";
import React from "react";

const App = () => {
  const walkersConvertedDateObj = characters.roster.map((roster) => {
    return { ...roster, date: new Date(roster.date) };
  });

  // sorts by date, newest first
  const walkers = walkersConvertedDateObj.sort(
    (a, b) => Number(b.date) - Number(a.date)
  );

  // add options to sort by status or alphabetically

  return (
    <div className="container">
      {walkers.map((walker) => (
        <Walker data={walker} key={walker.name} />
      ))}
    </div>
  );
};

export default App;
