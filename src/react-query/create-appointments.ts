import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { queryClient } from '../main'

export interface CreateAppointmentFormData {
  examId: string
  date: string
  time: string
  notes?: string
}

export interface AppointmentResponse {
  id: string
  date: string
  note: string | null
  examId: string
  createdAt: string
  updatedAt: string
}

const createAppointment = async (data: CreateAppointmentFormData): Promise<AppointmentResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_MICROSERVICE}/appointments`, data)
  return response.data
}

export const useCreateAppointments = () => {
  return useMutation<AppointmentResponse, AxiosError, CreateAppointmentFormData>({
    mutationFn: createAppointment,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['listAllAppointments'] })
    },
  })
}
