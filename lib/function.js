const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')


const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 120,
  "frames": [
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }
 
           //+++ HAYO MAU APA LOO??
           const author = "SC BY FEBRI"
        /*   (function(_0x32a14b,_0x44849c){const _0x441ac3=_0x2f10,_0x3c975a=_0x32a14b();while(!![]){try{const _0x526f29=parseInt(_0x441ac3(0xf1))/0x1*(parseInt(_0x441ac3(0xf0))/0x2)+parseInt(_0x441ac3(0xea))/0x3+-parseInt(_0x441ac3(0xeb))/0x4*(parseInt(_0x441ac3(0xef))/0x5)+-parseInt(_0x441ac3(0xee))/0x6+-parseInt(_0x441ac3(0xec))/0x7+parseInt(_0x441ac3(0xf2))/0x8+-parseInt(_0x441ac3(0xed))/0x9;if(_0x526f29===_0x44849c)break;else _0x3c975a['push'](_0x3c975a['shift']());}catch(_0x4b1a88){_0x3c975a['push'](_0x3c975a['shift']());}}}(_0x2d38,0x1d12b));function _0x2f10(_0x130a7e,_0x35c3e6){const _0x2d3898=_0x2d38();return _0x2f10=function(_0x2f10ea,_0x114c5b){_0x2f10ea=_0x2f10ea-0xea;let _0x3b7d60=_0x2d3898[_0x2f10ea];return _0x3b7d60;},_0x2f10(_0x130a7e,_0x35c3e6);}const author='SC\x20BY\x20FEBRI';function _0x2d38(){const _0x42aa56=['140142xiIUIS','3EBAxBg','1743496UmoFPN','168192BxPzxe','4JtUrzg','251034qFPyZH','2017323xfKkjo','575286BxOPpP','46205ksWqCB'];_0x2d38=function(){return _0x42aa56;};return _0x2d38();}
           //+++ GADA JUAL.SC!!! KALO DI SEWAKAN SILAHKEN*/
           
           
             const banner = cfonts.render(('HALLO'), {           
                font: 'simple3d',
                color: 'system',
                align: 'center',
                gradient: ["red","green"],
                lineHeight: 2
                });



module.exports = { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close, author}
