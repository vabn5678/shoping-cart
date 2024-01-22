import React from "react";
import Product from "./Product";
function Home() {

    return (

        <div>
            <h2 className="heading">Welcome To The Store </h2>
            <section>
                <h3>Produts</h3>
                <Product />
            </section>
        </div>

    );

}

export default Home;