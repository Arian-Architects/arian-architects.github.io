import 'dotenv/config'
import { join } from 'path'
import ImageKit from 'imagekit'
import { existsSync, readFileSync, writeFileSync } from 'fs'

export async function getImages() {
  const jsonPath = join(process.cwd(), 'src', 'cached_response.json')
  if (existsSync(jsonPath)) return JSON.parse(readFileSync(jsonPath, 'utf8'))
  const imagekit_jain71 = new ImageKit({
    publicKey: process.env.PUBLIC_KEY_JAIN71,
    privateKey: process.env.PRIVATE_KEY_JAIN71,
    urlEndpoint: process.env.IMAGEKIT_URL_JAIN71,
  })
  const tmp_jain71 = await imagekit_jain71.listFiles({
    skip: 0,
    limit: 999,
  })
  const tmp_jain71_2 = await imagekit_jain71.listFiles({
    skip: 999,
    limit: 999,
  })
  tmp_jain71.forEach((i, _) => {
    tmp_jain71[_]['url'] = i.url.split('?')[0]
  })
  tmp_jain71_2.forEach((i, _) => {
    tmp_jain71_2[_]['url'] = i.url.split('?')[0]
  })
  writeFileSync(jsonPath, JSON.stringify([...tmp_jain71, ...tmp_jain71_2].filter(Boolean)), 'utf8')
  return [...tmp_jain71, ...tmp_jain71_2].filter(Boolean)
}
