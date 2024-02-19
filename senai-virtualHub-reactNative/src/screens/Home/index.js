import { StatusBar } from "react-native"
import { Header } from "../../components/Header"
import { CalendarHome } from "../../components/CalendarHome"
import { AbsListAppointment } from "../../components/AbsListAppointment"
import { Container, FilterAppointment } from "../../components/Container/style"
import { useState } from "react"

const Consultas = [
    {id:1 , nome: 'Carlos', situacao: 'pendente'},
    {id:2 , nome: 'Evelin', situacao: 'realizado'},
    {id:3 , nome: 'Kamille', situacao: 'cancelado'},
    {id:4 , nome: 'Allan', situacao: 'realizado'},
    {id:5 , nome: 'Eva', situacao: 'cancelado'},
]

export const Home = () => {

    const[statusLista, setStatusLista] = useState("pendente");

    return(
        <Container>
            
            <StatusBar/>

            {/* Header */}
            <Header/>

            {/* Calendar */}
            <CalendarHome/>

            {/* Filtros (button) */}
                {/* Container */}
            <FilterAppointment>
                {/* Botões */}
                <AbsListAppointment
                    textButton={'Agendadas'}
                    clickButton={statusLista === 'pendente'}
                    onPress={() => setStatusLista('pendente')}
                />
                <AbsListAppointment
                    textButton={'Realizadas'}
                    clickButton={statusLista === 'realizado'}
                    onPress={() => setStatusLista('realizado')}
                />
                <AbsListAppointment
                    textButton={'Canceladas'}
                    clickButton={statusLista === 'cancelado'}
                    onPress={() => setStatusLista('cancelado')}
                />
                
            </FilterAppointment>

            {/* Cards */}
            
        </Container>

    )
}