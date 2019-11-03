'use strict'

module.exports = function calculateTaxes (taxtable, grossIncome) {
  console.group('calculateTaxes')
  console.log('taxtable:', taxtable)
  console.log('grossIncome:', grossIncome)

  let incomeLeft = grossIncome
  let totalTaxation = 0
  let taxes = 0
  let incomeBracket = 0

  console.group('Tax Table:')
  taxtable.forEach(([taxBracket, taxPercent]) => {
    console.group('taxBracket:', taxBracket, 'taxPercent:', taxPercent)
    if (incomeLeft === 0) {
      console.log('incomeLeft:', incomeLeft)
      console.log('no income, bail out')
    } else if (taxBracket.charAt(0) === '+') {
      console.log('END')
      console.log('incomeLeft:', incomeLeft)
      const tax = incomeLeft * taxPercent
      console.log('tax:', tax)
      taxes += tax
      console.log('taxes:', taxes)
      incomeLeft = 0
    } else if (incomeLeft - Number(taxBracket) <= 0) {
      console.log('ELSE-IF-BLOCK')
      console.log('incomeLeft:', incomeLeft)
      const tax = incomeLeft * taxPercent
      console.log('tax:', tax)
      taxes += tax
      console.log('taxes:', taxes)
      incomeLeft = 0
    } else {
      console.log('ELSE-BLOCK')
      incomeBracket += Number(taxBracket)
      console.log('incomeBracket:', incomeBracket)
      incomeLeft -= Number(taxBracket)
      console.log('incomeLeft:', incomeLeft)
      totalTaxation += Number(taxBracket)

      const tax = (grossIncome - totalTaxation >= 0)
        ? Number(taxBracket) * taxPercent
        : incomeLeft * taxPercent
      console.log('tax:', tax)
      taxes += tax
      console.log('taxes:', taxes)
    }
    console.groupEnd()
  })
  console.groupEnd()

  console.log('taxes:', taxes)
  console.groupEnd()
  return taxes
}
