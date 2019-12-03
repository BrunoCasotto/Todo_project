import axios from 'axios'
import { registerPath } from './../config'

export const signIn = async ({ email, password }, auth) => {
  return await auth.loginWith('local', {
    data: {
      email,
      password
    }
  })
}

export const signUp = async ({ name, email, password }, auth) => {
  const { data } = await axios.post(registerPath, {
    name,
    email,
    password
  })

  if(data.token) {
    await auth.setUserToken(data.token)
  }
}
