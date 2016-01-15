/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export class PhoneNumber extends Phrase {
  static defaultProps = {
    argument: 'phone number'
  }

  suppressWhen (input) {
    return /^\+?\(?(\d[ ()/-]{0,2}){0,6}$/.test(input)
  }

  filter (input) {
    return /^\+?\(?(\d[ ()/-]{0,2}){7,15}$/.test(input)
  }

  describe() {
    return (
      <label text={this.props.argument} suppressWhen={this.suppressWhen}>
        <freetext filter={this.filter} splitOn={/[^0-9()+-]/} />
      </label>
    )
  }
}
