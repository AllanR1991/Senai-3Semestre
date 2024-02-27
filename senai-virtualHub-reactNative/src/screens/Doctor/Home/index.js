import { StatusBar } from "expo-status-bar"
import { Header } from "../../../components/Header"
import { CalendarHome } from "../../../components/CalendarHome"
import { AbsListAppointment } from "../../../components/AbsListAppointment"
import { Container, FilterAppointment } from "../../../components/Container/style"
import { useState } from "react"
import { ListComponent } from "../../../components/List/style"
import { AppointmentCard } from "../../../components/AppointmentCard"
import { CancelationModal } from "../../../components/CancelationModal"

const Consultas = [
    { id: 1, nome: 'Carlos', age: 45, consulta: 'Exame', situacao: 'pendente', image: 'https://github.com/Carlos-Augusto-Roque.png' },
    { id: 2, nome: 'Evelin', age: 18, consulta: 'Exame', situacao: 'realizado', image: 'https://github.com/evy-oliveira0807.png' },
    { id: 3, nome: 'Kamille', age: 20, consulta: 'Exame', situacao: 'cancelado', image: 'https://github.com/KamiMilo.png' },
    { id: 4, nome: 'Allan', age: 32, consulta: 'Exame', situacao: 'realizado', image: 'https://github.com/AllanR1991.png' },
    { id: 5, nome: 'Eva', age: 45, consulta: 'Exame', situacao: 'cancelado', image: '' },
]

export const Home = (navigation) => {

    const [statusLista, setStatusLista] = useState("pendente");

    // State para os modais

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showAppointment, setShowAppointment] = useState(false);


    return (
        <Container>

            <StatusBar style="light" />

            {/* Header */}
            <Header />

            {/* Calendar */}
            <CalendarHome />

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

            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (
                        <AppointmentCard
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowAppointment(true)}
                            nome={item.nome}
                            idade={item.age}
                            consulta={item.consulta}
                            image={item.image}
                            situacao={item.situacao}
                        />
                    )
                }
            />

            <CancelationModal
                navigation={navigation}
                visible={showModalCancel}
                setShowCancel={setShowModalCancel}
            />
        </Container>


    )
}