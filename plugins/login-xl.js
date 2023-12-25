import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
await m.reply('? Siap ambil tokeeettt')
m.react(rwait);

let res = await axios("https://api.beetv.my.id/bot/xl/mlebu.php")
let json = res.data
let status = json.statusDescription

conn.reply(m.chat, status, m)
m.react(done);
}

handler.help = ['token']
handler.tags = ['tools']
handler.command = /^(toketxl)$/i

export default handler
