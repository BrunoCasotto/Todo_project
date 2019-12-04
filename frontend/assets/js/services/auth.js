import axios from 'axios'
import { auth } from '~/assets/js/config/paths'

export const signIn = async ({ email, password }, authService) => {
  return await authService.loginWith('local', {
    data: {
      email,
      password
    }
  })
}

export const signUp = async ({ name, email, password }, authService) => {
  const { data } = await axios.post(auth.register, {
    name,
    email,
    password,
  })

  if(data.token) {
    await authService.setUserToken(data.token)
  }
}
