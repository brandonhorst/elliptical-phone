/** @jsx createElement */
import {createElement} from 'elliptical'

const defaultProps = {
  argument: 'phone number'
}

function suppressWhen (input) {
  return /^\+?\(?(\d[ ()/-]{0,2}){0,6}$/.test(input)
}

function filter (input) {
  return /^\+?\(?(\d[ ()/-]{0,2}){7,15}$/.test(input)
}

function describe ({props}) {
  return (
    <placeholder text={props.argument} suppressWhen={suppressWhen}>
      <freetext filter={filter} splitOn={/[^0-9()+-]/} />
    </placeholder>
  )
}

export const PhoneNumber = {defaultProps, describe}