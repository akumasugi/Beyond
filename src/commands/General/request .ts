import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: "request",
            aliases: ["request"],
            description: "send message mods, request, advice, features suggestion , or if you want to add the bot in your gc ",
            category: "general",
            usage: `${client.config.prefix}request`,
            dm: true,
            baseXp: 10
        })
    }

    run = async (

		M: ISimplifiedMessage,	{ joined }: IParsedArgs
): Promise<void> => {
              if (!joined) return void (await M.reply(`Please provide request Message.`))
             const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        };
        
             const term = joined.trim()
            await this.client.sendMessage(
                `917892202052@s.whatsapp.net`,
                `📨 *Request Message!!*\n👤 *User:@${M.sender.jid.split("@")[0]}*\n🎏: *${M.sender.username}*\n🔖 *Message: ${term}*`,
                MessageType.text
            );
            return void M.reply('*Your request message has been sent to the bot admin!*')
        }}
