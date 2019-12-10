import { taskPath } from '~/assets/js/config/paths'

export const getAllTasks = async ( axios ) => {
  const { data } = await axios.get(taskPath.all, {})
  return data
}

export const createTask = async ( task, axios ) => {
  const { data } = await axios.post(taskPath.save, task)
  return data
}

export const removeTask = async ( id, axios ) => {
  const apiPath = taskPath.remove.replace('[[ID]]', id)
  const { data } = await axios.delete(apiPath)
  return data
}

export const updateTask = async ( task, id, axios ) => {
  const apiPath = taskPath.update.replace('[[ID]]', id)
  const { data } = await axios.put(apiPath, task)
  return data
}

