import React from 'react'
import Produto from "./Produto"


import g2customprokitjersey1 from "./img/G2 CUSTOM PRO KIT JERSEY 2021 1.jpg"
import g2customprokitjersey2 from "./img/G2 CUSTOM PRO KIT JERSEY 2021 2.jpg"


import g2prokitjersey20211 from "./img/G2 PRO KIT JERSEY 2021 1.jpg"
import g2prokitjersey20212 from "./img/G2 PRO KIT JERSEY 2021 2.jpg"


import g2croatiajersey1 from "./img/G2 CROATIA JERSEY 2020 1.jpg"
import g2croatiajersey2 from "./img/G2 CROATIA JERSEY 2020 2.jpg"


import g2polandjersey20201 from "./img/G2 POLAND JERSEY 2020 1.jpg"
import g2polandjersey20202 from "./img/G2 POLAND JERSEY 2020 2.jpg"


import g2germanyjersey20201 from "./img/G2 GERMANY JERSEY 2020 1.jpg"
import g2germanyjersey20202 from "./img/G2 GERMANY JERSEY 2020 2.jpg"


import g2customproplayerjersey20201 from "./img/G2 CUSTOM PRO PLAYER JERSEY 2020 1.jpg"
import g2customproplayerjersey20202 from "./img/G2 CUSTOM PRO PLAYER JERSEY 2020 2.jpg"


import g2proplayerjersey20201 from "./img/G2 PRO PLAYER JERSEY 2020 1.jpg"
import g2proplayerjersey20202 from "./img/G2 PRO PLAYER JERSEY 2020 2.jpg"


import g2proplayerhoodie20201 from "./img/G2 PRO PLAYER HOODIE 2020 1.jpg"
import g2proplayerhoodie20202 from "./img/G2 PRO PLAYER HOODIE 2020 2.jpg"


import g2samuraitshirtblack1 from "./img/G2 SAMURAI T-SHIRT – BLACK 1.jpg"
import g2samuraitshirtblack2 from "./img/G2 SAMURAI T-SHIRT – BLACK 2.jpg"


import g2samurailongsleeveblack1 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 1.jpg"
import g2samurailongsleeveblack2 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 2.jpg"


import g2samuraihoodieblack1 from "./img/G2 SAMURAI HOODIE – BLACK 1.jpg"
import g2samuraihoodieblack2 from "./img/G2 SAMURAI HOODIE – BLACK 2.jpg"


import g2samuraicodehoodie1 from "./img/G2 SAMURAI CODE HOODIE 1.jpg"
import g2samuraicodehoodie2 from "./img/G2 SAMURAI CODE HOODIE 2.jpg"


import logitechgproxwirelessheadset1 from "./img/LOGITECH G PRO X WIRELESS HEADSET 1.jpg"
import logitechgproxwirelessheadset2 from "./img/LOGITECH G PRO X WIRELESS HEADSET 2.jpg"


import secretlabomega2020g2edition1 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 1.jpg"
import secretlabomega2020g2edition2 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 2.jpg"


import secretlabtitan2020g2edition1 from "./img/SECRETLAB TITAN 2020 G2 EDITION 1.png"
import secretlabtitan2020g2edition2 from "./img/SECRETLAB TITAN 2020 G2 EDITION 2.png"


import z490aorusultrag21 from "./img/Z490 AORUS ULTRA G2 1.jpg"
import z490aorusultrag22 from "./img/Z490 AORUS ULTRA G2 2.jpg"



import './css/Produtos.css'

