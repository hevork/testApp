import React from "react";
import { Header } from "./components/header";
import "./App.css";
import { EnhancedTable } from "./components/table";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <EnhancedTable />
      </div>
    </div>
  );
}

export default App;
