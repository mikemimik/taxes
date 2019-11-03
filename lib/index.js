'use strict'

const args = process.argv.slice(2)

const province = args[0]
const grossIncome = Number(args[1])

const date = new Date()
const year = date.getFullYear()

console.log('province:', province, 'type:', typeof province)
console.log('grossIncome:', grossIncome, 'type:', typeof grossIncome)
console.log('date:', date, 'type:', typeof date)
console.log('year:', year, 'type:', typeof year)

const taxes = require(`../years/${year}`)
console.log('taxes:', taxes)

console.log('Federal Tax:', calculateTaxes(taxes.federal, grossIncome))
console.log('Provincial Tax:', calculateTaxes(taxes.provincial[province], grossIncome))

function calculateTaxes (taxtable, grossIncome) {
  let incomeLeft = grossIncome
  let totalTaxation = 0
  let taxes = 0
  const incomeBracket = [0, 0]

  taxtable.forEach(([taxBracket, taxPercent]) => {
    if (incomeLeft === 0) {
      // noop
    } else if (taxBracket.charAt(0) === '+') {
      const tax = incomeLeft * taxPercent
      taxes += tax
      incomeLeft = 0
    } else if (incomeLeft - Number(taxBracket) <= 0) {
      totalTaxation += Number(taxBracket)
      incomeBracket.shift()
      incomeBracket.push(totalTaxation)
      const tax = incomeLeft * taxPercent
      taxes += tax
      incomeLeft = 0
    } else {
      incomeLeft -= Number(taxBracket)
      totalTaxation += Number(taxBracket)

      incomeBracket.shift()
      incomeBracket.push(Number(totalTaxation))

      const tax = (grossIncome - totalTaxation >= 0)
        ? Number(taxBracket) * taxPercent
        : incomeLeft * taxPercent

      taxes += tax
    }
  })

  return [taxes, incomeBracket]
}
