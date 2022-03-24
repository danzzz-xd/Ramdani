let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.sendMessage(m.chat, `🔥 Sisa Limit Kamu ${global.DATABASE._data.users[who].limit}/10 \n\n👩‍💻Ketik #buy <jumlah>  Atau #buyall Untuk Menambahkan nya`, 'conversation', { thumbnail:  await (await fetch('https://i.ibb.co/2hj4v8C/20220120-194343.jpg')).buffer(), contextInfo: { forwardingScore: '10.000.008', isForwarded: true, stanzaId: 'Cek Limit', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { imageMessage: {viewOnce: true}}}}, remoteJid: 'status@broadcast' }})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler