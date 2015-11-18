/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export default class PhoneNumber extends Phrase {

  getValue (result) {
    if (!result) return

    return result.replace(/[ ()/-]/g, '')
  }

  displayWhen (input) {
    return /^\+?\(?(\d[ ()/-]{0,2}){0,6}$/.test(input)
  }

  validate (input) {
    return /^\+?\(?(\d[ ()/-]{0,2}){7,15}$/.test(input)
  }

  describe() {
    return (
      <argument text='phone number' displayWhen={this.displayWhen}>
        <freetext validate={this.validate} splitOn={/\w/} />
      </argument>
    )
  }
}
