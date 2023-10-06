import React from "react";
import "./App.css";
import Input from "./components/input/input";
import Table from "./components/table/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <React.Fragment>
      <main className="container mx-auto">
        <header className="w-full flex flex-row items-center gap-6">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            TODO <span className="text-blue-600">LIST</span>
          </h1>
          <a href="https://github.com/tcorrea/react-todo-list" target="_blank">
            <FontAwesomeIcon className="w-10 h-10" icon={faGithub} />
          </a>
        </header>
        <div className="flex flex-col">
          <section className="mb-4">
            <Input />
          </section>
          <section className="">
            <Table />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
