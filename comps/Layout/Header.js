import Head from "next/head";

const Header = () => {
    return ( 
        <Head>
            <title>Chat with Lucie</title>
            <meta name="description" content="Lucie vous aider à trouver un cadeau pour la fête des mères" />
            <link rel="icon" href="/logo_chatbot.png" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        </Head>
     );
}
 
export default Header;
