import { blob } from 'hub:blob'

export default defineEventHandler(async (event) => {
  const pathname = getRouterParam(event, 'pathname')
  return blob.serve(event, pathname!)
})
