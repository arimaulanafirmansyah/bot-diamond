let handler = async (m, { text }) => {
  m.reply(`Pemesanan 429 Diamond Dengan Harga 98.000\nSilahkan Melakukan Pembayaran Ke\nDANA : 081284051008 A/N : Widya Suci\nSertakan Bukti Transfer\nTerima Kasih`)
}
handler.help = ['']
handler.tags = ['dm']
handler.command = /^429$/i

module.exports = handler
