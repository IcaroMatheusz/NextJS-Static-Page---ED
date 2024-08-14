import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className="roboto">Ed</h1>
      </div>
      

      <div className={styles.section}>
        
        <div className={styles.mainImage}>
          <Image
            src="/images/ed.png" 
            width={440}
            height={594}
            />

          



        </div>

        <div className={styles.description}>
          <p className="roboto">
            Um jovem usuário de Psycho Power que
            teve o envelhecimento acelerado pelos
            experimentos da Shadaloo em uma jornada para
            libertar outras cobaias. Tem o pavio curto
            e a boca suja de Balrog, seu antigo mentor.
          </p>
          
          <p className="roboto">
            Altura: 1,82m
          </p>

          <p className="roboto">
            Peso: 86kg
          </p>

           <div className={styles.rowImages}>

            <Image
              src="/image/ed_ss03.jpg" 
              width={600}
              height={300}
            />

            <Image
              src="/image/ed_ss04.jpg" 
              width={600}
              height={300}
            />

            <Image
              src="/image/ed_ss02.jpg" 
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
