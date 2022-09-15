import {Helmet} from "react-helmet-async"

const Products = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Halaman ini merupakan hasil produk dari projek yang telah dikerjakan"></meta>
            </Helmet>
            <h1>Halaman Products</h1>
        </div>
    )
}

export default Products;