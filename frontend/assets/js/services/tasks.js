import { task } from '~/assets/js/config/paths'

export const getAllTasks = async ( axios ) => {
  const { data } = await axios.get(task.all, {})
  return data
}

