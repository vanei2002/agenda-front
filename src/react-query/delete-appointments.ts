import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { queryClient } from '../main'

export interface DeleteAppointmentFormData {
  appointmentId: string
}

const deleteAppointment = async ({ appointmentId }: DeleteAppointmentFormData): Promise<void> => {
  await axios.delete(`${import.meta.env.VITE_MICROSERVICE}/appointments/${appointmentId}`)
}

export const useDeleteAppointments = () => {
  return useMutation<void, AxiosError, DeleteAppointmentFormData>({
    mutationFn: deleteAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listAllAppointments'] })
    },
  })
}
