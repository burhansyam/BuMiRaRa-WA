import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.beetv.my.id/bot/adpem/menu.json")
let json = res.data
let menu = json.menu
m.react(rwait);
conn.reply(m.chat, `${menu}` .trim(), m)
m.react(done);

}
// Tambah sendiri kalo mau
handler.help = ['bkad']
handler.tags = ['adpem']
handler.command = /^(menu)$/i

export default handler
