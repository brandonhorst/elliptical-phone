/** @jsx createElement */
/* eslint-env mocha */

import {createElement, Phrase} from 'lacona-phrase'
import PhoneNumber from '..'
import {expect} from 'chai'
import fulltext from 'lacona-util-fulltext'
import {Parser} from 'lacona'

describe('PhoneNumber', () => {
  let parser

  beforeEach(() => {
    parser = new Parser()
  })

  it('handles valid phone numbers', () => {
    parser.grammar = <PhoneNumber />

    const data1 = parser.parseArray('+1 (123) 123-1243')
    expect(data1).to.have.length(1)
    expect(fulltext.all(data1[0])).to.equal('+1 (123) 123-1243')
    expect(data1[0].result).to.equal('+11231231243')

    const data2 = parser.parseArray('7897896789')
    expect(data2).to.have.length(1)
    expect(fulltext.all(data2[0])).to.equal('7897896789')
    expect(data2[0].result).to.equal('7897896789')

    const data3 = parser.parseArray('234f2341')
    expect(data3).to.have.length(0)
  })
})
