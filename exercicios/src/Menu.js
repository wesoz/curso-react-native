import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import AddNum from './componentes/AddNum'

export default createDrawerNavigator({
    AddNum: {
        screen: AddNum
    },
    ListaFlex: {
        screen: ListaFlex
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: "Texto Sincronizado" }
    },
    Avo: {
        screen: () => <Avo nome="João" sobrenome="Silva" />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Year: " ano={20} />
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={10} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6}/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Native!" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={2} />,
        navigationOptions: { title: 'Par ou Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto="Flexível!!!" />
    }
}, { drawerWidth: 300 })