import axios from 'axios'
import { backendHost, registerPath } from './../config'

export const signIn = async ({ email, password }, auth) => {
  return await auth.loginWith('local', {
    data: {
      email,
      password
    }
  })
}

export const signUp = async ({ name, email, password }, auth) => {
  const url = `${backendHost}/${registerPath}`
  const { data } = await axios.post(url, {
    name,
    email,
    password
  })

  if(data.token) {
    await auth.setUserToken(data.token)
  }
}
