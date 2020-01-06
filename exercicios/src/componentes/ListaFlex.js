import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: "João", nota: 7.6 },
    { id: 2, nome: "André", nota: 8 },
    { id: 3, nome: "Tiago", nota: 9 },
    { id: 4, nome: "Bruno", nota: 6 },
    { id: 5, nome: "Rafael", nota: 8.5 },
    { id: 6, nome: "Emerson", nota: 4 },
    { id: 7, nome: "Gustavo", nota: 3 },
    { id: 8, nome: "Wagner", nota: 7.6 },
    { id: 9, nome: "Kiko", nota: 1 },

    { id: 11, nome: "João", nota: 7.6 },
    { id: 12, nome: "André", nota: 8 },
    { id: 13, nome: "Tiago", nota: 9 },
    { id: 14, nome: "Bruno", nota: 6 },
    { id: 15, nome: "Rafael", nota: 8.5 },
    { id: 16, nome: "Emerson", nota: 4 },
    { id: 17, nome: "Gustavo", nota: 3 },
    { id: 18, nome: "Wagner", nota: 7.6 },
    { id: 19, nome: "Kiko", nota: 1 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: "#DDD",
    borderWidth: 0.5,
    borderColor: "#222",

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => <Aluno {...item} />

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}