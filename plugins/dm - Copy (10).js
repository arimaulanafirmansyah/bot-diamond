let handler = async (m, { text }) => {
  m.reply(`Pemesanan 1412 Diamond Dengan Harga 320.000\nSilahkan Melakukan Pembayaran Ke\nDANA : 081284051008 A/N : Widya Suci\nSertakan Bukti Transfer\nTerima Kasih`)
}
handler.help = ['']
handler.tags = ['dm']
handler.command = /^1412$/i

module.exports = handler
