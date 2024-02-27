import { StatusBar } from "expo-status-bar"
import { Header } from "../../../components/Header"
import { CalendarHome } from "../../../components/CalendarHome"
import { AbsListAppointment } from "../../../components/AbsListAppointment"
import { Container, FilterAppointment } from "../../../components/Container/style"
import { useState } from "react"
import { ListComponent } from "../../../components/List/style"
import { AppointmentCard } from "../../../components/AppointmentCard"
import { CancelationModal } from "../../../components/CancelationModal"
import { Title } from "../../../components/Title"
import { ClinicCard } from "../../../components/ClinicCard"

const ClinicData = [
    { id: 1, name: 'Clinica X', adress: 'São Paulo - SP', stars: 5, open: 'Seg-Sexta', select: false },
    { id: 2, name: 'Clinica X', adress: 'São Paulo - SP', stars: 5, open: 'Seg-Sexta', select: false },
    { id: 3, name: 'Clinica X', adress: 'São Paulo - SP', stars: 5, open: 'Seg-Sexta', select: false },
]

export const ConsultClinc = (navigation) => {

    const [statusLista, setStatusLista] = useState("pendente");

    // State para os modais

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showAppointment, setShowAppointment] = useState(false);


    return (
        <Container>

            <StatusBar style="light" />

            <Title text="Selecionar clínica" />

            {/* Cards */}

            <ListComponent
                data={ClinicData}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                (
                    <ClinicCard
                        onPressCancel={() => setShowModalCancel(true)}
                        onPressAppointment={() => setShowAppointment(true)}
                        nome={item.name}
                        adress={item.adress}
                        stars={item.stars}
                        open={item.open}
                        select={item.select}
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