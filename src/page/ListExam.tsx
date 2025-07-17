import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import {  useListExams, type ExamsProps } from "../react-query/list-exams";



export function ListExam(){ 
    const [open, setOpen] = useState(false)
    const {data, isLoading} = useListExams()
    const [ exams,setExams] = useState<ExamsProps>(null!)

    const navigate = useNavigate()

  return<div className="max-w-[80%] m-auto p-10">

  <div className="flex justify-between mb-10">

  <div>
    <h1 className="text-2xl font-black">Exames Clinicos </h1>
    <p>Clique em um dos exames da lista para realizar o agendamento.</p>
  </div>
  
  <Button className="cursor-pointer" onClick={() => navigate('/agendamentos')}>
    Acompanhar Agendamentos
  </Button>


  </div>
  <Table>

  <TableCaption>Procedimento Disponiveis.</TableCaption>

  <TableHeader>
    <TableRow>
      <TableHead >Indentificador</TableHead>
      <TableHead>Nome do Exame</TableHead>
      <TableHead>Descrição</TableHead>
      <TableHead>Especialidade médica</TableHead>
      <TableHead >Tempo medio</TableHead>
      <TableHead >Notas</TableHead>

    </TableRow>
  </TableHeader>
  <TableBody>
    { !isLoading  ? 
       data && data?.length > 1 ? data?.map((exam) =>    <TableRow key={exam.id} className="cursor-pointer" onClick={()=> {
        setOpen(true) 
        setExams(exam)
      }}>
      <TableCell className="font-medium">{exam.id}</TableCell>
      <TableCell>{exam.name}</TableCell>
      <TableCell>{exam.description}</TableCell>
      <TableCell>{exam.specialty}</TableCell>
      <TableCell>{exam.averageDuration}</TableCell>
      <TableCell>{exam.notes}</TableCell>
    </TableRow> ) :  <p className="p-4 font-black w-auto" >Nenhum dado encontrado</p>
     : <p className="p-4 font-black w-auto" >Carregando dados ...</p>}

  </TableBody>
</Table>

  {open &&  <Modal open={open}setOpen={()=> setOpen( false)} exams={exams}/> }

  </div>
}