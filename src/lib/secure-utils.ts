export const slugifyText = (text: string) => {
  return (
    text
      // Converte para minúsculas
      .toLowerCase()
      // Remove tudo que não for letra ou espaço por um espaço
      .replace(/[^a-z0-9\s]/g, ' ')
      // Substitui espaços múltiplos e hífens por um único espaço
      .replace(/[\s-]+/g, ' ')
      // Substitui espaços por hífen
      .replace(/\s+/g, '-')
      // Remove hífens múltiplos consecutivos
      .replace(/-+/g, '-')
  )
}

export const sanitizeUrl = (url: string) => {
  // Converte para minúsculas e remove caracteres indesejados, mantendo caracteres válidos para URLs
  return (
    url
      .toLowerCase()
      // Permitir letras, números e caracteres especiais válidos em URLs
      .replace(/[^a-z0-9\-._~:/?#[\]@!$&'()*+,;=%]/g, '')
  )
}

export const preventSpecialCharacters = (value: string) => {
  return value.replace(/[!@#$%^&*]/g, '').replace(/\s/g, '')
}
