import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router'; 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter(); 

  const openProductsPage = () => {
    router.push('/produse'); 
  };

   return (
    <div className="container">
      <header>
        <h1>Bun venit la magazinul de jucarii "Apolodor"!</h1>
        <button onClick={openProductsPage} className="btn">Apasă aici pentru a naviga la pagina de produse</button>
      </header>
      <section className="section">
        <p>Descoperiți o lume plină de culori și bucurie, unde fiecare raft este plin cu cele mai captivante și educative jucării. </p>
        <br /> 
        <br /> 
        <p>De la clasicele păpuși și mașinuțe cu telecomandă, la seturile creative LEGO și puzzle-urile interactive, avem tot ce este nevoie pentru a stimula creativitatea și dezvoltarea copiilor. Explorează colecția noastră și surprinde-i pe cei mici cu cadouri care îi vor încânta și inspira în fiecare zi</p>
        <br /> 
        <br /> 
        <p>Vă așteptăm cu drag să faceți parte din universul nostru plin de joc și distracție!</p>
      </section>
      <footer>
        <p>© Proiect Cloud Computing 2024 Grigore Raluca-Florentina</p>
      </footer>
    </div>
  );
}
