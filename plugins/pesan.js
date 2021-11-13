let handler = async (m, { text }) => {
  m.reply(`Contoh Format Pemesanan :\n`)
}
handler.help = ['1412 Diamond ID : 89876676 Server ID : 2181\nGunakan Titik Di Awal ( WAJIB )']
handler.tags = ['pesan']
handler.command = /^pesan$/i

module.exports = handler
