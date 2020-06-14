import { api } from './utils/api'
import { parser, Lines, ParsedLines } from './utils/parser'

export const metroStatus = async (): Promise<ParsedLines> => {
  const { data }: { data: Lines } = await api('GetAllSituacao')
  return parser(data)
}
