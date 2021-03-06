import { ClientEvents } from "discord.js";

/**
 * Developers - KeyCats ( JNSP, Saige, Kanna )
 * Repo: https://github.com/KeyCats/KeyCats
 * Github: https://github.com/KeyCats/
 * 2022
 */

export class Event<Key extends keyof ClientEvents> {
  constructor(
    public event: Key,
    public run: (...args: ClientEvents[Key]) => any
  ) {}
}
