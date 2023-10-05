import React from "react";
import "./App.css";
import Input from "./components/input/input";
import Table from "./components/table/table";

function App() {
  return (
    <React.Fragment>
      <main className="container mx-auto flex flex-col">
          <header className="mb-4">
            <Input />
          </header>
          <section>
            <Table />
          </section>
      </main>
    </React.Fragment>
  );
}

export default App;
