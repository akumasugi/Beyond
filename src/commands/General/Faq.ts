import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'faq',
            description: 'Displays frequently asked questions.',
            category: 'general',
            usage: `${client.config.prefix}faq`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
           'https://c.tenor.com/hjL3MnIsB88AAAPo/marin-kitagawa-kitagawa-marin.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `*━━━❰ 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 ❱━━━*
📮 *Q1:* How do I add 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 bot in my group?
📑 *A:* Send the group link in the bot's or owner's DM &  it will join.
ᚖ ────── ✪ ────── ᚖ
📮 *Q2:* What are the requirements for the bot to join a group?
📑 *A:* First the group must have atleast 50 members for the bot to join & the group must be active & also be a non-hentai/porn group.
ᚖ ────── ✪ ────── ᚖ
📮 *Q3:* How do I earn XP in the group?
📑 *A:* By earning XP you will need to use commands of the bot like reaction command & others.
ᚖ ────── ✪ ────── ᚖ
📮 *Q4:* Can the bot work in personal message?
📑 *A:* Yes, the bot will work but with few commands like *#help* only! So you're recommended to use the bot in groups only.
ᚖ ────── ✪ ────── ᚖ
📮 *Q5:* Can I call the bot?
📑 *A:* Calling the bot is at your own pleasure but with consequences thus you will be blocked instantly for calling the bot!
ᚖ ────── ✪ ────── ᚖ
📮 *Q6:* Where can I find 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 bot?
📑 *A:* 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀  is one of the bots owned by akuma. Incase you need other bots, use the command *#support* & you will get support group link in your DM.
ᚖ ────── ✪ ────── ᚖ
📮 *Q7:* Can you hire a bot from *akuma?*
📑 *A:* yess ypu can hire the bot from the owner but you have to pay for it please type #mods to see the owner .
ᚖ ────── ✪ ────── ᚖ
📮 *Q8:* Why is the bot not working in my group?
📑 *A:* There are two main reasons for that, either the bot is lagging due to data traffic or the bot is inactive.
ᚖ ────── ✪ ────── ᚖ
📮 *Q9:* How can I create a bot like 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀?
📑 *A:* SEE creating a bot like this is kinda difficult bcz you need a hight programing knowledge on ts/js so you can contact the owner and hire the bot and its paid so you have to pay for it 
 🎗 wa.me//+917892202052.
ᚖ ────── ✪ ────── ᚖ
📮 *Q10:* Is the *🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 * group sponsored?
📑 *A:* Of course not, we're not sponsored either way but it could be your own pleasure to do that thus this is a non-profit organization.
ᚖ ────── ✪ ────── ᚖ` }
        )
    }
}
