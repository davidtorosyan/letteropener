// ==Module==
// @name         monitor
// @namespace    https://github.com/davidtorosyan/letteropener
// @author       David Torosyan
// ==/Module==

/* global $, monkeymaster, lv */

lv.monitor = {};

(function () {
  'use strict'

  // logging
  const console = monkeymaster.setupConsole('lv.monitor')
  console.debug('Loaded')

  // rename the object to lib to allow easy renaming
  const lib = lv.monitor

  function setup () {
    console.log('Setting up monitor.')
    setupStyle()
    monitorDiscard()
  }
  lib.setup = setup

  // constants
  const discardSelector = '.discardcontent .stockitem'
  const textAttribute = 'data-lv_text'
  const usedClass = 'lv_used'
  const doneClass = 'lv_done'

  function setupStyle () {
    $('<style>')
      .prop('type', 'text/css')
      .html(`
            .${usedClass} {
                color: blue;
            }
            .${doneClass} {
                color: red;
            }
        `)
      .appendTo('head')
  }

  function monitorDiscard () {
    processDiscards()
    $.onExists(discardSelector, () => {
      console.log('Detected change in discards.')
      processDiscards()
    })
  }

  function processDiscards () {
    const $cards = $(discardSelector)
    const cards = $.map($cards, resolveCard)
    console.log(`Found cards: ${cards}`)
    const cardMap = toCardMap(cards)
    updateLists(cardMap)
  }

  function toCardMap (cards) {
    const map = new Map()
    for (const card of cards) {
      map.set(card, lv.common.getOrDefault(map, card, 0) + 1)
    }
    return map
  }

  function updateLists (cardMap) {
    updateList(cardMap, $('#explanation_card_content'), lv.common.cardList1)
    updateList(cardMap, $('#explanation_card_content2'), lv.common.cardList2)
  }

  function updateList (cardMap, $list, cardList) {
    const $descriptions = $list.find('.cardexpl_descr')
    $descriptions.each((index, elem) => {
      const $description = $(elem)
      if ($description.attr(textAttribute) === undefined) {
        $description.attr(textAttribute, $description.text())
      }
      const maxCount = getMaxCount($description)
      const card = cardList[index]
      const discardCount = lv.common.getOrDefault(cardMap, card, 0)
      const currentCount = maxCount - discardCount
      setCurrentCount($description, currentCount)
      $description.toggleClass(usedClass, discardCount > 0)
      $description.toggleClass(doneClass, currentCount === 0)
    })
  }

  function getMaxCount ($description) {
    const text = $description.attr(textAttribute)
    const start = text.indexOf('(')
    const end = text.indexOf(')', start)
    const maxNumber = text.substring(start + 1, end)
    return parseInt(maxNumber)
  }

  function setCurrentCount ($description, count) {
    const text = $description.attr(textAttribute)
    const updatedText = text.replace('(', `(${count}/`)
    $description.text(updatedText)
  }

  function resolveCard (card) {
    const iconWidth = 42
    const smallIconWidth = 30
    const offset = getOffsetFromCard(card, false)
    const offsetPercent = getOffsetFromCard(card, true)
    let index
    if (!isNaN(offset)) {
      const width = isSmall(card) ? smallIconWidth : iconWidth
      index = offset / width
    } else {
      index = offsetPercent / 100
    }
    if (!Number.isInteger(index)) {
      const message = 'Failed to parse index from card!'
      console.error(message)
      console.debug(`Found index=${index}, offset=${offset}, offsetPercent=${offsetPercent}`)
      throw message
    }
    const found = lv.common.cardOrder[index]
    if (found === undefined) {
      const message = 'Failed to convert index to card!'
      console.error(message)
      console.debug(`Found index=${index}`)
      throw message
    }
    return found
  }

  function getOffsetFromCard (card, asPercent) {
    const style = $(card).attr('style')
    const delim = asPercent ? '%' : 'px'
    const marker = 'background-position: -'
    const start = style.indexOf(marker)
    if (start === -1) {
      return 0
    }
    const end = style.indexOf(delim, start)
    if (end === -1) {
      return NaN
    }
    const offset = style.substring(start + marker.length, end)
    if (offset.indexOf(' ') !== -1) {
      return NaN
    }
    return parseInt(offset)
  }

  function isSmall (card) {
    const style = $(card).attr('style')
    return style.indexOf('_small') !== -1
  }
// eslint-disable-next-line semi
})(); // this semicolon is needed so TamperMonkey doesn't break
