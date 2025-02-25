import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "delete",
      description: "Deletes the quoted Message",
      aliases: ["del"],
      category: "moderation",
      usage: `${client.config.prefix}delete`,
      modsOnly: true,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    if (!M?.quoted?.message)
      return void M.reply("Quote the message you want to delete");
    if (M.quoted.sender !== this.client.user.jid)
      return void M.reply(
        `I can't delete the message of a random member`
      );
    await this.client.deleteMessage(M.from, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      id: (M.quoted.message as any).stanzaId,
      remoteJid: M.from,
      fromMe: true,
    });
  };
}
