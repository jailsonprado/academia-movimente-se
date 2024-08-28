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
     <div className="flex flex-col items-center bg-white shadow-lg p-3 rounded-lg m-5">
  <span className="text-black italic underline">
    Sua matrícula é combinada com sua senha, que é sua data de nascimento no formato DDMMYY. Exemplo: 030797 para 03 de julho de 1997.
  </span>
        <div className="flex flex-col items-center mt-4">
        <img src={"https://play-lh.googleusercontent.com/jJAVqIrLzVqVubmFwNagy1MHTjlIo4GSgj_auh7Q_A35POj2XCGZezTuNyYgg2G7dQ"} width={100} className="rounded-2xl" />
      </div>
       <div className="bg-[#06c] flex">
        <h3 className="text-[#05DBF2] font-bold text-xl p-2">
          use o codigo <strong className="text-white">44455320</strong>
        </h3>
      </div>
      <div className="flex justify-around bg-[#06c] w-full shadow-md mt-1">
        <p className="text-center text-[#05DBF2] text-xl font-medium">
          Treinos - Avaliações - Pagamentos
        </p>
      </div>
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
