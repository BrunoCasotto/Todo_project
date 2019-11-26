import axios from 'axios'
import { backendHost, authenticatePath } from './../../../config'

export const singIn = async ({ email, password }) => {
  const url = `http://localhost:4000/auth/authenticate`
  try {
    const authorization = await axios.post(url, {
      data: {
        email,
        password
      }
    })

    console.log(authorization)
    return true
  } catch (error) {
    return false
  }
}