import type { ReactElement } from 'react'

export interface PreviewProvider {
  (): ReactElement[] | ReactElement
}
