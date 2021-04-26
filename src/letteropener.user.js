// ==UserScript==
// @name         letteropener.track
// @namespace    https://github.com/davidtorosyan/letteropener
// @version      1.1.1
// @description  improve love letters on boardgamearena.com
// @author       David Torosyan
// @match        https://boardgamearena.com/*/loveletter*
// @match        https://boardgamearena.com/tutorial?*game=loveletter&*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://github.com/davidtorosyan/command.games/raw/monkeymaster-v2.1.0/src/monkeymaster/monkeymaster.js
// @require      https://github.com/davidtorosyan/letteropener/raw/v1.1.1/src/modules/common.js
// @require      https://github.com/davidtorosyan/letteropener/raw/v1.1.1/src/modules/monitor.js
// @require      https://github.com/davidtorosyan/letteropener/raw/v1.1.1/src/modules/main.js
// @resource     tracking https://www.google-analytics.com/collect?v=1&tid=UA-123456-1&cid=5555&t=download
// @grant        GM_info
// ==/UserScript==

/*
    This file handles TamperMonkey setup, the actual code is imported above.

    Note the files listed with @require directives, and follow these rules:
    1. All files under the modules directory must be included.
    2. The first three files must be jQuery, monkeymaster, and common (in that order).
    3. The last file must be main.
*/
