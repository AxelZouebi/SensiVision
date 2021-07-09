
import Image from 'next/image'
import styles from '../sections/activite-chien.module.css'

const Activite_chien = () => {
    return (
      <div className={styles.container4}>
        <div className={styles.container4_1}>
          <div className={styles.title4}>
          Des activités pour votre chien
          </div>
          <div className={styles.undertitle4}>
          Emmenez votre chien, il s'amusera et sera chouchouté toute la journée !
          </div>
        </div>
        <div className={styles.container4_2}>
          <div className={styles.container4_2_1}>
            <div className={styles.text4}>
            De nombreuses activités sont proposés pour les chiens, ils sont les bienvenue au festival. C'est le moment de leur faire plaisir, avec nos activités amusantes et nos séances de massages canins.
            <br/><br/>
            Pour rappel, tous les bénéfices de ce festival seront redistribués aux associations pour la cause animal !
            Alors n'attendez plus ! Venez vous amuser, venez offrir un super moment pour votre/vos chiens, et venez soutenir la cause  animal !
            </div>
          </div>
          <div className={styles.container4_2_2}>
            <div className={styles.container4_2_2_1}>
            <Image src="/education-dressage-chien.jpg" layout="fill"></Image>
            </div>
            <div className={styles.container4_2_2_2}>
              <div className={styles.container4_2_2_2_1}>
              <Image src="/massage-chien.jpg" layout="fill"></Image>
              </div>
              <div className={styles.container4_2_2_2_2}>
              <Image src="/labrador-en-train-de-nager.jpg" layout="fill"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Activite_chien;