import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export const convertJSONToExcel = (content: object[], name: string) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  const ws = XLSX.utils.json_to_sheet(content)
  const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
  const data = new Blob([excelBuffer], { type: fileType })
  FileSaver.saveAs(data, `${name}.xlsx`)
}

export const convertExcelToJSON = async (file: File) => {
  const promise = new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    fileReader.onload = async e => {
      const bufferArray = e?.target?.result
      const wb = XLSX.read(bufferArray, { type: 'buffer' })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      const data = XLSX.utils.sheet_to_json(ws)
      resolve(data)
    }
    fileReader.onerror = error => {
      reject(error)
    }
  })
  return await promise
}
