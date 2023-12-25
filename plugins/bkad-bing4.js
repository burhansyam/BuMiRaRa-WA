import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*Perintah diikuti deskripsi visual imajinasimu* \n*Contoh* : .bang buatkan gambar realistis pesawat berbentuk burung`
  //await m.reply('Sabar kak saya cek dulu...')
m.react(rwait)
 let res = await fetch(`https://api.beetv.my.id/bot/dalle3/?t=${text}`)
if (!res.ok) throw await res.text()

let json = await res.json()
let { gbr, link } = json.result

conn.sendFile(m.chat, gbr, '', link, m)

// conn.reply(m.chat, dalle3, m)
m.react(xmoji)
}

handler.command = ['bkad']
handler.tags = ['bkad']
handler.command = /^(bang)$/i

export default handler
