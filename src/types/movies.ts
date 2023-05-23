export type MovieItem = {
  id: number
  title: string
  release_date: string
  director: string
  opening_crawl: string
}

export type MovieItemKeys = 'title' | 'release_date' | 'director' | 'opening_crawl';

export type DefaultError = {
  name: string
  message: string
  code: number
  type: string
}