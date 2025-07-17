import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input" 
import type { ExamsProps } from "../../react-query/list-exams"
import { useCreateAppointments } from "../../react-query/create-appointments"

const schema = z.object({
  date: z.string().min(1, "A data é obrigatória"),
  time: z.string().min(1, "O horário é obrigatório"),
  notes: z.string().optional()
})

type FormData = z.infer<typeof schema>

interface ModalProps {
  open: boolean
  setOpen: (value: boolean) => void
  exams: ExamsProps
}

export const Modal = ({ open, setOpen, exams }: ModalProps) => {

  const {mutateAsync} = useCreateAppointments()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    await mutateAsync({ ...data, examId: exams.id })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agendar Exame</DialogTitle>
          <DialogDescription>
            Preencha os dados para confirmar o agendamento.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <p>Exame: <strong>{exams.name}</strong></p>

            <div className="flex flex-col gap-2">
              <label>Data do exame</label>
              <Input type="date" {...register("date")} />
              {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label>Horário</label>
              <Input type="time" {...register("time")} />
              {errors.time && <span className="text-red-500 text-sm">{errors.time.message}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label>Observações</label>
              <Textarea
                className="max-h-[200px]"
                placeholder="Digite alguma observação (opcional)"
                {...register("notes")}
              />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              Cancelar
            </Button>

            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
