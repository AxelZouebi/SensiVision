
import { fetchWrapper } from '../../helpers/fetch_wrapper';
import Formulaire from '../comps/sections/formulaire';

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

export default function Reserver() {
    return (
        <Formulaire />
    )
}