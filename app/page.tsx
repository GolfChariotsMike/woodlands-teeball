'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function RegistrationForm() {
  const [form, setForm] = useState({
    child_name: '',
    child_age: '',
    grade: '',
    school: '',
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
      <main className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F5ECD7' }}>
        <div className="rounded-2xl shadow-xl overflow-hidden max-w-md w-full text-center" style={{ backgroundColor: '#fff8ee' }}>
          <div className="py-6 px-8" style={{ backgroundColor: '#013c28' }}>
            <Image
              src="https://www.woodlandsteeball.com.au/wp-content/uploads/2018/04/Woodlands-Teeball-Club.png"
              alt="Woodlands Teeball Club"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <div className="p-8">
            <div className="text-5xl mb-3">🎉</div>
            <h1 className="text-2xl font-bold mb-2" style={{ color: '#013c28' }}>You&apos;re registered!</h1>
            <p className="text-gray-600">We&apos;ll be in touch with clinic details. See you on the diamond!</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F5ECD7' }}>
      <div className="rounded-2xl shadow-xl overflow-hidden max-w-lg w-full" style={{ backgroundColor: '#fff8ee' }}>

        {/* Header */}
        <div className="px-8 py-7 text-white text-center" style={{ backgroundColor: '#013c28' }}>
          <Image
            src="https://www.woodlandsteeball.com.au/wp-content/uploads/2018/04/Woodlands-Teeball-Club.png"
            alt="Woodlands Teeball Club"
            width={100}
            height={100}
            className="mx-auto mb-3"
          />
          <h1 className="text-xl font-bold tracking-wide uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Woodlands Teeball Club
          </h1>
          <p className="text-sm mt-1" style={{ color: '#DD6420', fontWeight: 600 }}>After School Clinic — Registration</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">

          <div>
            <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>
              Child&apos;s Full Name <span style={{ color: '#DD6420' }}>*</span>
            </label>
            <input
              type="text"
              name="child_name"
              required
              value={form.child_name}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
              style={{ borderColor: '#d4c4a0' }}
              placeholder="e.g. Jack Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>School</label>
            <input
              type="text"
              name="school"
              value={form.school}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
              style={{ borderColor: '#d4c4a0' }}
              placeholder="e.g. Woodlands Primary School"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>Age</label>
              <input
                type="text"
                name="child_age"
                value={form.child_age}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
                style={{ borderColor: '#d4c4a0' }}
                placeholder="e.g. 8"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>Year / Grade</label>
              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
                style={{ borderColor: '#d4c4a0' }}
              >
                <option value="">Select...</option>
                {['Pre-Primary', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'].map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>
              Parent / Guardian Name <span style={{ color: '#DD6420' }}>*</span>
            </label>
            <input
              type="text"
              name="parent_name"
              required
              value={form.parent_name}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
              style={{ borderColor: '#d4c4a0' }}
              placeholder="e.g. Sarah Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>
              Phone Number <span style={{ color: '#DD6420' }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
              style={{ borderColor: '#d4c4a0' }}
              placeholder="e.g. 0412 345 678"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
              style={{ borderColor: '#d4c4a0' }}
              placeholder="e.g. sarah@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#013c28' }}>Medical Notes / Allergies</label>
            <textarea
              name="medical_notes"
              value={form.medical_notes}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-lg px-4 py-2.5 focus:outline-none border-2 bg-white"
              style={{ borderColor: '#d4c4a0' }}
              placeholder="Any medical conditions or allergies we should know about (optional)"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <p className="text-center text-sm font-semibold" style={{ color: '#013c28' }}>
            ⚠️ A parent or guardian must remain on-site for the duration of each training session.
          </p>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full text-white font-bold py-3 rounded-lg transition uppercase tracking-widest hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#013c28' }}
          >
            {status === 'loading' ? 'Registering...' : 'Register Now'}
          </button>

          <p className="text-center text-xs" style={{ color: '#888' }}>
            Woodlands Reserve, Teakwood Ave, Woodlands WA 6018
          </p>
        </form>
      </div>
    </main>
  )
}
