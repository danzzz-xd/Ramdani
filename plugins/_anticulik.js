let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay, Dana:* 6289512545999
• *Tri:* 6289512545999

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/Muhammadramdani196453

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6289512545999', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler