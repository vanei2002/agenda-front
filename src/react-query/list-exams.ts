 
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const timeCache = 1000 * 60 * 5 

export interface ExamsProps {
  id: string 
  name: string
  description: string
  specialty: string
  averageDuration: string
  notes: string
}

const listExams = async () => {
  const response = await axios.get(`${import.meta.env.VITE_MICROSERVICE}/exams`)
  return response.data.data
}

export const useListExams = () => {
  return useQuery<ExamsProps[], AxiosError>(
    ['listAllExams'],
    () => listExams(),
    {
      keepPreviousData: true,
      staleTime: timeCache,
    }
  )
}
