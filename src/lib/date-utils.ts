import { addDays } from 'date-fns'
export const compareDate = (
  type: 'min' | 'max' | 'minMax',
  value: string,
  { min = '1500-01-01', max = '3000-01-01' }
) => {
  const dateMin = new Date(`${min} 00:00:00`)
  const dateMax = new Date(`${max} 00:00:00`)
  const date = new Date(`${value} 00:00:00`)
  const isMin = date < dateMin
  const isMax = date > dateMax
  switch (type) {
    case 'min':
      return isMin
        ? { date: min, error: true, type: 'min' }
        : { date: value, error: false, type: '' }
    case 'max':
      return isMax
        ? { date: max, error: true, type: 'max' }
        : { date: value, error: false, type: '' }
    case 'minMax':
      return isMin || isMax
        ? isMin
          ? { date: min, error: true, type: 'min' }
          : { date: max, error: true, type: 'max' }
        : { date: value, error: false, type: '' }
  }
}
const countDaysInterval = (dateInitial: string, dateFinal: string) => {
  if (dateInitial === '' || dateFinal === '') {
    return '0'
  }
  const now = new Date(dateInitial)
  const past = new Date(dateFinal)
  const diff = Math.abs(now.getTime() - past.getTime())
  return Math.ceil(diff / (1000 * 60 * 60 * 24)).toString()
}

function checkIsBetweenTwoDates(
  dateFrom?: string,
  dateTo?: string,
  dateCheck?: string
) {
  if (dateFrom === undefined || dateTo === undefined) {
    return false
  }

  const from = new Date(dateFrom)
  const to = addDays(new Date(dateTo), 1)
  const check = dateCheck ? addDays(new Date(dateCheck), 1) : new Date()

  return check > from && check < to
}

export const today = new Intl.DateTimeFormat('fr-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).format(Date.now())

export const formatDate = (
  value: string | number,
  locale = 'pt-BR',
  options?: Intl.DateTimeFormatOptions
) => {
  const config = new Intl.DateTimeFormat(locale, { ...options })
  const newDate = new Date(`${value.toString().slice(0, 10)} 00:00:00`)
  return config.format(newDate)
}
