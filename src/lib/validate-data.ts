export const validateUrl = (url: string) => {
  try {
    // eslint-disable-next-line no-new
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}
export const validateEmail = (value: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(value.toLowerCase())
}

export const validateCPForCNPJ = (value: string | number) => {
  const validateValue = value.toString().replace(/[^\d]+/g, '')
  if (validateValue.length === 14) return validateCNPJ(validateValue)
  if (validateValue.length === 11) return validateCPF(validateValue)
  return false
}
export const validateCPF = (value: string | number) => {
  value = value.toString().replace(/[^\d]+/g, '')

  const invalidCPFData = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]
  // Elimina CPFs invalidos conhecidos
  if (invalidCPFData.includes(value) || value === '' || value.length !== 11) {
    return false
  }
  // Valida 1o digito
  let add = 0
  for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i)
  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(value.charAt(9))) return false
  // Valida 2o digito
  add = 0
  for (let i = 0; i < 10; i++) add += parseInt(value.charAt(i)) * (11 - i)
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(value.charAt(10))) return false
  return true
}
export const validateCNPJ = (value: string | number) => {
  value = value.toString().replace(/[^\d]+/g, '')

  const invalidCNPJData = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999'
  ]
  // Elimina CNPJs inválidos conhecidos
  if (invalidCNPJData.includes(value) || value.length !== 14 || value === '') {
    return false
  }

  // Valida DVs
  let tamanho = value.length - 2
  let numeros = value.substring(0, tamanho)
  const digitos = value.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += +numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== +digitos.charAt(0)) return false

  tamanho = tamanho + 1
  numeros = value.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += +numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado === +digitos.charAt(1)) return false

  return true
}
