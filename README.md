# lacona-phrase-phoneNumber

[![Build Status](https://travis-ci.org/lacona/lacona-phrase-phone-number.svg?branch=master)](https://travis-ci.org/lacona/lacona-phrase-phone-number)

Lacona Phrases for matching phone numbers

## Installation

```sh
npm install lacona-phrase-phone-number
```

## Usage

```js
/** @jsx createElement */
import { createElement, Phrase } from 'lacona-phrase'
import { PhoneNumber } from 'lacona-phrase-phone-number'
import { Parser } from 'lacona'

const parser = new Parser({
  grammar: (
    <sequence>
      <literal text='call ' />
      <PhoneNumber />
    </sequence>
  )
})

parser.parseArray('call +1 617 8675309')
/* [{
  words: [
    {text: 'call ', input: true},
    {text: '+1 617 8675309', input: true, argument='phone number'}
}] */
```

## Reference

### `PhoneNUmber`

Matches standard phone numbers. These can optional start with a +, and then can have parenthesis and dashes. The actual structure is not mandated.

#### Result

`String` - the phone numbers, as input (with +, parens, dashes, and all)

#### Props

- `argument`: String - the text for the label
