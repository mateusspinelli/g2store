import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Pedidos from "./Pedidos";
import Footer from "./Footer";
import CriarConta from "./CriarConta.js"
import Header from "./Header";
import Home from "./Home";
import Carrinho from "./Carrinho";
import Login from "./Login";
import Pagamento from "./Pagamento";
import Produtos from "./Produtos"
import Produto2 from "./Produto2"
import Produto3 from "./Produto3"




import g2customprokitjersey1 from "./img/G2 CUSTOM PRO KIT JERSEY 2021 1.jpg"
import g2customprokitjersey2 from "./img/G2 CUSTOM PRO KIT JERSEY 2021 2.jpg"
import g2customprokitjersey3 from "./img/G2 CUSTOM PRO KIT JERSEY 2021 3.jpg"
import g2customprokitjersey4 from "./img/G2 CUSTOM PRO KIT JERSEY 2021 4.jpg"


import g2prokitjersey20211 from "./img/G2 PRO KIT JERSEY 2021 1.jpg"
import g2prokitjersey20212 from "./img/G2 PRO KIT JERSEY 2021 2.jpg"
import g2prokitjersey20213 from "./img/G2 PRO KIT JERSEY 2021 3.jpg"
import g2prokitjersey20214 from "./img/G2 PRO KIT JERSEY 2021 4.jpg"


import g2croatiajersey1 from "./img/G2 CROATIA JERSEY 2020 1.jpg"
import g2croatiajersey2 from "./img/G2 CROATIA JERSEY 2020 2.jpg"
import g2croatiajersey3 from "./img/G2 CROATIA JERSEY 2020 3.jpg"
import g2croatiajersey4 from "./img/G2 CROATIA JERSEY 2020 4.jpg"


import g2polandjersey20201 from "./img/G2 POLAND JERSEY 2020 1.jpg"
import g2polandjersey20202 from "./img/G2 POLAND JERSEY 2020 2.jpg"
import g2polandjersey20203 from "./img/G2 POLAND JERSEY 2020 3.jpg"
import g2polandjersey20204 from "./img/G2 POLAND JERSEY 2020 4.jpg"


import g2germanyjersey20201 from "./img/G2 GERMANY JERSEY 2020 1.jpg"
import g2germanyjersey20202 from "./img/G2 GERMANY JERSEY 2020 2.jpg"
import g2germanyjersey20203 from "./img/G2 GERMANY JERSEY 2020 3.png"
import g2germanyjersey20204 from "./img/G2 GERMANY JERSEY 2020 4.png"


import g2customproplayerjersey20201 from "./img/G2 CUSTOM PRO PLAYER JERSEY 2020 1.jpg"
import g2customproplayerjersey20202 from "./img/G2 CUSTOM PRO PLAYER JERSEY 2020 2.jpg"
import g2customproplayerjersey20203 from "./img/G2 CUSTOM PRO PLAYER JERSEY 2020 3.jpg"
import g2customproplayerjersey20204 from "./img/G2 PRO PLAYER JERSEY 2020 1.jpg"


import g2proplayerjersey20201 from "./img/G2 PRO PLAYER JERSEY 2020 1.jpg"
import g2proplayerjersey20202 from "./img/G2 PRO PLAYER JERSEY 2020 2.jpg"
import g2proplayerjersey20203 from "./img/G2 PRO PLAYER JERSEY 2020 3.jpg"
import g2proplayerjersey20204 from "./img/G2 PRO PLAYER JERSEY 2020 4.jpg"


import g2proplayerhoodie20201 from "./img/G2 PRO PLAYER HOODIE 2020 1.jpg"
import g2proplayerhoodie20202 from "./img/G2 PRO PLAYER HOODIE 2020 2.jpg"
import g2proplayerhoodie20203 from "./img/G2 PRO PLAYER HOODIE 2020 3.jpg"
import g2proplayerhoodie20204 from "./img/G2 PRO PLAYER HOODIE 2020 4.jpg"


import g2samuraitshirtblack1 from "./img/G2 SAMURAI T-SHIRT – BLACK 1.jpg"
import g2samuraitshirtblack2 from "./img/G2 SAMURAI T-SHIRT – BLACK 2.jpg"
import g2samuraitshirtblack3 from "./img/G2 SAMURAI T-SHIRT – BLACK 3.jpg"
import g2samuraitshirtblack4 from "./img/G2 SAMURAI T-SHIRT – BLACK 4.jpg"


import g2samurailongsleeveblack1 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 1.jpg"
import g2samurailongsleeveblack2 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 2.jpg"
import g2samurailongsleeveblack3 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 3.jpg"
import g2samurailongsleeveblack4 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 4.jpg"


