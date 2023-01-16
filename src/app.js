/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    let dominio = (document.querySelector("#generator").value = namedomain());
    let generarlista = "<li>" + dominio + "</li>";
    let lista = document.getElementById("lista-domain");
    lista.innerHTML += generarlista;
  });
  console.log("Hello Raquel from the console!");
};

let namedomain = () => {
  let pronoun = ["our", "the"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".es", ".net", ".io"];

  let pronIndx = Math.floor(Math.random() * pronoun.length);
  let adjIndx = Math.floor(Math.random() * adj.length);
  let nounIndx = Math.floor(Math.random() * noun.length);
  let extIndx = Math.floor(Math.random() * extensions.length);

  return `${pronoun[pronIndx]}${adj[adjIndx]}${noun[nounIndx]}${extensions[extIndx]}`;
};
