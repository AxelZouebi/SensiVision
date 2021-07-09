import Image from 'next/image';
import styles from '../sections/intervenants.module.css'

const Intervenants = () => {
    return (
      <div className={styles.container3} id="intervenants">
        <div className={styles.container3_1}>
          <div className={styles.title3}>
          Des intervenants d'exception
          </div>
          <div className={styles.undertitle3}>
          Retrouvez Vianney, Louane, Julien Doré et bien d'autre encore pour vous faire vibrer.
          </div>
        </div>
        <div className={styles.container3_2}>
          <Image className={styles.img} src="/Capture.jpeg" width={200} height={200}></Image>
          <Image src="/vianney.png" width={200} height={200}></Image>
          <Image className={styles.img} src="/louane.jpg" width={200} height={200}></Image>
        </div>
      </div>
     );
}
 
export default Intervenants;