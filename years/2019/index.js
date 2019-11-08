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
  ]
}
exports.provincial.labrador = exports.provincial.newfoundland
exports.provincial['prince edward island'] = exports.provincial.pei
