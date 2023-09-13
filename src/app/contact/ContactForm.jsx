'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useId, useState } from 'react'

function TextInput({ label, ...props }) {
  let id = useId()
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        required
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export function ContactForm() {
  const [captchaCompleted, setCaptchaCompleted] = useState(false)
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    '0-2/type': '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formDataPayload = {
        fields: [
          {
            name: 'firstname',
            value: formData.firstname,
          },
          {
            name: 'email',
            value: formData.email,
          },
          {
            name: 'company',
            value: formData.company,
          },
          {
            name: 'phone',
            value: formData.phone,
          },
          {
            name: 'message',
            value: formData.message,
          },
          {
            name: '0-2/type',
            value: formData['0-2/type'],
          },
        ],
      }
      const response = await fetch('/api/hubspot', {
        method: 'POST',
        body: JSON.stringify(formDataPayload),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const responseData = await response.json(formData)
      // console.log('HubSpot Response:', responseData)

      setFormData({
        firstname: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        '0-2/type': '',
      })
    } catch (error) {
      console.error('Error submitting form to HubSpot:', error)
    }
    toast('Thanks your connecting us!')
  }

  const recaptcha_sitekey = process.env.SITEKEY

  function onChange(value) {
    if (value) {
      setCaptchaCompleted(true)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <div className="lg:order-last">
        <form onSubmit={handleSubmit}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Work inquiries
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput
              label="Name"
              name="firstname"
              autoComplete="name"
              onChange={handleChange}
              value={formData.firstname}
              required
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <TextInput
              label="Company"
              name="company"
              autoComplete="organization"
              onChange={handleChange}
              value={formData.company}
              required
            />
            <TextInput
              label="Phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              onChange={handleChange}
              value={formData.phone}
              required
            />
            <TextInput
              label="Message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
            />
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">Budget</legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput
                    label="$25K – $50K"
                    name="0-2/type"
                    value="25"
                    onChange={handleChange}
                    checked={formData['0-2/type'] === '25'}
                  />
                  <RadioInput
                    label="$50K – $100K"
                    name="0-2/type"
                    value="50"
                    onChange={handleChange}
                    checked={formData['0-2/type'] === '50'}
                  />
                  <RadioInput
                    label="$100K – $150K"
                    name="0-2/type"
                    value="100"
                    onChange={handleChange}
                    checked={formData['0-2/type'] === '100'}
                  />
                  <RadioInput
                    label="More than $150K"
                    name="0-2/type"
                    value="150"
                    onChange={handleChange}
                    checked={formData['0-2/type'] === '150'}
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <ReCAPTCHA sitekey={recaptcha_sitekey} onChange={onChange} />
          <Button type="submit" className="mt-10" disabled={!captchaCompleted}>
            Let’s work together
            <ToastContainer />
          </Button>
        </form>
      </div>
    </FadeIn>
  )
}
