let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╭─「 EXP & LIMIT 」
│• .peti
│• .buy<jumlah limit>
│• .buy <jumlah limit>
│• .buyall
│• .cheat (Limit)
│• .dompet
│• .gift @user <jumlah>
│• .griding (Limit)
│• .leaderboard
│• .lb
│• .gift2 @user <limit>
│• .naiklevel
│• .pay @user <amount>
│• .paylimit @user <amount>
│• .topmoney
│• .unreg <sn>
│• .unregister <sn>
╰────>
`.trim()


conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Ramdani Botz🔥*', 'status@broadcast')
} 
handler.help = ['Ramdani']
handler.tags = ['Ramdani']
handler.command = /^(Ramdani)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler