/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export default class PhoneNumber extends Phrase {

  getValue (result) {
    return result.replace(/[ ()/-]/g, '')
  }

  displayWhen (input) {
    return /^\+?\(?(\d[ ()/-]{0,2}){0,5}\d?$/.test(input)
  }

  validate (input) {
    return /^\+?\(?(\d[ ()/-]{0,2}){6,14}\d$/.test(input)
  }

  describe() {
    return (
      <placeholder descriptor='phone number' displayWhen={this.displayWhen}>
        <freetext validate={this.validate} splitOn={/\w/} />
      </placeholder>
    )
  }
}
