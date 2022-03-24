let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Link Sc Herman Botz : 
https://github.com/Hermanchanel/HermanBot
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *SC HERMAN BOTZ* 🔥', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 1

module.exports = handler
 