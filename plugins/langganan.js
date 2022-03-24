let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 SEWA BOT 」
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium bot (khusus pembeli)!
│• Dapat Menambahkan Bot Ke 1 Grup!
│• Menikmati Fitur update
│• Mendapatkan info bot
│• Mengakses setelan grup bot
│• Join Ke Grup
│• 
│ > Bonus :
│• Diberi 5 Limit Setiap Hari
│
│ > Harga :
│• Premium 5k (permanen)
│• Sewa Bot 5k (permanen)
│
│ > Pembayaran :
│• Shopepay : 083146208804
│• DANA : 083146208804
│• PULSA : 083146208804
│• 
│• minat? hub wa.me//6283146208804
╰────
`.trim()


conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Herman Botz🛒*', 'status@broadcast')
} 
handler.help = ['langganan']
handler.tags = ['info']
handler.command = /^(langganan|sewabot)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler