let handler = async (m, { text }) => {
  m.reply(`Pemesanan 172 Diamond Dengan Harga 39.000\nSilahkan Melakukan Pembayaran Ke\nDANA : 081284051008 A/N : Widya Suci\nSertakan Bukti Transfer\nTerima Kasih`)
}
handler.help = ['']
handler.tags = ['dm']
handler.command = /^172$/i

module.exports = handler
