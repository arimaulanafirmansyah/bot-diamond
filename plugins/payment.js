let handler = async (m, { text }) => {
  m.reply(`List Pembayaran\n-`)
}
handler.help = ['DANA']
handler.tags = ['payment']
handler.command = /^payment$/i

module.exports = handler
