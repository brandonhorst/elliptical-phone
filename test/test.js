/** @jsx createElement */
/* eslint-env mocha */

import _ from 'lodash'
import {createElement, compile} from 'elliptical'
import {PhoneNumber} from '../src/index'
import {expect} from 'chai'

function text(input) {
  return _.map(input.words, 'text').join('')
}

describe('PhoneNumber', () => {
  let parse

  it('handles valid phone numbers', () => {
    parse = compile(<PhoneNumber />)

    const data1 = parse('+1 (123) 123-1243')
    expect(data1).to.have.length(1)
    expect(text(data1[0])).to.equal('+1 (123) 123-1243')
    expect(data1[0].result).to.equal('+1 (123) 123-1243')

    const data2 = parse('7897896789')
    expect(data2).to.have.length(1)
    expect(text(data2[0])).to.equal('7897896789')
    expect(data2[0].result).to.equal('7897896789')

    const data3 = parse('234f2341')
    expect(data3).to.have.length(0)
  })

  it('suppresses incomplete valid phone numbers', () => {
    parse = compile(<PhoneNumber />)

    const data1 = parse('+1 (123)')
    expect(data1).to.have.length(1)
    expect(text(data1[0])).to.equal('phone number')
    expect(data1[0].words[0].placeholder).to.be.true

    const data2 = parse('7')
    expect(data2).to.have.length(1)
    expect(text(data2[0])).to.equal('phone number')
    expect(data2[0].words[0].placeholder).to.be.true

    const data3 = parse('2f3')
    expect(data3).to.have.length(0)
  })
})
