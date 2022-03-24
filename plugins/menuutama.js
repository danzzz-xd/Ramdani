let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "_Halo Saya Ramdani Botz 👋_",
                        "description": "|-----------------------------------------|\n|>>>>> Ramdani Botz <<<<<|\n|-----------------------------------------|",
                        "buttonText": "Klik Disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": "[ツ] ALLMENU",
                                        "description": "\n𓅂 Menu1",
                                        "rowId": ".allmenu"
                                    },{
                                      "title": "[ツ] XP MENU",
                                        "description": "\n𓅂 Menu2",
                                        "rowId": ".Ramdani"
                                     },{
                                      "title": "[ツ] INVENTORY",
                                        "description": "\n𓅂 Menu3",
                                        "rowId": ".inv"           
                                     },{
                                      "title": "[ツ] DOMPET",
                                        "description": "\n𓅂 Menu4",
                                        "rowId": ".dompet"
                                        },{
                                      "title": "[ツ] SEWABOT",
                                        "description": "\n𓅂 Menu5",
                                        "rowId": ".sewabot"
                                        },{
                                      "title": "[ツ] KERANGMENU",
                                        "description": "\n𓅂 Menu6",
                                        "rowId": ".kerangmenu"
                                        },{
                                      "title": "[ツ] GAMEMENU",
                                        "description": "\n𓅂 Menu7",
                                        "rowId": ".gamemenu"
                                        },{
                                      "title": "[ツ] CLAIM (MONEY)",
                                        "description": "\n𓅂 Menu8",
                                        "rowId": ".claim"
                                        },{
                                      "title": "[ツ] BUY (BUY LIMIT)",
                                        "description": "\n𓅂 Menu9",
                                        "rowId": ".buy"
                                        },{
                                      "title": "[ツ] LEADERBOARD",
                                        "description": "\n𓅂 Menu10",
                                        "rowId": ".lb"
                                        },{
                                      "title": "[ツ] SCRIP (SCRIP BOT)",
                                        "description": "\n𓅂 Menu11",
                                        "rowId": ".sc"
                                        },{
                                      "title": "[ツ] LEVELUP (NAIK LEVEL)",
                                        "description": "\n𓅂 Menu12",
                                        "rowId": ".levelup"
                                        },{
                                      "title": "[ツ] JUDI (DOSA:V)",
                                        "description": "\n𓅂 Menu13",
                                        "rowId": ".judi"
                                        },{
                                      "title": "[ツ] CASINO (DOSA:V)",
                                        "description": "\n𓅂 Menu14",
                                        "rowId": ".casino"
                                        },{
                                      "title": "[ツ] MATH (ASAH OTAK)",
                                        "description": "\n𓅂 Menu15",
                                        "rowId": ".math"
                                        },{
                                      "title": "[ツ] KUIS (ASAH OTAK)",
                                        "description": "\n𓅂 Menu16",
                                        "rowId": ".kuis"
                                        },{
                                      "title": "[ツ] MULUNG",
                                        "description": "\n𓅂 Menu17",
                                        "rowId": ".mulung"
                                        },{
                                      "title": "[ツ] NEBANG",
                                        "description": "\n𓅂 Menu18",
                                        "rowId": ".nebang"
                                        },{
                                      "title": "[ツ] PREMIUM",
                                        "description": "\n𓅂 Menu19",
                                        "rowId": ".premium"
                                        },{
                                      "title": "[ツ] KANDANG",
                                        "description": "\n𓅂 Menu20",
                                        "rowId": ". kandang"
                                    },{
                                    	
                                        "title": `[ツ] JUAL PELIHARAAN`,
                                        "description": "\n𓅂 Menu21",
                                        "rowId": ".jual"     
                                        
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler