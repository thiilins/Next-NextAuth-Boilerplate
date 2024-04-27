import Link from 'next/link'
import { VerticalLogoSvg } from './svgs/logo-vertical'
export const VerticalLogo = ({ url }: { url?: string }) => (
  <Link href={url ?? '/'}>
    <VerticalLogoSvg className="p-3 dark:text-white" />
  </Link>
)
