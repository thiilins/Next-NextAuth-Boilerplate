import Link from 'next/link'
import { HorizontalLogoSvg } from './svgs/logo-horizontal'

export const HorizontalLogo = ({ url }: { url?: string }) => (
  <Link href={url ?? '/'}>
    <HorizontalLogoSvg />
  </Link>
)
