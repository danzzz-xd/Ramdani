let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╭─「 FUN MENU 」
│• .tictactoe
│• .angka <0-9>
│• .asahotak
│• .caklontong
│• .cantikcek (Limit)
│• .cari <query>
│• .casino <jumlah>
│• .dadu
│• .dadu2
│• .dare
│• .family100
│• .gantengcek (Limit)
│• .gaycek (Limit)
│• .gamemenu
│• .iqtest
│• .kuis
│• .math <mode>
│• .math2
│• .siapakahaku
│• .slot  (Limit)
│• .suit
│• .susunkata
│• .tebakanime
│• .tebakbendera
│• .tebakgambar
│• .tebakkata
│• .tebakkimia
│• .tebaklagu (Limit)
│• .tebaktebakan
│• .tekateki
│• .tololcek (Limit)
│• .truth
│• .twister
╰────>
`.trim()


conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Herman Botz🔥*', 'status@broadcast')
} 
handler.help = ['herman2']
handler.tags = ['herman2']
handler.command = /^(herman2)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.limit = 1

module.exports = handl