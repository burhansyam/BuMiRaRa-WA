import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.beetv.my.id/bot/adpem/lra.json")
let json = res.data
let injek = json.lra

m.react(rwait);
conn.reply(m.chat, `${injek}` .trim(), m)

m.react(done);
}
// Tambah sendiri kalo mau
handler.help = ['bkad']
handler.tags = ['adpem']
handler.command = /^(lra)$/i

export default handler
