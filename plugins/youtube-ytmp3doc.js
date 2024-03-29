import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 
let limit = 100

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) conn.reply(m.chat, `*🚩 Escribe la URL de un video de YouTube que deseas descargar.*`, m)
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de YouTube`, m, adReply).then(_ => m.react('✖️'))
let q = '128kbps'

await m.react('🕓')
 try {
const yt = await fg.yta(args[0])
let { title, dl_url, size } = yt
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

let ytestilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${title}`, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply).then(_ => m.react('✖️'))

await conn.reply(m.chat, `🍭 *Título ∙* ${title}\n⚖️ *Tamaño ∙* ${size}\n\n*↻ Espera @${m.sender.split`@`[0]}, soy lenta. . .*`, ytestilo, adYT)
		
await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(args[0])
let { title, size, dl_url } = yt
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

let ytestilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${title}`, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
       	
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply).then(_ => m.react('✖️'))

await conn.reply(m.chat, `🍭 *Título ∙* ${title}\n⚖️ *Tamaño ∙* ${size}\n\n*↻ Espera @${m.sender.split`@`[0]}, soy lenta. . .*`, ytestilo, adYT)
		
await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
await m.react('✅')
} catch {
await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m, adReply).then(_ => m.react('✖️'))
console.error(error)
}}}
handler.help = ['ytmp3doc <url yt>']
handler.tags = ['downloader']
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.star = 2
handler.register = true 
export default handler