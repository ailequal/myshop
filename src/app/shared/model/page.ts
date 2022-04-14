export interface Page {
  slug: string,
  title: string
}

export interface MainPage extends Page {
  slug: 'shop' | 'cart' | 'backoffice',
  main: string
}

export interface SubPage extends Page {
  sub: string
}
