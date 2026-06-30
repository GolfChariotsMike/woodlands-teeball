'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function RegistrationForm() {
  const [form, setForm] = useState({
    child_name: '',
    child_age: '',
    grade: '',
    parent_name: '',
    phone: '',
    email: '',
    medical_notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <main className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <Image
            src="https://www.woodlandsteeball.com.au/wp-content/uploads/2018/04/Woodlands-Teeball-Club.png"
            alt="Woodlands Teeball Club"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold mb-2" style={{ color: '#013c28' }}>You&apos;re registered!</h1>
          <p className="text-gray-600">We&apos;ll be in touch with clinic details. See you on the diamond!</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-lg w-full">

        {/* Header */}
        <div className="px-8 py-6 text-white text-center" style={{ backgroundColor: '#013c28' }}>
          <Image
            src="https://www.woodlandsteeball.com.au/wp-content/uploads/2018/04/Woodlands-Teeball-Club.png"
            alt="Woodlands Teeball Club"
            width={90}
            height={90}
            className="mx-auto mb-3"
          />
          <h1 className="text-xl font-bold tracking-wide">Woodlands Teeball Club</h1>
          <p className="text-sm mt-1 opacity-80">After School Clinic — Registration</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1" style={{ color: '#013c28' }}>Child&apos;s Full Name *</label>
            <input
              type="text"
              name="child_name"
              required
              value={form.child_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#013c28' } as React.CSSProperties}
              placeholder="e.g. Jack Smith"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#013c28' }}>Age</label>
              <input
                type="text"
                name="child_age"
                value={form.child_age}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
                placeholder="e.g. 8"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#013c28' }}>Year / Grade</label>
              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              >
                <option value="">Select...</option>
                {['Pre-Primary', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'].map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" style={{ color: '#013c28' }}>Parent / Guardian Name *</label>
            <input
              type="text"
              name="parent_name"
              required
              value={form.parent_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              placeholder="e.g. Sarah Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" style={{ color: '#013c28' }}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              placeholder="e.g. 0412 345 678"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" style={{ color: '#013c28' }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              placeholder="e.g. sarah@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" style={{ color: '#013c28' }}>Medical Notes / Allergies</label>
            <textarea
              name="medical_notes"
              value={form.medical_notes}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              placeholder="Any medical conditions or allergies we should know about (optional)"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full text-white font-bold py-3 rounded-lg transition hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#DD6420' }}
          >
            {status === 'loading' ? 'Registering...' : 'Register Now'}
          </button>
        </form>
      </div>
    </main>
  )
}
