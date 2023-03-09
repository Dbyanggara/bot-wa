//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'

//edit aja sesuka hati
global.welcome = `
selamat datang
`
global.left = ` 
selamat jalan..
`
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
autoread = true //jangan di ubah
global.footer = 'DbyBOT'//ganti
global.pulsa = "083121761811"//ganti
global.gopay = "083121761811"//ganti
global.dana = "083121761811"//ganti
global.paypal = "---" // biarin aja kalau gaada
global.shopay = "---" // biarin aja kalau gaada
global.saweria = "---" // biarin aja kalau gaada
global.sociabus = "---" // biarin aja kalau gaada
global.bni = "---" // biarin aja kalau gaada
global.bri = "---" // biarin aja kalau gaada
global.bankjatim = "---" // biarin aja kalau gaada
global.jago = "---" // biarin aja kalau gaada
global.neobank = "---" // biarin aja kalau gaada
global.packname = '𝓓𝓫𝔂 BOT'//ganti
global.footer = '©𝓓𝓫𝔂 𝓐.'//ganti
global.ovo = "-"//ganti
global.ownerlen = "𝓓𝓫𝔂 𝓐."//Ubah
global.owner = ['6283121761811'] //ubh nomor owner hp
global.ownername = "𝓓𝓫𝔂 𝓐." //ubah
global.ytname = "-"//ubah
global.socialm = "IG: Dby_Anggara"//ubah
global.location = "Indonesia, jambi, telanai pura"//ubah
global.ownernomer = "6283121761811"//ubah nomorhp owner
global.premium = ['6283121761811']//ubah nomor hp premium
global.nomorcs = '6283121761811'//nomormu
global.botname = '𝓓𝓫𝔂 BOT' //ubah
global.linkz = "-"//ubah
global.websitex = "-"//ubah
global.botscript = '-'
global.themeemoji = "😿"//ubah
global.packname = "Jasa pembuatan sticker gratis"//ubah
global.author = "No? 62895329375765"//ubah
global.wm = "𝓓𝓫𝔂 𝓐."//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Nih?!', //ubah...
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only', 
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'Tunggu sebentar ya kak...',
    linkm: 'mana linknya?',
    endLimit: 'Upss Limit Kamu sudah habis..Tunggu Waktu menunjukan Pukul 12:00 Limit Anda otomatis akan Di reset!!!',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")

//SETTING AJA SUKA SUKA ASAL PERHATIIN TANDA PETIK MAUPUN KURUNG
//Jagan lupa menunya di tambhin ya Soalnya saya capek wkkw
global.allmenu = `
•―――― ⌜ CONTOH 1⌟ ――――•
bla bla
bla bla
•―――― ⌜ CONTOH 1⌟ ――――•
bla bla
bla bla
•―――― ⌜ CONTOH 1⌟ ――――•

//dan text yang di awali // jangan di hapus sebagai penanda saja
//ada petik di bawah text ini jangan di hapus kalau mau nambah list langsung tambah aja jangan hapus text ini dan petik di bawa ini
`


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
