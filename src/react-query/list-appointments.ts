import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const timeCache = 1000 * 60 * 5 // 5 minutes

export interface AppointmentsProps {
  id: string 
  exam: {
    name: string
  }
  date: string
  note: string
}

const listAppointments = async (): Promise<AppointmentsProps[]> => {
  const response = await axios.get(`${import.meta.env.VITE_MICROSERVICE}/appointments`)
  return response.data.data
}

export const useListAppointments = () => {
  return useQuery<AppointmentsProps[], AxiosError>(
    ['listAllAppointments'],
    () => listAppointments(),
    {
      keepPreviousData: true,
      staleTime: timeCache,
    }
  )
}
