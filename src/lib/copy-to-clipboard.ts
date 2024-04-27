import { toast } from '@/components/ui/use-toast'

export const copyToClipboard = (text: string, type?: string) => {
  navigator.clipboard.writeText(text)
  toast({
    description: `${type ?? ''} copied to clipboard.`
  })
}
