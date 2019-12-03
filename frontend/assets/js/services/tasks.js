import { taskPath } from './../config'

export const getAllTasks = async ( axios ) => {
  const { data } = await axios.get(taskPath, {})
  return data
}

