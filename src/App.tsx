import {  useState } from "react";
import "./App.css";

import NoteHeader from "./components/NoteHeader";

import { SortByType } from "./types/SortBy";
import AppProvider from "./components/providers/AppProvider";
import NoteApp from "./components/NoteApp";

function App() {
  const [sortBy, setSortBy] = useState<SortByType>("latest");
  return (
    <AppProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(value) => setSortBy(value)} />
       <NoteApp sortBy={sortBy}/>
      </div>
    </AppProvider>
  );
}

export default App;