import g2samuraihoodieblack1 from "./img/G2 SAMURAI HOODIE – BLACK 1.jpg"
import g2samuraihoodieblack2 from "./img/G2 SAMURAI HOODIE – BLACK 2.jpg"
import g2samuraihoodieblack3 from "./img/G2 SAMURAI HOODIE – BLACK 3.jpg"
import g2samuraihoodieblack4 from "./img/G2 SAMURAI HOODIE – BLACK 4.jpg"


import g2samuraicodehoodie1 from "./img/G2 SAMURAI CODE HOODIE 1.jpg"
import g2samuraicodehoodie2 from "./img/G2 SAMURAI CODE HOODIE 2.jpg"
import g2samuraicodehoodie3 from "./img/G2 SAMURAI CODE HOODIE 3.jpg"
import g2samuraicodehoodie4 from "./img/G2 SAMURAI CODE HOODIE 4.jpg"


import logitechgproxwirelessheadset1 from "./img/LOGITECH G PRO X WIRELESS HEADSET 1.jpg"
import logitechgproxwirelessheadset2 from "./img/LOGITECH G PRO X WIRELESS HEADSET 2.jpg"
import logitechgproxwirelessheadset3 from "./img/LOGITECH G PRO X WIRELESS HEADSET 3.jpg"
import logitechgproxwirelessheadset4 from "./img/LOGITECH G PRO X WIRELESS HEADSET 4.jpg"


import secretlabomega2020g2edition1 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 1.jpg"
import secretlabomega2020g2edition2 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 2.jpg"
import secretlabomega2020g2edition3 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 3.png"
import secretlabomega2020g2edition4 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 4.png"


import secretlabtitan2020g2edition1 from "./img/SECRETLAB TITAN 2020 G2 EDITION 1.png"
import secretlabtitan2020g2edition2 from "./img/SECRETLAB TITAN 2020 G2 EDITION 2.png"
import secretlabtitan2020g2edition3 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 1.jpg"
import secretlabtitan2020g2edition4 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 2.jpg"


import z490aorusultrag21 from "./img/Z490 AORUS ULTRA G2 1.jpg"
import z490aorusultrag22 from "./img/Z490 AORUS ULTRA G2 2.jpg"
import z490aorusultrag23 from "./img/Z490 AORUS ULTRA G2 3.jpg"
import z490aorusultrag24 from "./img/Z490 AORUS ULTRA G2 1.jpg"


