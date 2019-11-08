'use strict'

// TODO: Fix spaces in object name; they will break the cli arg parcing
exports.federal = [
  ['47630', 0.15],
  ['47629', 0.205],
  ['52408', 0.26],
  ['62704', 0.29],
  ['+210371', 0.33]
]

exports.provincial = {
  ontario: [
    ['43906', 0.0505],
    ['43907', 0.0915],
    ['62187', 0.1116],
    ['70000', 0.1216],
    ['+220000', 0.1316]
  ],
  newfoundland: [
    ['37591', 0.087],
    ['37590', 0.145],
    ['59043', 0.158],
    ['53689', 0.173],
    ['+187913', 0.183]
  ],
  pei: [
    ['31984', 0.098],
    ['31985', 0.138],
    ['+63969', 0.167]
  ],
  ns: [
    ['29590', 0.0879],
    ['29590', 0.1495],
    ['33820', 0.1667],
    ['57000', 0.175],
    ['+150000', 0.21]
  ],
  nb: [
    ['42592', 0.0968],
    ['42592', 0.1482],
    ['53307', 0.1652],
    ['19287', 0.1784],
    ['+157778', 0.203]
  ],
  manitoba: [
    ['32670', 0.108],
    ['37940', 0.1275],
    ['+70610', 0.145]
  ],
  saskatchewan: [
    ['45225', 0.105],
    ['83989', 0.125],
    ['+129214', 0.145]
  ],
  alberta: [
    ['131220', 0.10],
    ['26244', 0.12],
    ['52488', 0.13],
    ['104976', 0.14],
    ['+314928', 0.15]
  ],
  bc: [
    ['40707', 0.0506],
    ['40709', 0.077],
    ['12060', 0.105],
    ['20030', 0.1229],
    ['40394', 0.147],
    ['+153900', 0.168]
  ]
}
exports.provincial.labrador = exports.provincial.newfoundland
exports.provincial['prince edward island'] = exports.provincial.pei
exports.provincial['nova scotia'] = exports.provincial.ns
exports.provincial['new brunswick'] = exports.provincial.nb
exports.provincial['british columbia'] = exports.provincial.bc
