'use strict'

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
  ]
}
exports.provincial.labrador = exports.provincial.newfoundland
exports.provincial['prince edward island'] = exports.provincial.pei
exports.provincial['nova scotia'] = exports.provincial.ns
exports.provincial['new brunswick'] = exports.provincial.nb
