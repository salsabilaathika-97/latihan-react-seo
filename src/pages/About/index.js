import {Helmet} from "react-helmet-async"

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
                <meta name="description" content="Halaman ini menampilkan rincian projek yang dikerjakan"></meta>
            </Helmet>
            <h1>Halaman About</h1>
        </div>
    )
}

export default About;