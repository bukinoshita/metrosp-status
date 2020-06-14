import axios, { AxiosError, AxiosResponse } from 'axios'
import { Lines } from './parser'

const api = axios.create({
  baseURL: 'https://www.viamobilidade.com.br/_vti_bin/SituacaoService.svc',
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.response.use(
  (response: AxiosResponse<{ data: Lines }>) => {
    return response
  },
  (error: AxiosError) => Promise.reject(error)
)

export { api }
