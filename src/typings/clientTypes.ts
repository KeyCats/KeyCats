/**
 * Developers - KeyCats ( JNSP, Saige, Kanna )
 * Repo: https://github.com/KeyCats/KeyCats
 * Github: https://github.com/KeyCats/
 * 2022
 */

import { ApplicationCommandDataResolvable } from "discord.js";

export interface RegisterCommandsOptions {
  guildId?: string;
  commands: ApplicationCommandDataResolvable[];
}
