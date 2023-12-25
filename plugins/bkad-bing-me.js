import fetch from 'node-fetch';
import { generateImageFiles, generateImagesLinks } from 'bimg';



let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) throw `Deskripsikan secara detail yang mau di gambar.Max 500 huruf.*Contoh penggunaan* :\n *${usedPrefix + command} Gambar realistis kuda terbang*`;
   m.react(rwait)

//    m.reply('*dalam proses...*');

    let prompt = text;
    const imageLinks = await generateImagesLinks(prompt);
    const sijjin = imageLinks[0];
let aku = imageLinks[1]
let cinta = imageLinks[2]
let kamu = imageLinks[3]

let sayang = `🎁 Hasil Imajinasi lainnya : 
2️⃣ ${aku}
3️⃣ ${cinta}
4️⃣ ${kamu}
coded by: *@burhansyam_*`


    try {
      const response = await fetch(sijjin);
      if (!response.ok) throw `❎Gagal mengambil data`;

//	const Image = await response.arrayBuffer();
	let Images = await response.buffer();

      conn.sendFile(m.chat, Images, 'img.jpg', sayang, m);

      m.react(dmoji);

    } catch (error) {
        console.error(error);
      m.reply(`❎Terjadi kesalahan server.`);
    }


  };

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['bung'];
export default handler;
