import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  //let [text, setText] = useState("TODO APP");
 
  return (
    <>
      <section className="container-fluid ">
        <section className="row">
          <section className="col-lg-6 col-11 m-auto">
            <Header/>          
            <hr />
            <Input />
            <hr />
            <List />
            
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