const promise = loadStripe("pk_test_51I0AZ7HmlmGb0ed6P9Ncidox3D4b8t1iPblBMCHj8XGKxb685pw1xo4xTrNrR2upStn7VNVSwrLaBORJdMuBe9gh00BeZBtMfU");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("O USUARIO É: ", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })
  }, [])


  return (
    <Router>


      <div className="App">
        <Switch>

         <Route path="/produtos">
            <Header></Header>
            <Produtos></Produtos>
            <Footer></Footer>
          </Route>

          <Route path="/carrinho">
            <Header></Header>
            <Carrinho></Carrinho>
            <Footer></Footer>
          </Route>


          <Route path="/login">
            <Header></Header>
            <Login/>
            <Footer></Footer>
          </Route>

          <Route path="/criarconta">
            <Header></Header>
            <CriarConta/>
            <Footer></Footer>
          </Route>


          <Route path="/pagamento">
            <Header></Header>
            <Elements stripe={promise}>
              <Pagamento></Pagamento>
            </Elements>
            <Footer></Footer>
          </Route>


          <Route path="/pedidos">
            <Header></Header>
            <Pedidos></Pedidos>
            <Footer></Footer>
          </Route>












          <Route path="/P0000001">
            <Header></Header>
            <Produto2
                    id = "P0000001"
                    titulo="G2 Custom Pro Kit Jersey 2021"
                    preco={100}
                    cor="Preto"
                    descricao="The official 2021 Custom Pro Kit jersey of G2 Esports. Made with AEROREADY 100% Recycled Polyester technology, the premium fabric allows for fast drying, no odour, and comfort in every climate. Proudly created and designed with adidas for the #G2ARMY with love, this is the jersey G2 Pro Players will compete in throughout 2021. Make sure your opponents never forget your name – customise your jersey and add your handle to the back."
                    tecido="100% Recycled Polyester technology"
                    img={g2customprokitjersey1}
                    img2={g2customprokitjersey2}
                    img3={g2customprokitjersey3}
                    img4={g2customprokitjersey4}
                />
            <Footer></Footer>
          </Route>


          <Route path="/P0000002">
            <Header></Header>
            <Produto2
                    id = "P0000002"
                    titulo="G2 Pro Kit Jersey 2021"
                    preco={80}
                    cor="Preto"
                    descricao="The official 2021 Pro Kit jersey of G2 Esports. Made with AEROREADY 100% Recycled Polyester technology, the premium fabric allows for fast drying, no odour, and comfort in every climate. Proudly created and designed with adidas for the #G2ARMY with love, this is the jersey G2 Pro Players will compete in throughout 2021."
                    tecido="100% Recycled Polyester technology"
                    img={g2prokitjersey20211}
                    img2={g2prokitjersey20212}
                    img3={g2prokitjersey20213}
                    img4={g2prokitjersey20214}
                />
            <Footer></Footer>
          </Route>

          
          <Route path="/P0000003">
            <Header></Header>
            <Produto2
                    id = "P0000003"
                    titulo="G2 Croatia Jersey 2020"
                    preco={60}
                    cor="Vermelho/Azul"
                    descricao="Iznad svih-Hrvatska! Celebrate your #G2ARMY and Croatian pride with the G2 Croatia Jersey"
                    tecido="100% Recycled Polyester technology"
                    img={g2croatiajersey1}
                    img2={g2croatiajersey2}
                    img3={g2croatiajersey3}
                    img4={g2croatiajersey4}
                />
            <Footer></Footer>
          </Route>

          
          <Route path="/P0000004">
            <Header></Header>
            <Produto2
                    id = "P0000004"
                    titulo="G2 Poland Jersey"
                    preco={60}
                    cor="Vermelho/Branco"
                    descricao="Polska Gurom! Show your Polish Pride with the 2020 G2 Poland Jersey. Designed around the national coat of arms, it’s made with love for our Polish fans."
                    tecido="100% Recycled Polyester technology"
                    img={g2polandjersey20201}
                    img2={g2polandjersey20202}
                    img3={g2polandjersey20203}
                    img4={g2polandjersey20204}
                />
            <Footer></Footer>
          </Route>

          
          <Route path="/P0000005">
            <Header></Header>
            <Produto2
                    id = "P0000005"
                    titulo="G2 Germany Jersey"
                    preco={60}
                    cor="Preto"
                    descricao="Für dich! Home to the G2 Headquarters, League of Legends and Rainbow Six Siege team, we’re excited to celebrate our German connection with our German Pro Player Jersey 2020. Developed with high quality, breathable anti-microbial polyester technology that optimises comfort by absorbing sweat away from the skin and drying quickly, so you can focus on what you do best! Showcasing the G2 logo on the chest, the jersey is modelled after the German tricolour."
                    tecido="100% Recycled Polyester technology"
                    img={g2germanyjersey20201}
                    img2={g2germanyjersey20202}
                    img3={g2germanyjersey20203}
                    img4={g2germanyjersey20204}
                />
            <Footer></Footer>
          </Route>

          
          <Route path="/P0000006">
            <Header></Header>
            <Produto2
                    id = "P0000006"
                    titulo="G2 Custom Pro Player Jersey 2020"
                    preco={80}
                    cor="Preto"
                    descricao="The must-have for all #G2ARMY members – The official stage jersey customized with YOUR name."
                    tecido="100% Recycled Polyester technology"
                    img={g2customproplayerjersey20201}
                    img2={g2customproplayerjersey20202}
                    img3={g2customproplayerjersey20203}
                    img4={g2customproplayerjersey20204}
                />
            <Footer></Footer>
          </Route>

          
          <Route path="/P0000007">
            <Header></Header>
            <Produto2
                    id = "P0000007"
                    titulo="G2 Pro Player Jersey 2020"
                    preco={60}
                    cor="Preto"
                    descricao="The official stage jersey for all G2 Esports players. Look, play, and win like the pros!"
                    tecido="100% Recycled Polyester technology"
                    img={g2proplayerjersey20201}
                    img2={g2proplayerjersey20202}
                    img3={g2proplayerjersey20203}
                    img4={g2proplayerjersey20204}
                />
            <Footer></Footer>
          </Route>

          
          <Route path="/P0000008">
            <Header></Header>
            <Produto2
                    id = "P0000008"
                    titulo="G2 Pro Player Hoodie 2020"
                    preco={70}
                    cor="Preto"
                    descricao="Stay cosy with the Pro Player Hoodie, worn by G2 players and creators around the world."
                    tecido="100% Recycled Polyester technology"
                    img={g2proplayerhoodie20201}
                    img2={g2proplayerhoodie20202}
                    img3={g2proplayerhoodie20203}
                    img4={g2proplayerhoodie20204}
                />

            <Footer></Footer>
          </Route>










          <Route path="/S0000001">
            <Header></Header>
            <Produto2
                    id = "S0000001"
                    titulo="G2 SAMURAI T-Shirt"
                    preco={30}
                    cor="Preto"
                    descricao="Be G2 all over with this uniquely designed G2 Samurai t-shirt."
                    tecido="Material: 100% Cotton"
                    img={g2samuraitshirtblack1}
                    img2={g2samuraitshirtblack2}
                    img3={g2samuraitshirtblack3}
                    img4={g2samuraitshirtblack4}
                />
            <Footer></Footer>
          </Route>


          <Route path="/S0000002">
            <Header></Header>
            <Produto2
                    id = "S0000002"
                    titulo="G2 SAMURAI Long Sleeve Tee"
                    preco={40}
                    cor="Preto"
                    descricao="Have the #G2ARMY always at your side with the stylish G2 SAMURAI Longsleeve Tee."
                    tecido="Material: 100% Cotton"
                    img={g2samurailongsleeveblack1}
                    img2={g2samurailongsleeveblack2}
                    img3={g2samurailongsleeveblack3}
                    img4={g2samurailongsleeveblack4}
                />
            <Footer></Footer>
          </Route>


          <Route path="/S0000003">
            <Header></Header>
            <Produto2
                    id = "S0000003"
                    titulo="G2 SAMURAI Hoodie"
                    preco={60}
                    cor="Preto"
                    descricao="Show your inner samurai with the G2 SAMURAI Collection Hoodie."
                    tecido="Material: 65% Cotton, 35% Polyester"
                    img={g2samuraihoodieblack1}
                    img2={g2samuraihoodieblack2}
                    img3={g2samuraihoodieblack3}
                    img4={g2samuraihoodieblack4}
                />
            <Footer></Footer>
          </Route>


          <Route path="/S0000004">
            <Header></Header>
            <Produto2
                    id = "S0000004"
                    titulo="G2 SAMURAI CODE Hoodie"
                    preco={60}
                    cor="Preto"
                    descricao="Stylish. Loyal. Proud. Show your #G2ARMY love with the G2 CODE Hoodie."
                    tecido="Material: 65% Cotton, 35% Polyester"
                    img={g2samuraicodehoodie1}
                    img2={g2samuraicodehoodie2}
                    img3={g2samuraicodehoodie3}
                    img4={g2samuraicodehoodie4}
                />
            <Footer></Footer>
          </Route>












          <Route path="/H0000001">
            <Header></Header>
            <Produto3
                    id = "H0000001"
                    titulo="Logitech G Pro X Wireless Headset"
                    preco={690}
                    descricao="PRO X WIRELESS headset joins a complete setup of pro-grade gear developed in collaboration with the world’s top esports pros. All Logitech G PRO gear features our most advanced technologies designed with a single purpose: to help you win."
                    img={logitechgproxwirelessheadset1}
                    img2={logitechgproxwirelessheadset2}
                    img3={logitechgproxwirelessheadset3}
                    img4={logitechgproxwirelessheadset4}
                />
            <Footer></Footer>
          </Route>

          <Route path="/H0000002">
            <Header></Header>
            <Produto3
                    id = "H0000002"
                    titulo="Secretlab Omega 2020 G2 Edition"
                    preco={1700}
                    descricao="Engineered for peak gaming performance, made for G2 Esports—Europe’s best who came the closest-ever to a historic League of Legends Grand Slam. Now you can enjoy the same winning comfort as the #G2ARMY."
                    img={secretlabomega2020g2edition1}
                    img2={secretlabomega2020g2edition2}
                    img3={secretlabomega2020g2edition3}
                    img4={secretlabomega2020g2edition4}
                />
            <Footer></Footer>
          </Route>

          <Route path="/H0000003">
            <Header></Header>
            <Produto3
                    id = "H0000003"
                    titulo="Secretlab Titan 2020 G2 Edition"
                    preco={1900}
                    cor="Preto"
                    descricao="The larger cousin of the Secretlab OMEGA. The Secretlab TITAN is renowned for its ample space in addition to customization at the highest level. To give you greater comfort, support, reliability and personalization, the new 2020 Series features multiple improvements that will exceed the expectations of even the most discerning. For an uncompromising experience that lasts for endless hours, this elite award-winning chair is unquestionably the gold standard you need."
                    img={secretlabtitan2020g2edition1}
                    img2={secretlabtitan2020g2edition2}
                    img3={secretlabtitan2020g2edition3}
                    img4={secretlabtitan2020g2edition4}
                />
            <Footer></Footer>
          </Route>

          <Route path="/H0000004">
            <Header></Header>
            <Produto3
                    id = "H0000004"
                    titulo="Z490 AORUS ULTRA G2"
                    preco={450}
                    descricao="The GIGABYTE Z490 AORUS ULTRA G2 uses a 12-phase digital power design and tantalum capacitor array for strong and stable power delivery. For aggressive cooling, the motherboard’s VRM cooling uses Fins-Array II, Direct-Touch Heat Pipes II, and 7.5W/mK LAIRD thermal conductivity pad."
                    img={z490aorusultrag21}
                    img2={z490aorusultrag22}
                    img3={z490aorusultrag23}
                    img4={z490aorusultrag24}
                />
            <Footer></Footer>
          </Route>












          <Route path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>


        </Switch>
      </div>


    </Router>
  );
}

export default App;
