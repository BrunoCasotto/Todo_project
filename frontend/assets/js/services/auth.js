import { auth, passwordPath } from '~/assets/js/config/paths'

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

export const sendResetPasswordEmail = async ({ email }, axiosService) => {
  return axiosService.post(passwordPath.forgot, {
    email,
    resetUrl: 'http://localhost:3000/reset-password'
  })
}

export const resetPassword = async ({ password, token, email }, axiosService) => {
  return axiosService.post(passwordPath.reset, {
    password,
    token,
    email,
  })
}
