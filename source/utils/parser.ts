export type Line = {
  Atualizacao: string
  Codigo: string
  Cor: string
  Descricao: string
  Estacao1?: string
  Estacao2?: string
  Geracao: string
  Id: string
  MensagemSituacao?: string
  Nome: string
  Posicao: string
  StatusOperacao: string
  Tipo: string
  Title: string
}

export type Lines = Line[]

export type ParsedLines = {
  updatedAt: string
  code: string
  color: string
  description: string
  id: string
  status: string
  type: string
  name: string
}[]

export const parser = (payload: Lines): ParsedLines => {
  return payload.map((line: Line) => {
    return {
      updatedAt: line.Atualizacao,
      code: line.Codigo,
      color: line.Cor,
      description: line.Descricao,
      id: line.Id,
      status: line.StatusOperacao,
      type: line.Tipo,
      name: line.Nome
    }
  })
}
