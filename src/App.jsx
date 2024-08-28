import "./App.css";
import { Header } from "./componentes/header/header";
import scaFit from "./assets/sca-fit.png";
import playStore from "./assets/playstore.webp";
import appleStore from "./assets/applestore.webp";
import logoSca from "./assets/scalogo.png";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full">
      <Header />

      <div className="mt-2">
        <h2 className="text-white font-medium text-2xl ">Bem vindo</h2>
      </div>
      <div>
        <h2 className="text-white font-medium text-xl ">
          Baixe nosso aplicativo
        </h2>
      </div>
      <div>
        <h2 className="text-white font-medium text-xl p-5">
          use o codigo <strong>44455320</strong>
        </h2>
      </div>
      <div className="flex flex-col items-center mt-4">
        <a href="https://play.google.com/store/search?q=sca+fit&c=apps&hl=pt_BR">
          <img width={250} src={playStore} />
        </a>
      </div>
      <div>
        <a href="https://apps.apple.com/br/app/sca-fit/id1555516617">
          <img width={250} src={appleStore} />
        </a>
      </div>
      <div className="flex items-center italic text-white underline">
        matricula + senha ( data de nascimento[DDMMAA] dia/mes/ano
      </div>
      <div className="flex flex-col items-center mt-4">
        <img src={logoSca} width={100} className="rounded-2xl" />
      </div>
      <div className="flex justify-around bg-[#06c] w-full shadow-md mt-2">
        <p className="text-center text-white text-xl font-medium">
          Treinos - Avaliações - Pagamentos
        </p>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={scaFit}
          width={300}
          style={{
            opacity: 0.5,
            position: "absolute",
            zIndex: -100,
            marginTop: -300,
          }}
          alt="Descrição da imagem"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <a href="https://www.instagram.com/jailson.pradod/">
          <h2 className="text-white text-center">Site Desenvolvido por:</h2>
          <h2 className="italic text-white underline">
            Jailson Prado - Fullstack Developer
          </h2>
        </a>
      </div>
      <h2 className="italic text-white  mt-2 text-center text-nowrap">
        © Sistema e aplicativo SCA <br /> Todos direitos reservados
      </h2>
    </div>
  );
}

export default App;
