let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} sekarang AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['86 DIAMOND Rp 20.000','172 DIAMOND Rp 39.000','257 DIAMOND Rp 60.000','344 DIAMOND Rp 80.000','429 DIAMOND Rp 98.000','514 DIAMOND Rp 120.000','706 DIAMOND Rp 156.000','878 DIAMOND Rp 195.000','963 DIAMOND Rp 220.000','1412 DIAMOND Rp 320.000','2195 DIAMOND Rp455.000']
handler.tags = ['list']
handler.command = /^list$/i

module.exports = handler
