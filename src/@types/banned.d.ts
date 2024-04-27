interface IBannedDefaultValues extends DefaultValuesFromDb {
  id: string
  banned_by?: string
  for_all: boolean
  company?: string
}

interface IBannedEmail extends IBannedDefaultValues {
  email: string
}

interface IBannedDomain extends IBannedDefaultValues {
  domain: string
}
