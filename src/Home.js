import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product 
                id="1"
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L"
                price={2099.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                />
                <Product 
                id="2"
                title="Acer Chromebook Spin 11 CP311-1H-C5PN Convertible Laptop, Celeron N3350, 11.6 HD Touch, 4GB DDR4, 32GB eMMC, Google 鉻 Chromebook"
                price={309.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71c6BO65hAL._AC_SL1500_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product 
                id="3"
                title="iBUYPOWER Gaming PC Computer Desktop Trace 中塔型直立機箱 黑色 電腦主機外殼"
                price={999.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg"
                />
                <Product 
                id="4"
                title="MSI GL65 Leopard 10SFK-062 15.6 FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB NVMe SSD Win 10"
                price={1399.00}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81Mbw6RBtPL._AC_SL1500_.jpg"
                />
                <Product 
                id="5"
                title="Samsung 11.6 Chromebook with Intel N3060 up to 2.48GHz, 4GB Memory, 16GB eMMC Flash Memory, Bluetooth 4.0, USB 3.0, HDMI, Webcam, Chrome 作業系統"
                price={249.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71cMYeDo5eL._AC_SL1000_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id="6"
                title="Samsung Business CH890 Series 34 吋 WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business"
                price={614.76}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71V9d00kQZL._AC_SL1500_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
