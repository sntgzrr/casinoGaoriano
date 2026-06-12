import { Link, useSearchParams } from 'react-router-dom'
import { Ticket, Calendar, Shield, ArrowLeft } from 'lucide-react'

const dayNames = {
  monday: 'Lunes',
  tuesday: 'Martes',
  wednesday: 'Miércoles',
  thursday: 'Jueves',
  friday: 'Viernes',
  saturday: 'Sábado',
  sunday: 'Domingo',
}

function parseQrPayload(payload) {
  if (!payload) return null

  try {
    const decoded = decodeURIComponent(payload)
    const parsed = JSON.parse(decoded)
    return {
      uid: parsed.uid,
      username: parsed.username,
      week: parsed.week,
      day: parsed.day,
      code: parsed.code,
    }
  } catch {
    return null
  }
}

export function TicketView() {
  const [searchParams] = useSearchParams()
  const payloadParam = searchParams.get('payload')
  const uid = searchParams.get('uid')
  const username = searchParams.get('username')
  const week = searchParams.get('week')
  const day = searchParams.get('day')
  const code = searchParams.get('code')

  const ticket = parseQrPayload(payloadParam) || {
    uid,
    username,
    week,
    day,
    code,
  }

  const hasTicket = ticket && ticket.uid && ticket.username && ticket.week && ticket.day && ticket.code

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm text-white hover:bg-white/20 transition"
          >
            <ArrowLeft size={18} /> Volver al inicio
          </Link>
        </div>

        <div className="rounded-3xl border border-amber-500/20 bg-slate-900/90 shadow-2xl p-8 ring-1 ring-amber-500/10">
          <div className="flex items-center gap-3 mb-6">
            <Ticket className="text-amber-400" size={28} />
            <div>
              <h1 className="text-3xl font-bold">Ticket</h1>
            </div>
          </div>

          {hasTicket ? (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5">
                  <p className="text-sm text-gray-400 uppercase tracking-[0.25em]">Usuario</p>
                  <p className="mt-2 text-lg font-semibold text-white">{ticket.username}</p>
                  <p className="text-sm text-gray-400 mt-1">{ticket.uid}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5">
                  <p className="text-sm text-gray-400 uppercase tracking-[0.25em]">Ticket</p>
                  <p className="mt-2 text-lg font-semibold text-amber-400">{ticket.code}</p>
                  <p className="text-sm text-gray-400 mt-1">Semana {ticket.week}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-[0.25em]">Día</p>
                    <p className="mt-2 text-lg font-semibold text-white">{dayNames[ticket.day] || ticket.day}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                    <Shield size={16} /> Acceso público
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-5 text-amber-100">
                <p className="text-sm font-medium">Este ticket es visible sin iniciar sesión.</p>
                <p className="mt-2 text-sm text-gray-300">
                  Cualquier persona que escanee el QR podrá ver los detalles del ticket del usuario y validar el acceso.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-8 text-center">
              <p className="text-xl font-semibold text-white mb-3">Ticket inválido o incompleto</p>
              <p className="text-sm text-gray-400">
                Revisa que el URL de acceso contenga la información correcta o escanea nuevamente el código QR.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
