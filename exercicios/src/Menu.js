import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import { Inverter } from './componentes/Multi'
import MegaSena from './componentes/MegaSena'

export default createDrawerNavigator({
    MegaSena: {
        screen: <MegaSena numeros={6}/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: <Inverter texto="React Native!" />
    },
    ParImpar: {
        screen: <ParImpar numero={2} />,
        navigationOptions: { title: 'Par ou Ímpar' }
    },
    Simples: {
        screen: <Simples texto="Flexível!!!" />
    }
}, { drawerWidth: 300 })