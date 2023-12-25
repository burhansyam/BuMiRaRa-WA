import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/anime-cosplay.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*Cosplay*`, m)} 
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cosplay']
handler.tags = ['img']
handler.command = /^(cosplay)$/i
export default handler