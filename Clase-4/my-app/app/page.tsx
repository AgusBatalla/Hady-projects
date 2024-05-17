import Link from 'next/link';
import styles from "./page.module.css";

//eh creado un estilo basico ya que crei que no era necesario agregar demasiado para este proyecto

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>Welcome book lover!</h1>
      <br />
      <h3>
        Lorem ipsum dolor sit amet consectetur,adipisicing elit. Atque, pariatur ipsa? <br />
        Molestias earum laboriosam fugiat rerum non quos error,<br />
        porro illo voluptatem iusto nam voluptatibus, quis similique ut quidem. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,<br />
        porro doloremque debitis quis fugiat possimus dignissimos sed autem perferendis reprehenderit <br /> 
        magni explicabo ea tempore nemo rerum recusandae totam fugit nesciunt. <br />
        Lorem ipsum dolor sit amet consectetur,adipisicing elit. Atque, pariatur ipsa? <br />
        Molestias earum laboriosam fugiat rerum non quos error,<br />
        porro illo voluptatem iusto nam voluptatibus, quis similique ut quidem. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,<br />
        porro doloremque debitis quis fugiat possimus dignissimos sed autem perferendis reprehenderit <br /> 
        magni explicabo ea tempore nemo rerum recusandae totam fugit nesciunt. <br />
      </h3>

      <Link href="/comments">
        <div className={styles.link}>Comments</div>
      </Link>

    </main>
  );
}
