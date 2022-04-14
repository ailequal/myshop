export interface Page {
  slug: string,
  title: string
}

export interface MainPage extends Page {
  main: string
}

export interface SubPage extends Page {
  sub: string
}
