import { auth } from '~/assets/js/config/paths'

export const signIn = async ({ email, password }, authService) => {
  return await authService.loginWith('local', {
    data: {
      email,
      password
    }
  })
}

export const signUp = async ({ name, email, password }, authService, axiosService) => {
  const { data } = await axiosService.post(auth.register, {
    name,
    email,
    password,
  })

  if(data.token) {
    await authService.setUserToken(data.token)
  }
}
