let handler = async (m, { text }) => {
  m.reply(`Pemesanan 344 Diamond Dengan Harga 80.000\nSilahkan Melakukan Pembayaran Ke\nDANA : 081284051008 A/N : Widya Suci\nSertakan Bukti Transfer\nTerima Kasih`)
}
handler.help = ['']
handler.tags = ['dm']
handler.command = /^344$/i

module.exports = handler
