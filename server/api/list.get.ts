import { blob } from 'hub:blob'

export default defineEventHandler(async () => {
  const result = await blob.list()
  return { blobs: result.blobs }
})
