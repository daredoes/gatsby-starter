import { BASE_URL, BASE_EXAMPLE_URL } from './config'

export const toExampleUrl = (exampleId: number | string) => {
  return `${BASE_URL}${BASE_EXAMPLE_URL}/${exampleId}`
}
