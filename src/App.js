import React from "react";
import ButtonNav from "./components/ButtonNav/ButtonNav";
import SectionOne from "./components/SectionOne/SectionOne";
import Main from "./components/Main/Main";

/*
  As primeiras bolinhas da esquerda que são de navegação
  vão ser fixas, navegando pela pagina, as bolinhas 
  dos projetos, vai ser um tab bar, botar ela na direita
  atualmente ta na esquerda.
*/
function App() {
  return (
     <>
      <Main />
      <SectionOne />
     </> 
  )
}

export default App;
