import React from 'react'
import { H3,
  Form, InputWrapper,
  LabelWrapper, Label,
  InputBorder, Input,
  InputTail, TextArea,
  ButtonWrapper, Button
} from './styles'

export const ContactForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <H3>escribeme</H3>
      <InputWrapper>
        <LabelWrapper>
          <Label>nombre</Label>
        </LabelWrapper>
        <InputBorder>
          <Input required type='text' name='name' autoComplete='off' />
        </InputBorder>
        <InputTail />
      </InputWrapper>

      <InputWrapper>
        <LabelWrapper>
            <Label>email</Label>
        </LabelWrapper>
        <InputBorder>
          <Input required type='email' name='e-mail' autoComplete='off' />
        </InputBorder>
        <InputTail />
      </InputWrapper>

      <InputWrapper>
        <LabelWrapper>
          <Label>asunto</Label>
        </LabelWrapper>
        <InputBorder>
          <Input required type='text' name='subject' autoComplete='off' />
        </InputBorder>
        <InputTail />
      </InputWrapper>

      <InputWrapper>
        <LabelWrapper>
          <Label>mensaje</Label>
        </LabelWrapper>
        <InputBorder>
          <TextArea required name='message' />
        </InputBorder>
        <InputTail />
      </InputWrapper>

      <ButtonWrapper>
        <InputBorder>
          <Button type='submit'>enviar mensaje</Button>
        </InputBorder>
        <InputTail />
      </ButtonWrapper>
    </Form>
  )
}
