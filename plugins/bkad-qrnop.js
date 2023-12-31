import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}wait`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
   m.react(rwait)	
    await m.reply('🚧 *Salin, tempel lalu kirim:*\n kode dibawah ini :')

//  let res = await fetch(`https://docs-jojo.herokuapp.com/api/qr_read?image_url=${url}`)
//  let json = await res.json()
//  let { raw_text } = json.result
 let res = await fetch(`https://api.beetv.my.id/bot/qr/?qrcode=${url}`)
 let json = await res.json()
 let { data } = json 
  
 let kodene = `${data.replace('https://bkad.gunungkidulkab.go.id/cek-pbb/?nop=', '')}`
 let perintahe = '.ceknop'
 
   let pecah = `.cenop ${data}`
   
             conn.reply(m.chat, pecah, m)
    m.react(rdone)
 //conn.sendButton(m.chat, `Kode NOP : ${kodene}`, '@burhansyam', null, [['Cek NOP', `${perintahe} ${kodene}`]], m)
 
// conn.sendButton(m.chat, `${raw_text}`, pecah, pecah, [['cek nop', `${command} ${pecah}`]], m)
//             conn.reply(m.chat, raw_text, m)
}

handler.help = ['qrnop <upload/balas foto>']
handler.tags = ['bkad']
handler.command = /^(qrnop)$/i

export default handler
