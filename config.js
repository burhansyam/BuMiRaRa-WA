import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282242228600', 'Burhan', true],
  ['6281808032100', 'Syam', true],

] //Numeros de owner 

global.mods = ['']
global.prems = ['', '', '']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  ApiSebastian: 'https://visionaryapi.boxmine.xyz',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://api.fgmods.xyz': 'Rex6QGQI'
}

//KEYS
global.tiktokkey = ['GIf4o4qJ']
global.apivisionary = ["https://visionaryapi.boxmine.xyz"]

// Sticker WM
global.packname = 'BuMiRaRa-Bot'
global.author = 'BuMiRaRa-Bot 1.0'
global.waig = 'Sígueme en Instagram\nhttps://www.instagram.com/traxnox/\n'
global.wagp = 'https://chat.whatsapp.com/EkYXUIw7AY4A8wPPghGPCs'
global.wagit = 'https://github.com/ByTraxnox-X/KasumaBot-MD'
global.wayt = 'https://youtube.com/@by_traxnox'
global.wapyp = 'https://paypal.me/txpaying?country.x=CO&locale.x=es_XC'
global.fglog = 'https://i.imgur.com/mWHCPIe.jpg'
global.numero = ['593995668111']
global.wait = 'Cargando'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
