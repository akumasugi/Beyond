import { MessageType } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import request from "../../lib/request";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "profile",
      description: "Displays user-profile 📜",
      category: "general",
      usage: `${client.config.prefix}profile [tag/quote]`,
      aliases: ["p", "pf"],
      baseXp: 30,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    if (M.quoted?.sender) M.mentioned.push(M.quoted.sender);
    const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid;
    let username = user === M.sender.jid ? M.sender.username : "";
    if (!username) {
      const contact = this.client.getContact(user);
      username =
        contact.notify || contact.vname || contact.name || user.split("@")[0];
    }
    let haigusha;
    if (await (await this.client.getUser(user)).married) {
      haigusha = await (await this.client.getUser(user)).haigusha.name;
    } else {
      haigusha = "None";
    }
    let pfp: string;
    try {
      pfp = await this.client.getProfilePicture(user);
    } catch (err) {
      M.reply(`Profile Picture not Accessible of ${username}must be ugly probably`);
      pfp = "https://i.ibb.co/PhCXwg2/370736967beee002dadafe7c4d2ed107.jpg";
    }
    const exp = (await this.client.getUser(user)).Xp;
    let role: string;
    if (exp < 500) {
      role = "🌸 Citizen";
    } else if (exp < 1000) {
      role = "🔎 Cleric";
    } else if (exp < 2000) {
      role = "🔮 Wizard";
    } else if (exp < 5000) {
      role = "♦️ Mage";
    } else if (exp < 10000) {
      role = "🎯 Noble";
    } else if (exp < 25000) {
      role = "✨ Elite";
    } else if (exp < 50000) {
      role = "🔶️ Ace";
    } else if (exp < 75000) {
      role = "🌀 Hero";
    } else if (exp < 100000) {
      role = "💎 Supreme";
    } else if (exp < 125000) {
      role = "👻 Ghost";
    } else if (exp < 150000) {
      role = "🧚 Fairy";
    } else if (exp < 175000) {
      role = "🎃 Pumpkin";
    } else if (exp < 200000) {
      role = "❄️ DEMON KING";
    } else { 
      role = "👑GOD";
    
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let level: number;
    if (exp < 500) {
      level = 1;
    } else if (exp < 1000) {
      level = 2;
    } else if (exp < 2000) {
      level = 3;
    } else if (exp < 5000) {
      level = 4;
    } else if (exp < 10000) {
      level = 5;
    } else if (exp < 25000) {
      level = 6;
    } else if (exp < 50000) {
      level = 7;
    } else if (exp < 75000) {
      level = 8;
    } else if (exp < 100000) {
      level = 9;
    } else if (exp < 125000) {
      level = 10;
    } else if (exp < 150000) {
      level = 11;
    } else if (exp < 175000) {
      level = 12;
    } else if (exp < 200000) {
      level = 13;
    } else if (exp < 300000) {
      level = 14;
    } else { 
      level = 15;
    } 
    await M.reply(
      await request.buffer(
        pfp || "https://wallpaperaccess.com/full/5304840.png"
      ),
      MessageType.image,
      undefined,
      undefined,
      `🏮 *Username: ${username}*\n\n🎗️ *About: ${
        (await this.client.getStatus(user)).status || "None"
      }*\n\n❤ *Haigusha: ${haigusha}*\n\n〽️ *Level: ${level}*\n\n⭐ *Exp: ${
        exp || 0
      }*\n\n💫 *Role: ${role}*\n\n🍀 *Quiz Points: ${
        (
          await this.client.getUser(user)
        ).quizPoints
      }*\n\n♦️ *Pokemons: ${await (
        await this.client.getUser(user)
      ).pokemons.length}*\n\n🎗 *Characters: ${
        (
          await this.client.getUser(user)
        ).gallery.length
      }*\n\n👑 *Admin: ${
        M.groupMetadata?.admins?.includes(user) || false
      }*\n\n✖ *Ban: ${(await this.client.getUser(user)).ban || false}*`
    );
  };
}
