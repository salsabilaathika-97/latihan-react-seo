import {Helmet} from "react-helmet-async"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Halaman ini merupakan halaman utama yang ditampilkan pertama kali"></meta>
            </Helmet>
            <h1>Halaman Home</h1>
        </div>
    )
}

export default Home;