export interface Page {
  slug: string,
  title: string,
  label: string
}

export interface MainPage extends Page {
  slug: 'shop' | 'cart' | 'backoffice' | 'support',
  main?: string
}

export interface SubPage extends Page {
  slug: string
  sub?: string
}
