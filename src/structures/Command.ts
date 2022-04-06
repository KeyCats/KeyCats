/**
 * Developers - KeyCats ( JNSP, Saige, Kanna )
 * Repo: https://github.com/KeyCats/KeyCats
 * Github: https://github.com/KeyCats/
 * 2022
 */

import { CommandTypes } from "../typings/classTypes";

export class Command {
  constructor(options: CommandTypes) {
    Object.assign(this, options);
  }
}
