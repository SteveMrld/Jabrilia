'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nom = data.get('nom') as string
    const email = data.get('email') as string
    const sujet = data.get('sujet') as string
    const message = data.get('message') as string

    window.location.href = `mailto:contact@jabrilia.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(
      `De : ${nom} <${email}>\n\n${message}`
    )}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border border-gold/30 p-10 text-center">
        <p className="font-serif text-2xl font-light text-paper mb-3">Message envoyé.</p>
        <p className="font-sans text-paper/40 text-sm">Nous vous répondrons dans les meilleurs délais.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {[
        { name: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com' },
        { name: 'sujet', label: 'Sujet', type: 'text', placeholder: 'Objet de votre message' },
      ].map(field => (
        <div key={field.name}>
          <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-paper/40 block mb-2">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required
            className="w-full bg-transparent border-b border-border text-paper font-sans text-sm py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-paper/20"
          />
        </div>
      ))}

      <div>
        <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-paper/40 block mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Votre message…"
          required
          rows={6}
          className="w-full bg-transparent border-b border-border text-paper font-sans text-sm py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-paper/20 resize-none"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="font-sans text-[11px] tracking-[0.28em] uppercase text-ink bg-gold px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Envoyer le message
        </button>
      </div>
    </form>
  )
}
