let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `┌───「 GAME MENU 」
│🎮 • .berburu
│🎮 • .menanam
│🎮 • .mancing
│🎮 • .berpetualangan
│🎮 • .mulung
│🎮 • .nebang
│🎮 • .nambang
│🎮 • .math
│🎮 • .kandang
│🎮 • .claim
│🎮 • .sell
│🎮 • .inv
│🎮 • .kolam
│🎮 • .peliharaan
│🎮 • .lb
│🎮 • .judi
└──────>
`.trim()


conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Herman Botz🔥*', 'status@broadcast')
} 
handler.help = ['gamemenu']
handler.tags = ['game']
handler.command = /^(gamemenu)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler