export const formatCPForCNPJ = (text: string) => {
  const data = text.replace(/[^\d]/g, '')
  return text?.length === 11
    ? data.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    : data.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export const formatFloatValues = (text: string | number) => {
  return String(text).replace(',', '.')
}

export const formatBrazilianPhone = (phone: string) => {
  const value = phone.replace(/[^\d]/g, '')
  return phone?.length === 10
    ? value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    : value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const zipCodeBrazilianFormat = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2')
}

export const BRLFormat = (value: string | number): string => {
  const config = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return config.format(Number(value))
}
