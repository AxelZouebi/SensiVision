import * as C from '../container.js';
import * as T from "../text.js"
import styles from '../sections/accueil.module.css'
import Link from 'next/link'

const Accueil = () => {
    return ( 
        <>
        <div className={styles.spacer} id="accueil"></div>
          <div className={styles.container1}>
            <div className={styles.container1_1}>
              <div className={styles.title1}>
                SensiVision
              </div>
              <div className={styles.undertitle1}>
                Le festival pour la cause animal
              </div>
            </div>
            <div className={styles.undertitle2}>
                Terrain de cricket, Parc de Vincennes 75012 Paris
            </div>
            <div className={styles.container1_2}>
                <div className={styles.button1}>
                  En savoir plus
                </div>
                <div className={styles.button2}>
                  Réserver
                </div>
            </div>
          </div>
        <div className={styles.spacer}></div>
        </>
     );
}
 
export default Accueil;