import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Principal from "./components/Principal";
import Sobre from "./components/Sobre";
import OutrosJogos from "./components/OutrosJogos";
import Resultado from "./components/Resultado";

const Rotas = () => (
	 <Router
        navigationBarStyle={{ backgroundColor: "#61BD8C" }}
        titleStyle={{ color: "white" }}
      >
        <Scene key="root">
          <Scene
            key="Principal"
            component={Principal}
            initial
            title="Cara ou coroa"
          />
          <Scene key="Sobre" component={Sobre} title="Sobre o jogo!" />
          <Scene
            key="OutrosJogos"
            component={OutrosJogos}
            title="Outros jogos"
          />
          <Scene key="Resultado" component={Resultado} title="Resultado!" />
        </Scene>
      </Router>
);

export defaut Rotas;