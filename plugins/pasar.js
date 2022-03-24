let { MessageType } = require('@adiwajshing/baileys')
const Skepiting = 3000
const Slobster = 3000
const Sudang = 3000
const Scumi = 3000
const Sgurita = 3000
const Sbuntal = 3000
const Sdory = 3000
const Sorca = 3000
const Slumba = 3000
const Spaus = 3000
const Shiu = 3000
const Sbanteng = 4000 
const Sharimau = 4000 
const Sgajah = 4000 
const Skambing = 4000 
const Spanda = 4000 
const Sbuaya = 4000 
const Skerbau = 4000 
const Ssapi= 4000 
const Smonyet = 4000 
const Sbabihutan = 4000 
const Sbabi = 4000 
const Sayam = 4000 
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.DATABASE.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `━━━━━━━━━━━━━━━━━
*Barang   | Harga Jual*\n━━━━━━━━━━━━━━━━━\n
🦀Kepiting:     ${Skepiting}
🦞Lobster:     ${Slobster}
🦐Udang:     ${Sudang}
🦑Cumi:     ${Scumi}
🦑Gurita:     ${Sgurita}
🐡Buntal:     ${Sbuntal}
🐳Dory:     ${Sdory}
🐞Orca:     ${Sorca}
🐬Lumba:     ${Slumba}
🦈Paus:     ${Spaus}
🐋Hiu:     ${Spaus}
🐃Banteng:     ${Sbanteng}
🐅Harimau:     ${Sharimau}
🐘Gajah:     ${Sgajah}
🐑Kambing:     ${Skambing}
🐼Panda:      ${Spanda}
🐂Kerbau:     ${Skerbau}
🐊Buaya:     ${Sbuaya}
🐄Sapi:     ${Ssapi}
🐒Monyet:     ${Smonyet}
🐖Babi Hutan:     ${Sbabihutan}
🐷Babi:     ${Sbabi}
🐓Ayam:     ${Sayam}\n━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━
`.trim()
    try {
        if (/pasar|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE.data.users[m.sender].sampah
            switch (jualbeli) {
           /* case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.DATABASE.data.users[m.sender].money >= potion * count) {
                                global.DATABASE.data.users[m.sender].money -= potion * count
                                global.DATABASE.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga ${potion * count} money\n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money `,)
                        break
                    case 'diamond':
                            if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                                global.DATABASE.data.users[m.sender].diamond += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'common':
                            if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                                global.DATABASE.data.users[m.sender].common += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                                global.DATABASE.data.users[m.sender].uncommon += count * 1
                                global.DATABASE.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                                    global.DATABASE.data.users[m.sender].mythic += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} Money\n\nBuka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.DATABASE.data.users[m.sender].money >= Blegendary * count) {
                                global.DATABASE.data.users[m.sender].legendary += count * 1
                                global.DATABASE.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                                global.DATABASE.data.users[m.sender].sampah += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.DATABASE.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > armor) {
                                global.DATABASE.data.users[m.sender].armor += 1
                                global.DATABASE.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break*/
            case 'sell': 
                switch (_type) {                  
                     case 'kepiting':
                        if (global.DATABASE.data.users[m.sender].kepiting >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Skepiting * count
                            global.DATABASE.data.users[m.sender].kepiting -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kepiting 🦀 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Kepiting Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'paus':
                        if (global.DATABASE.data.users[m.sender].paus >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus 🦈 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Paus Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'banteng':
                        if (global.DATABASE.data.users[m.sender].banteng >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].banteng -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Banteng 🐃 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Banteng Kamu Tidak Cukup`.trim(), m)
                        break
                  case 'lobster':
                        if (global.DATABASE.data.users[m.sender].lobster >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Slobster * count
                            global.DATABASE.data.users[m.sender].lobster -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lobster 🦞 Dengan Harga ${Slobster * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Lobster Kamu Tidak Cukup`.trim(), m)
                        break
                     case 'udang':
                        if (global.DATABASE.data.users[m.sender].udang >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sudang * count
                            global.DATABASE.data.users[m.sender].udang -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Udang 🦐 Dengan Harga ${Sudang * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Udang Kamu Tidak Cukup`.trim(), m)
                        break
                      case 'cumi':
                        if (global.DATABASE.data.users[m.sender].cumi >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Scumi * count
                            global.DATABASE.data.users[m.sender].cumi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Cumi 🐙 Dengan Harga ${Scumi * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Cumi Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'diamond':
                        if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                            global.DATABASE.data.users[m.sender].diamond -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Diamond, 💎 Dan Anda Mendapatkan ${Sdiamond * count} Money 💵 `, m)
                        } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
      /*  } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.DATABASE.data.users[m.sender].money >= potion * count) {
                            global.DATABASE.data.users[m.sender].money -= potion * count
                            global.DATABASE.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case 'diamond':
                        if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                            global.DATABASE.data.users[m.sender].diamond += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                            global.DATABASE.data.users[m.sender].common += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                            global.DATABASE.data.users[m.sender].uncommon += count * 1
                            global.DATABASE.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                            global.DATABASE.data.users[m.sender].mythic += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE.data.users[m.sender].money >= Blegendary * count) {
                            global.DATABASE.data.users[m.sender].legendary += count * 1
                            global.DATABASE.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                            global.DATABASE.data.users[m.sender].sampah += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'armor':
                        if (global.DATABASE.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level Max*', m)
                        if (global.DATABASE.data.users[m.sender].money > armor * 1) {
                            global.DATABASE.data.users[m.sender].armor += 1
                            global.DATABASE.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }*/
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) { 
            	case 'dory':
                        if (global.DATABASE.data.users[m.sender].dory >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sdory * count
                            global.DATABASE.data.users[m.sender].dory -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Dory 🍬 Dengan Harga ${Sdory * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Dory Kamu Tidak Cukup`.trim(), m)
                        break
case 'orca':
                        if (global.DATABASE.data.users[m.sender].orca >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sorca * count
                            global.DATABASE.data.users[m.sender].orca -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Orca 🐾 Dengan Harga ${Sorca * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Orca Kamu Tidak Cukup`.trim(), m)
                        break
case 'ayam':
                        if (global.DATABASE.data.users[m.sender].ayam >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sayam * count
                            global.DATABASE.data.users[m.sender].ayam -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ayam 🐓 Dengan Harga ${Sayam * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Ayam Kamu Tidak Cukup`.trim(), m)
                        break
case 'kuda':
                        if (global.DATABASE.data.users[m.sender].kuda >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Skuda * count
                            global.DATABASE.data.users[m.sender].kuda -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kuda 🐎 Dengan Harga ${Skuda * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Kuda Kamu Tidak Cukup`.trim(), m)
                        break
case 'lumba':
                        if (global.DATABASE.data.users[m.sender].lumba >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Slumba * count
                            global.DATABASE.data.users[m.sender].lumba -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lumba 🐬 Dengan Harga ${Slumba * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Lumba Kamu Tidak Cukup`.trim(), m)
                        break
case 'paus':
                        if (global.DATABASE.data.users[m.sender].paus >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus 🦈 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Paus Kamu Tidak Cukup`.trim(), m)
                        break
case 'hiu':
                        if (global.DATABASE.data.users[m.sender].paus >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Hiu 🐬 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Hiu Kamu Tidak Cukup`.trim(), m)
                        break
                       case 'banteng':
                        if (global.DATABASE.data.users[m.sender].banteng >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].banteng -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Banteng 🐃 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Banteng Kamu Tidak Cukup`.trim(), m)
                        break
case 'babi':
                        if (global.DATABASE.data.users[m.sender].babi >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sbabi * count
                            global.DATABASE.data.users[m.sender].babi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi 🐖 Dengan Harga ${Sbabi * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Babi Kamu Tidak Cukup`.trim(), m)
                        break
case 'harimau':
                        if (global.DATABASE.data.users[m.sender].harimau >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sharimau * count
                            global.DATABASE.data.users[m.sender].harimau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Harimau 🐅  Dengan Harga ${Sharimau * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Harimau Kamu Tidak Cukup`.trim(), m)
                        break
case 'kambing':
                        if (global.DATABASE.data.users[m.sender].kambing >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Skambing * count
                            global.DATABASE.data.users[m.sender].kambing -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kambing 🐑 Dengan Harga ${Skambing * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Kambing Kamu Tidak Cukup`.trim(), m)
                        break
case 'gajah':
                        if (global.DATABASE.data.users[m.sender].gajah >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sgajah * count
                            global.DATABASE.data.users[m.sender].gajah -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gajah 🐘 Dengan Harga ${Sgajah * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Gajah Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kepiting':
                        if (global.DATABASE.data.users[m.sender].kepiting >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Skepiting * count
                            global.DATABASE.data.users[m.sender].kepiting -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kepiting 🦀 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Kepiting Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'paus':
                        if (global.DATABASE.data.users[m.sender].paus >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus 🦈 Dengan Harga ${Spaus * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Paus Kamu Tidak Cukup`.trim(), m)
                        break
                  case 'lobster':
                        if (global.DATABASE.data.users[m.sender].lobster >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Slobster * count
                            global.DATABASE.data.users[m.sender].lobster -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lobster 🦞 Dengan Harga ${Slobster * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Lobster Kamu Tidak Cukup`.trim(), m)
                        break
                     case 'udang':
                        if (global.DATABASE.data.users[m.sender].udang >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sudang * count
                            global.DATABASE.data.users[m.sender].udang -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Udang 🦐 Dengan Harga ${Sudang * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Udang Kamu Tidak Cukup`.trim(), m)
                        break
                     case 'gurita':
                        if (global.DATABASE.data.users[m.sender].gurita >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sgurita * count
                            global.DATABASE.data.users[m.sender].gurita -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gurita 🐙 Dengan Harga ${Sgurita * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Gurita Kamu Tidak Cukup`.trim(), m)
                        break
case 'panda':
                        if (global.DATABASE.data.users[m.sender].panda >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spanda * count
                            global.DATABASE.data.users[m.sender].panda -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Panda 🐼 Dengan Harga ${Spanda * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `panda Kamu Tidak Cukup`.trim(), m)
                        break
case 'kerbau':
                        if (global.DATABASE.data.users[m.sender].kerbau >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Skerbau * count
                            global.DATABASE.data.users[m.sender].kerbau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kerbau 🐂 Dengan Harga ${Skerbau * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Kerbau Kamu Tidak Cukup`.trim(), m)
                        break
case 'monyet':
                        if (global.DATABASE.data.users[m.sender].monyet >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Smonyet * count
                            global.DATABASE.data.users[m.sender].monyet -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Monyet 🐒 Dengan Harga ${Smonyet * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `monyet Kamu Tidak Cukup`.trim(), m)
                        break
case 'buaya':
                        if (global.DATABASE.data.users[m.sender].buaya >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sbuaya * count
                            global.DATABASE.data.users[m.sender].buaya -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Buaya 🐊 Dengan Harga ${Sbuaya * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `buaya Kamu Tidak Cukup`.trim(), m)
                        break
case 'sapi':
                        if (global.DATABASE.data.users[m.sender].sapi >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sbuaya * count
                            global.DATABASE.data.users[m.sender].sapi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Buaya 🐊 Dengan Harga ${Ssapi * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `sapi Kamu Tidak Cukup`.trim(), m)
                        break
                      case 'cumi':
                        if (global.DATABASE.data.users[m.sender].cumi >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Scumi * count
                            global.DATABASE.data.users[m.sender].cumi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Cumi 🐙 Dengan Harga ${Scumi * count} Money 💵 `.trim(), m)
                        } else conn.reply(m.chat, `Cumi Kamu Tidak Cukup`.trim(), m)
                        break   
                case 'diamond':
                    if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE.data.users[m.sender].diamond -= count * 1
                        global.DATABASE.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond💎, Dan Anda Mendapatkan ${Sdiamond * count} Money 💵`, m)
                    } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(pasar|toko|buy|beli|sell|jual)$/i
module.exports = handler