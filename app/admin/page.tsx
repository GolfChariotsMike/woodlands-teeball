'use client'

import { useState, useEffect } from 'react'

type Registration = {
  id: string
  child_name: string
  child_age: string
  grade: string
  parent_name: string
  phone: string
  email: string
  medical_notes: string
  created_at: string
}

export default function AdminPage() {
  const [pin, setPin] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [wrongPin, setWrongPin] = useState(false)
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(false)

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pin === '1974') {
      setUnlocked(true)
      setWrongPin(false)
    } else {
      setWrongPin(true)
      setPin('')
    }
  }

  useEffect(() => {
    if (unlocked) {
      setLoading(true)
      fetch('/api/admin/registrations')
        .then(r => r.json())
        .then(data => { setRegistrations(data); setLoading(false) })
        .catch(() => setLoading(false))
    }
  }, [unlocked])

  const exportCSV = () => {
    const headers = ['Child Name', 'Age', 'Grade', 'Parent Name', 'Phone', 'Email', 'Medical Notes', 'Registered At']
    const rows = registrations.map(r => [
      r.child_name, r.child_age, r.grade, r.parent_name, r.phone, r.email,
      r.medical_notes, new Date(r.created_at).toLocaleString('en-AU')
    ])
    const csv = [headers, ...rows].map(row => row.map(v => `"${(v || '').replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = 'teeball-registrations.csv'; a.click()
  }

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h1 className="text-xl font-bold text-gray-800 mb-6">Admin Access</h1>
          <form onSubmit={handlePinSubmit} className="space-y-4">
            <input
              type="password"
              value={pin}
              onChange={e => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500"
              maxLength={10}
              autoFocus
            />
            {wrongPin && <p className="text-red-500 text-sm">Incorrect PIN</p>}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Unlock
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#013c28' }}>⚾ Woodlands Teeball — Registrations</h1>
            <p className="text-gray-500 text-sm mt-1">{registrations.length} registered</p>
          </div>
          <button
            onClick={exportCSV}
            className="text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-90"
            style={{ backgroundColor: '#DD6420' }}
          >
            Export CSV
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : registrations.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center text-gray-400">No registrations yet.</div>
        ) : (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-sm">
              <thead className="text-white" style={{ backgroundColor: '#013c28' }}>
                <tr>
                  {['Child', 'Age', 'Grade', 'Parent', 'Phone', 'Email', 'Medical', 'Registered'].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {registrations.map((r, i) => (
                  <tr key={r.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium">{r.child_name}</td>
                    <td className="px-4 py-3 text-gray-600">{r.child_age || '—'}</td>
                    <td className="px-4 py-3 text-gray-600">{r.grade || '—'}</td>
                    <td className="px-4 py-3">{r.parent_name}</td>
                    <td className="px-4 py-3 text-gray-600">{r.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{r.email || '—'}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{r.medical_notes || '—'}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                      {new Date(r.created_at).toLocaleString('en-AU', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
