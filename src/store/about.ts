import { Store } from "../core/heropy";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'JASMINE / HAN YONGWOON',
  email: 'hanyw6401@gmail.com',
  blog: 'https://github.com/Jasmine-YongWoon',
  github: 'https://github.com/Jasmine-YongWoon/movie-app',
  repository: 'https://github.com/Jasmine-YongWoon/movie-app'
})