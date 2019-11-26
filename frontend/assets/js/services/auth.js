import axios from 'axios'
import { backendHost, authenticatePath } from './../config'

export const singIn = async ({ email, password }) => {
  const url = `${backendHost}/${authenticatePath}`
  try {
    const authorization = await axios.post(url, {
      email,
      password
    })

    return true
  } catch (error) {
    return false
  }
}
