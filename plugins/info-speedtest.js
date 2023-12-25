import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	m.react(rwait);
	///await conn.reply(m.chat, `...`, m)
    let o
    try {
        o = await exec('python speed.py')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stderr.trim()) m.reply(stderr)
    	m.react(xmoji);
    
    }
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(speedtest)$/i

export default handler
