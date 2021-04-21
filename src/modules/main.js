// ==Module==
// @name         main
// @namespace    https://github.com/davidtorosyan/letteropener
// @author       David Torosyan
// ==/Module==

/* global $, monkeymaster, lv */

(function () {
  'use strict'

  // logging
  const console = monkeymaster.setupConsole('lv.main')
  console.debug('Loaded')

  // setup when ready
  $(document).ready(function () {
    lv.monitor.setup()
  })
})()
