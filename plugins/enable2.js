llet handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'delete':
      if (m.isGroup) {
        if (!isAdmin || !isOwner) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!isAdmin || !isOwner) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
    default:
      if (!/[01]/.test(command)) throw `
List option: welcome | delete | public | antilink | autolevelup | antitoxic | detect | nyimak | restrict | document | whitelistmycontacts | simi

Contoh:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim()
      throw false
  }
  m.reply(`
*${type}* Berhasil Di *${isEnable ? 'nyala' : 'mati'}kan* ${isAll ? 'Untuk Bot Ini' : isUser ? '' : 'Untuk Chat Ini'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

handler.premium = true

module.exports = handler
