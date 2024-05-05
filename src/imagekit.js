import 'dotenv/config'
import { join } from 'path'
import ImageKit from 'imagekit'
import { existsSync, readFileSync, writeFileSync } from 'fs'

var imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
})

export async function getImages() {
  const jsonPath = join(process.cwd(), 'src', 'cached_response.json')
  if (existsSync(jsonPath)) return JSON.parse(readFileSync(jsonPath, 'utf8'))
  const tmp = await imagekit.listFiles({
    skip: 0,
    limit: 999,
  })
  const arian = tmp.filter((i) => i.url.includes('/projects/'))
  writeFileSync(jsonPath, JSON.stringify(arian), 'utf8')
  return arian
}
