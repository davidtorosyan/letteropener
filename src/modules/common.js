// ==Module==
// @name         common
// @namespace    https://github.com/davidtorosyan/letteropener
// @author       David Torosyan
// ==/Module==

/* global jQuery, monkeymaster */

const lv = {}
lv.common = {};

(function () {
  'use strict'

  // rename the object to lib to allow easy renaming
  const lib = lv.common

  function getOrDefault (map, key, defaultValue) {
    const value = map.get(key)
    return value === undefined ? defaultValue : value
  }
  lib.getOrDefault = getOrDefault

  const sets = {
    BASE: 'base',
    EXPANSION: 'expansion'
  }
  lib.sets = sets

  const cards = {
    GUARD: {
      name: 'guard',
      value: 1,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    PRIEST: {
      name: 'priest',
      value: 2,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    BARON: {
      name: 'baron',
      value: 3,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    HANDMAID: {
      name: 'handmaid',
      value: 4,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    PRINCE: {
      name: 'prince',
      value: 5,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    KING: {
      name: 'king',
      value: 6,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    COUNTESS: {
      name: 'countess',
      value: 7,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    PRINCESS: {
      name: 'princess',
      value: 8,
      set: sets.BASE,
      toString: function () {
        return this.name
      }
    },
    ASSASSIN: {
      name: 'assassin',
      value: 0,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    JESTER: {
      name: 'jester',
      value: 0,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    CARDINAL: {
      name: 'cardinal',
      value: 2,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    BARONESS: {
      name: 'baroness',
      value: 3,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    SYCOPHANT: {
      name: 'sycophant',
      value: 4,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    COUNT: {
      name: 'count',
      value: 5,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    CONSTABLE: {
      name: 'constable',
      value: 6,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    DOWAGER: {
      name: 'dowager',
      value: 7,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    },
    BISHOP: {
      name: 'bishop',
      value: 9,
      set: sets.EXPANSION,
      toString: function () {
        return this.name
      }
    }
  }
  lib.cards = cards

  // the order as it appears in cardnumbers.png
  // undefined represents blank spaces in the image
  const cardOrder = [
    cards.GUARD,
    cards.PRIEST,
    cards.BARON,
    cards.HANDMAID,
    cards.PRINCE,
    cards.KING,
    cards.COUNTESS,
    cards.PRINCESS,
    undefined,
    undefined,
    cards.DOWAGER,
    cards.GUARD,
    cards.ASSASSIN,
    cards.BISHOP,
    cards.CONSTABLE,
    cards.JESTER,
    cards.SYCOPHANT,
    cards.COUNT,
    cards.BARONESS,
    cards.CARDINAL
  ]
  lib.cardOrder = cardOrder

  // order of the cards in base set list
  const cardList1 = [
    cards.PRINCESS,
    cards.COUNTESS,
    cards.KING,
    cards.PRINCE,
    cards.HANDMAID,
    cards.BARON,
    cards.PRIEST,
    cards.GUARD
  ]
  lib.cardList1 = cardList1

  // order of the cards in expansion set list
  const cardList2 = [
    cards.BISHOP,
    cards.DOWAGER,
    cards.CONSTABLE,
    cards.COUNT,
    cards.SYCOPHANT,
    cards.BARONESS,
    cards.CARDINAL,
    cards.JESTER,
    cards.ASSASSIN
  ]
  lib.cardList2 = cardList2;

  // jQuery extensions

  (function ($) {
    $.onExists = function (selector, callback, options = {}) {
      $(document).onExists(selector, callback, options)
    }

    $.fn.onExists = function (selector, callback, options = {}) {
      monkeymaster.onExists(selector, callback, {
        target: this[0],
        delayMs: options.delayMs,
        once: options.once
      })
    }
  })(jQuery)
})()
