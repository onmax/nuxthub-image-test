import { blob } from 'hub:blob'

export default defineEventHandler(async (event) => {
  const form = await readFormData(event)
  const file = form.get('file') as File
  if (!file)
    throw createError({ statusCode: 400, message: 'No file' })

  const result = await blob.put(file.name, file, { contentType: file.type })
  return { pathname: result.pathname }
})
