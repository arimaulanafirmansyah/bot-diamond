let handler = async (m, { text }) => {
  m.reply(`Pemesanan 706 Diamond Dengan Harga 156.000\nSilahkan Melakukan Pembayaran Ke\nDANA : 081284051008 A/N : Widya Suci\nSertakan Bukti Transfer\nTerima Kasih`)
}
handler.help = ['']
handler.tags = ['dm']
handler.command = /^706$/i

module.exports = handler
