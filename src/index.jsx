/** @jsx createElement */
import {createElement} from 'elliptical'

function suppressWhen (input) {
  return /^\+?\(?(\d[ ()/-]{0,2}){0,6}$/.test(input)
}

function filter (input) {
  return /^\+?\(?(\d[ ()/-]{0,2}){7,15}$/.test(input)
}

const defaultProps = {
  label: 'phone number'
}

function describe ({props}) {
  return (
    <placeholder
      label={props.label}
      arguments={props.phraseArguments || (props.phraseArguments ? [props.phraseArgument] : [props.label])}
      suppressWhen={suppressWhen}>
      <freetext filter={filter} splitOn={/[^0-9()+-]/} />
    </placeholder>
  )
}

export const PhoneNumber = {describe, defaultProps, id: 'elliptical-phone:PhoneNumber'}
