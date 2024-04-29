// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  Text,
  Label,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(
    'Your password must be at least 8 characters',
  )

  const onChangeHandle = event => {
    const inputValue = event.target.value
    setPassword(inputValue)

    if (inputValue.length < 8 && inputValue.length > 0) {
      setErrorMsg('Your password must be at least 8 characters')
    } else {
      setErrorMsg('')
    }
  }

  return (
    <MainContainer>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Label htmlFor="password">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={onChangeHandle}
          />
        </Label>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
