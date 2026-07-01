import React, { useState } from 'react'
import { Alert, Button, Form, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

import { sendContactMessage } from '../services/contactApi'

type ContactFormValues = {
  name: string
  email: string
  message: string
}

const inputAffixClassNames = {
  affixWrapper:
    '!rounded-lg !border !border-border-input !bg-surface !py-2.5 !shadow-none hover:!border-border-input focus-within:!border-transparent focus-within:!ring-2 focus-within:!ring-marie-gold disabled:!opacity-60',
  input: '!bg-surface !text-foreground placeholder:!text-placeholder'
}

const textAreaClassName =
  '!resize-y !rounded-lg !border-border-input !bg-surface !py-3 !pl-10 !pr-4 !text-foreground placeholder:!text-placeholder focus:!border-transparent focus:!ring-2 focus:!ring-marie-gold disabled:!opacity-60'

const IconTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<typeof Input.TextArea>
>((props, ref) => (
  <div className='relative'>
    <FontAwesomeIcon
      icon={faComment}
      className='pointer-events-none absolute left-3 top-4 z-10 text-placeholder'
      aria-hidden
    />
    <Input.TextArea {...props} ref={ref} className={`${textAreaClassName} ${props.className ?? ''}`} />
  </div>
))
IconTextArea.displayName = 'IconTextArea'

export default function ContactForm(): React.ReactElement {
  const [form] = Form.useForm<ContactFormValues>()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onFinish = async (values: ContactFormValues): Promise<void> => {
    setError(null)
    setSubmitting(true)

    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim()
      })
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className='rounded-2xl border border-marie-gold-light/50 bg-marie-ivory/80 p-8 text-center'>
        <h3 className='font-heading text-xl font-semibold text-foreground'>Thank you!</h3>
        <p className='mt-2 text-muted'>
          Your message has been noted. Marie will be in touch shortly — usually within one business day.
        </p>
      </div>
    )
  }

  return (
    <Form
      form={form}
      layout='vertical'
      requiredMark={false}
      onFinish={onFinish}
      className='[&_.ant-form-item]:!mb-5 [&_.ant-form-item-label>label]:!h-auto [&_.ant-form-item-label>label]:!text-sm [&_.ant-form-item-label>label]:!font-medium [&_.ant-form-item-label>label]:!text-foreground [&_.ant-form-item-label]:!pb-1.5'
    >
      {error ? (
        <Alert
          type='error'
          message={error}
          showIcon={false}
          role='alert'
          className='!mb-5 !rounded-lg !border !border-red-300 !bg-red-50 !px-4 !py-3 dark:!border-red-800 dark:!bg-red-950/40 [&_.ant-alert-message]:!text-sm [&_.ant-alert-message]:!text-red-800 dark:[&_.ant-alert-message]:!text-red-200'
        />
      ) : null}

      <Form.Item label='Your name' name='name' rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input
          prefix={<FontAwesomeIcon icon={faUser} className='text-placeholder' aria-hidden />}
          autoComplete='name'
          placeholder='Jane Smith'
          disabled={submitting}
          classNames={inputAffixClassNames}
        />
      </Form.Item>

      <Form.Item
        label='Email address'
        name='email'
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input
          prefix={<FontAwesomeIcon icon={faEnvelope} className='text-placeholder' aria-hidden />}
          type='email'
          autoComplete='email'
          placeholder='you@example.com'
          disabled={submitting}
          classNames={inputAffixClassNames}
        />
      </Form.Item>

      <Form.Item label='Message' name='message' rules={[{ required: true, message: 'Please enter a message' }]}>
        <IconTextArea rows={5} placeholder="Tell us what you'd like to order, or ask a question…" disabled={submitting} />
      </Form.Item>

      <Button
        htmlType='submit'
        disabled={submitting}
        className='!h-auto !w-full !rounded-lg !border-0 !bg-marie-green-deep !px-4 !py-3 !text-sm !font-semibold !text-marie-cream !shadow-none hover:!bg-marie-green-forest focus-visible:!outline focus-visible:!ring-2 focus-visible:!ring-marie-gold focus-visible:!ring-offset-2 disabled:!cursor-not-allowed disabled:!opacity-60 sm:!w-auto sm:!px-8'
      >
        {submitting ? 'Sending…' : 'Send message'}
      </Button>
    </Form>
  )
}
