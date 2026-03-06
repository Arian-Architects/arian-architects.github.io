import 'dotenv/config'
import { join } from 'path'
import ImageKit from 'imagekit'
import { existsSync, readFileSync, writeFileSync } from 'fs'

export async function getImages() {
  const jsonPath = join(process.cwd(), 'src', 'cached_response.json')
  if (existsSync(jsonPath)) return JSON.parse(readFileSync(jsonPath, 'utf8'))
  // const imagekit = new ImageKit({
  //   publicKey: process.env.PUBLIC_KEY,
  //   privateKey: process.env.PRIVATE_KEY,
  //   urlEndpoint: process.env.IMAGEKIT_URL,
  // })
  // const tmp = await imagekit.listFiles({
  //   skip: 0,
  //   limit: 999,
  // })
  // const arian = tmp.filter((i) => i.url.includes('/projects/'))
  const arian = []
  const imagekit_jain71 = new ImageKit({
    publicKey: process.env.PUBLIC_KEY_JAIN71,
    privateKey: process.env.PRIVATE_KEY_JAIN71,
    urlEndpoint: process.env.IMAGEKIT_URL_JAIN71,
  })
  const tmp_jain71 = await imagekit_jain71.listFiles({
    skip: 0,
    limit: 999,
  })
  writeFileSync(jsonPath, JSON.stringify([...arian, ...tmp_jain71]), 'utf8')
  return [...arian, ...tmp_jain71]
}
