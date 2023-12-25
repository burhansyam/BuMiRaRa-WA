import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul yang dicari* \n Contoh : .lk21 batman`
  //await m.reply('Sabar kak saya cek dulu...')
m.react(rwait)
 let res = await fetch(`https://api.beetv.my.id/bot/lk21/?q=${text}`)
if (!res.ok) throw await res.text()

let json = await res.json()
let { lk21 } = json

conn.reply(m.chat, lk21, m)
m.react(done)
}

handler.command = ['bkad']
handler.tags = ['cari']
handler.command = /^(lk21)$/i

export default handler
