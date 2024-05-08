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
        <h1>Bun venit la magazinul de jucarii APOLODOR!</h1>
        <button onClick={openProductsPage} className="btn">Apasă aici pentru a naviga la pagina de produse</button>
      </header>
      <section className="section">
        <p>Aceasta este o platformă intuitivă și eficientă pentru gestionarea tuturor produselor din magazinul nostru</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Image src="/logo-apolodor.jpg" width={400} height={200} />
        </div>
      </section>
      <footer>
        <p>© Proiect Cloud Computing 2024 Grigore Raluca-Florentina</p>
      </footer>
    </div>
  );
}
