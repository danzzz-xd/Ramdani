let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.amel)}”`, m)
}
handler.help = ['amel']
handler.tags = ['amlebucin']
handler.command = /^(amel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.amel = [
  "Amel Itu Perempuan",
  "Amel Itu Orang Bekasi...",
   "Amel Itu Orang Ya Orang Lah masa Setan",
   "Amel Itu Manusia",
   "Amel Itu Mantan Nya Owner Gua",
   "Amel Itu Sahabat nya Pia",
   "Amelia Amelia",
    "Amel itu bukan nya judul lagu",
   ]