function Produtos() {
    return (
        <div className="produtos">

            <img className="produtos__banner" src="https://g2esports.com/wp-content/uploads/2021-Jersey-Homeplaceholder-1.jpg"></img>

            <hr className="produtos__hr"></hr>
            <h2 className="produtos__h2">PRO KIT</h2>
            <hr className="produtos__hr"></hr>

            <div className="produtos__linhaProdutos">


                <Produto
                    id = "P0000001"
                    titulo="G2 Custom Pro Kit Jersey 2021"
                    preco={100}
                    img={g2customprokitjersey1}
                    img2={g2customprokitjersey2}
                />

                <Produto
                    id = "P0000002"
                    titulo="G2 Pro Kit Jersey 2021"
                    preco={80}
                    img={g2prokitjersey20211}
                    img2={g2prokitjersey20212}
                />

                <Produto
                    id = "P0000003"
                    titulo="G2 Croatia Jersey 2020"
                    preco={60}
                    img={g2croatiajersey1}
                    img2={g2croatiajersey2}
                />

                <Produto
                    id = "P0000004"
                    titulo="G2 Poland Jersey 2020"
                    preco={60}
                    img={g2polandjersey20201}
                    img2={g2polandjersey20202}
                />

            </div>


            <div className="produtos__linhaProdutos">

                <Produto
                    id = "P0000005"
                    titulo="G2 Germany Jersey 2020"
                    preco={60}
                    img={g2germanyjersey20201}
                    img2={g2germanyjersey20202}
                />

                <Produto
                    id = "P0000006"
                    titulo="G2 Custom Pro Player Jersey 2020"
                    preco={80}
                    img={g2customproplayerjersey20201}
                    img2={g2customproplayerjersey20202}
                />

                <Produto
                    id = "P0000007"
                    titulo="G2 Pro Player Jersey 2020"
                    preco={60}
                    img={g2proplayerjersey20201}
                    img2={g2proplayerjersey20202}
                />

                <Produto
                    id = "P0000008"
                    titulo="G2 Pro Player Hoodie 2020"
                    preco={70}
                    img={g2proplayerhoodie20201}
                    img2={g2proplayerhoodie20202}
                />

            </div>

            

            <img className="produtos__banner" src="https://g2esports.com/wp-content/uploads/Banner_Samurai_new.jpg"></img>

            <hr className="produtos__hr"></hr>
            <h2 className="produtos__h2">SAMURAI</h2>
            <hr className="produtos__hr"></hr>

            <div className="produtos__linhaProdutos">


                <Produto
                    id = "S0000001"
                    titulo="G2 SAMURAI T-Shirt"
                    preco={30}
                    img={g2samuraitshirtblack1}
                    img2={g2samuraitshirtblack2}
                />

                <Produto
                    id = "S0000002"
                    titulo="G2 SAMURAI Long Sleeve Tee"
                    preco={40}
                    img={g2samurailongsleeveblack1}
                    img2={g2samurailongsleeveblack2}
                />

                <Produto
                    id = "S0000003"
                    titulo="G2 SAMURAI Hoodie"
                    preco={60}
                    img={g2samuraihoodieblack1}
                    img2={g2samuraihoodieblack2}
                />

                <Produto
                    id = "S0000004"
                    titulo="G2 SAMURAI CODE Hoodie"
                    preco={60}
                    img={g2samuraicodehoodie1}
                    img2={g2samuraicodehoodie2}
                />


            </div>

        






            <img className="produtos__banner" src="https://g2esports.com/wp-content/uploads/Banner_Hardware.jpg"></img>

            <hr className="produtos__hr"></hr>
            <h2 className="produtos__h2">PERIFÉRICOS</h2>
            <hr className="produtos__hr"></hr>


            <div className="produtos__linhaProdutos">


                <Produto
                    id = "H0000001"
                    titulo="Logitech G Pro X Wireless Headset"
                    preco={690}
                    img={logitechgproxwirelessheadset1}
                    img2={logitechgproxwirelessheadset2}
                />

                <Produto
                    id = "H0000002"
                    titulo="Secretlab Omega 2020 G2 Edition"
                    preco={1700}
                    img={secretlabomega2020g2edition1}
                    img2={secretlabomega2020g2edition2}
                />

                <Produto
                    id = "H0000003"
                    titulo="Secretlab Titan 2020 G2 Edition"
                    preco={1900}
                    img={secretlabtitan2020g2edition1}
                    img2={secretlabtitan2020g2edition2}
                />

                <Produto
                    id = "H0000004"
                    titulo="Z490 AORUS ULTRA G2"
                    preco={450}
                    img={z490aorusultrag21}
                    img2={z490aorusultrag22}
                />
                

            </div>



        </div>
    )
}

export default Produtos
