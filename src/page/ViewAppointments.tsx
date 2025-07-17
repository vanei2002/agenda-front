import { Table, TableBody,  TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ModalConfirmation } from "../components/ModalConfirmation/ModalConfirmation";
import { useState } from "react";
import {  useListAppointments } from "../react-query/list-appointments";
import { useDeleteAppointments } from "../react-query/delete-appointments";



 



export function ViewAppointments(){ 
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [appointmentId, setAppointmentId] = useState('')

    const {data, isLoading, refetch, isFetching} = useListAppointments()

  const {mutateAsync} = useDeleteAppointments()
  const excludedAppointment = async () => {
    await mutateAsync({appointmentId})
    setOpen(false)
  }
  return<div className="max-w-[80%] m-auto p-10">

  <div className="flex justify-between mb-10">

  <div>
    <h1 className="text-2xl font-black">Meus Agendamentos</h1>
    <p>Clique em um dos agendamentos da lista para exclui-lo.</p>
  </div>
  
 <div className="flex ml-auto gap-2.5">
   <Button className="cursor-pointer" onClick={() => navigate('/')}>
    Voltar Para Exames
  </Button>

    <Button disabled={isFetching} className="cursor-pointer" onClick={() => refetch()}>
    Atualizar Lista
  </Button>
 </div>
  </div>
  <Table>


  <TableHeader>
    <TableRow>
      <TableHead >Indentificador</TableHead>
      <TableHead>Tipo do Exame</TableHead>
      <TableHead>Data de agendamento</TableHead>
      <TableHead>Observações</TableHead>

    </TableRow>
  </TableHeader>
  <TableBody>
    {!isLoading  ? 
      data && data.length > 1 ? data?.map((appointment) =>    <TableRow onClick={() => {
        setOpen(true)
        setAppointmentId(appointment.id)
      }} key={appointment.id} className="cursor-pointer">
      <TableCell>{appointment.id}</TableCell>
      <TableCell>{appointment.exam.name}</TableCell>
        <TableCell>
        {new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'short',
          timeStyle: 'short'
        }).format(new Date(appointment.date))}
      </TableCell>
      <TableCell>{appointment.note}</TableCell>
    </TableRow> ) :  <p className="p-4 font-black w-auto" >Nenhum dado encontrado</p>: <p className="p-4 font-black w-auto" >Carregando dados ...</p>
    }

  </TableBody>
</Table>

  {open && (
    <ModalConfirmation
      confirmation={excludedAppointment}
      title="Excluir Agendamento"
      description="Atenção: este agendamento será excluído e não será possível reverter a ação após a confirmação."
      open={open}
      setOpen={setOpen}
    />
  )}
  </div>
}