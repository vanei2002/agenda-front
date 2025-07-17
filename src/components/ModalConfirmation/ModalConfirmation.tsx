import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"

interface ModalConfirmationProps {
  open: boolean
  setOpen: (value: boolean) => void
  description: string
  title: string
  confirmation: () => void
}

export const ModalConfirmation = ({ open, setOpen ,description, title, confirmation}: ModalConfirmationProps) => {


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>


          <div className="flex justify-between mt-4">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              Cancelar
            </Button>

            <Button onClick={confirmation}>Salvar</Button>
          </div>
      </DialogContent>
    </Dialog>
  )
}
