import styles from "../sections/formulaire.module.css"
import Image from 'next/image'
import { useState } from "react";
import { fetchWrapper } from '../../../helpers/fetch_wrapper';
import { useRouter } from 'next/router'

// function AddClient(props) {
    

//     function onSubmit(data) {
//         return createClient(data)
//     }

//     function create(params) {
//         return fetchWrapper.post('helpfest-api.robinivan.xyz/client', params);
//     }
// }


export default function Formulaire() {
    const router = useRouter()
    const [first_name, setFirst_name] = useState('');
    const [last_name, setSecond_name] = useState('');
    const [email, setEmail] = useState('');
    const [transaction_number] = useState(0);
    const [access_permition] = useState(0);
    
    function handleChangeFirst_name(event) {
        setFirst_name(event.target.value);
    }
    function handleChangeSecond_name(event) {
        setSecond_name(event.target.value);
    }
    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }

    const submitValue = () => {
        const input_result = {
            'first_name' : first_name,
            'second_name' : last_name,
            'email' : email,
            'transaction_number' : transaction_number,
            'access_permition' : access_permition,
        }
        
        console.log(input_result);
        return fetch('https://helpfest-api.robinivan.xyz/create_client?First_name='+first_name+'&Last_name='+last_name+'&Email='+email+'&Transaction_number='+transaction_number+'&Access='+access_permition+'', {
            method: 'POST',
            body: JSON.stringify(input_result)
        }).then(async response => {
            fetchWrapper.handleResponse

            if( response.status === 200 ){
                router.push('/#accueil')
                alert('Votre réservation a bien été prise en compte! Merci et bon festival!')
            }
        })
        // function create(params) {
        //     return fetchWrapper.post('https://helpfest-api.robinivan.xyz/client', params);
        // }

        // create(input_result)
    }

    
    // const handleSubmit = async event => {
    //     event.preventDefault();
    //     function create(params) {
    //         return fetchWrapper.post('helpfest-api.robinivan.xyz/client', params);
    //     }
    //     create(result)
        
    //     const result = await res.json()
    //     console.log(result)
    // }
    return (
        <div className={styles.container1}>
            <div className={styles.container1_1}>
            <Image src="/Affiche_publicitaire_1.png" className={styles.img_cover} layout="fill"></Image>
            </div>
            <div className={styles.container1_2}>
                <div className={styles.form}>
                    <div className={styles.container1_2_1}>
                        <div className={styles.text1_2_1}>
                        Réservez votre place
                        </div>
                        <input type="text" name="first_name" onChange={handleChangeFirst_name} placeholder="Nom" className={styles.input} />
                        <input type="text" name="second_name" onChange={handleChangeSecond_name} placeholder="Prénom" className={styles.input} />
                        <input type="text" name="email" onChange={handleChangeEmail} placeholder="Adresse mail" className={styles.input}/>
                        <input type="text" name="" placeholder="Numéro de téléphone" className={styles.input} />
                        <input type="hidden" name="transaction_number" value="000001"/>
                        <input type="hidden" name="access_permition" value="1"/>
                    </div>
                    <div className={styles.container1_2_2}>
                        <button onClick={submitValue} className={styles.button1_2}>
                            Payer : 15€
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}