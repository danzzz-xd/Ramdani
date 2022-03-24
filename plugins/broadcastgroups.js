let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pia)}”`, m)
}
handler.help = ['pia']
handler.tags = ['piaci']
handler.command = /^(pia)$/i
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
global.pia = [
  "pia itu adalah mahluk ciptaan tuhan",
  "pia Itu Orang Bekasi...",
  "Pia Itu Jomblo",
  "Pia Itu Pendek",
   "pia Itu Orang Ya Orang Lah masa Setan",
   "pia Itu Ya Pia",
   "pia Adalah Pia",
   "pia Itu Sahabat nya amel",
   "pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia pia",
    "pia pia itu orang sih",
   ]
