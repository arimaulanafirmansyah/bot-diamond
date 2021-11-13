let handler = async (m, { text }) => {
  m.reply(`Pemesanan 878 Diamond Dengan Harga 195.000\nSilahkan Melakukan Pembayaran Ke\nDANA : 081284051008 A/N : Widya Suci\nSertakan Bukti Transfer\nTerima Kasih`)
}
handler.help = ['']
handler.tags = ['dm']
handler.command = /^878$/i

module.exports = handler
