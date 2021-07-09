import Accueil from "../comps/sections/accueil";
import Date from "../comps/sections/date";
import Intervenants from "../comps/sections/intervenants";
import Activite_chien from "../comps/sections/activite-chien";
import Partenaires from "../comps/sections/partenaires";


export default function Home() {
  return (
    <>
    <Accueil />
    <Date />
    <Intervenants />
    <Activite_chien />
    <Partenaires />
    </>
  )
}
