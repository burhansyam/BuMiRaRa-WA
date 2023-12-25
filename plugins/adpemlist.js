import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.beetv.my.id/bot/adpem/list.json")
let json = res.data
let injek = json.injek
m.react(rwait);
conn.reply(m.chat, `${injek}` .trim(), m)
m.react(done);

}

handler.help = ['injek']
handler.tags = ['tools']
handler.command = /^(list)$/i

export default handler
