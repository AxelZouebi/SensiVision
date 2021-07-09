import Image from 'next/image'
import styles from '../sections/partenaires.module.css'


const Partenaires = () => {
    return (
        <div className={styles.container5} id="nos_partenaires">
            <div className={styles.title5}>
                Nos partenaires
            </div>
            <div className={styles.container5_1}>
                <div className={styles.container5_1_1}>
                    <div className={styles.partenaire}>
                        <Image className={styles.img} src="/Logo_de_la_SPA_(France).png" width={100} height={100}></Image>
                        <div className={styles.partenaire_title5}>
                        SPA
                        </div>
                        <div className={styles.partenaire_text5}>
                        L'association Société protectrice des animaux est, en France, la plus ancienne des sociétés de protection des animaux.
                        </div>
                    </div>
                </div>
                <div className={styles.container5_1_1}>
                    <div className={styles.partenaire}>
                        <Image className={styles.img} src="/fondation_brigitte_bardot.jpg" width={100} height={100}></Image>
                        <div className={styles.partenaire_title5}>
                        Fondation Brigitte Bardot
                        </div>
                        <div className={styles.partenaire_text5}>
                        Fondation française vouée à la protection des animaux.
                        </div>
                    </div>
                </div>
                <div className={styles.container5_1_1}>
                    <div className={styles.partenaire}>
                        <Image className={styles.img} src="/Fondation_30_millions_damis.jpg" width={100} height={100}></Image>
                        <div className={styles.partenaire_title5}>
                        Fondation 30 millions d'amis
                        </div>
                        <div className={styles.partenaire_text5}>
                        Fondation combattant toutes formes de souffrance animal.
                        </div>
                    </div>
                </div>
                <div className={styles.container5_1_1}>
                    <div className={styles.partenaire}>
                        <Image className={styles.img} src="/logo_codeanimal.jpg" width={100} height={100}></Image>
                        <div className={styles.partenaire_title5}>
                        Code Animal
                        </div>
                        <div className={styles.partenaire_text5}>
                        Association spécialisée dans la relation entre l’espèce humaine et les autres animaux.
                        </div>
                    </div>
                </div>
                <div className={styles.container5_1_1}>
                    <div className={styles.partenaire}>
                        <Image className={styles.img} src="/logo-stephane-lamart-habilitation.png" width={100} height={100}></Image>
                        <div className={styles.partenaire_title5}>
                        Fondation Stéfane Lamart 
                        </div>
                        <div className={styles.partenaire_text5}>
                        Pour la défense des droits des animaux.
                        </div>
                    </div>
                </div>
                <div className={styles.container5_1_1}>
                    <div className={styles.partenaire}>
                        <Image className={styles.img} src="/Fondation_assistance_animaux.jpg" width={100} height={100}></Image>
                        <div className={styles.partenaire_title5}>
                        Fondation assist. aux animaux
                        </div>
                        <div className={styles.partenaire_text5}>
                        1er Fondation créée en France pour la défense des animaux maltraités et abandonnés.
                        </div>
                    </div>
                </div>
                <div className={styles.container5_1_1}>
                    <div className={styles.partenaire}>
                        <Image className={styles.img} src="/One_voice.png" width={100} height={100}></Image>
                        <div className={styles.partenaire_title5}>
                        One Voice
                        </div>
                        <div className={styles.partenaire_text5}>
                        La voix des animaux humains et non-humains, la voix de la planète.
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Partenaires;