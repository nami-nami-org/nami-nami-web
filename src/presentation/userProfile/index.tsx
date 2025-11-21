'use client'

import { Calendar, Edit2, LogOut, Mail, MapPin, Phone, Save, Settings, Share2, X } from 'lucide-react'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'Carlos Mendoza',
    email: 'carlos.mendoza@example.com',
    phone: '+51 987 654 321',
    city: 'Lima, Perú',
    bio: 'Amante de la gastronomía peruana y viajero gastronómico. Siempre en busca de nuevas experiencias culinarias.',
    joinDate: 'Miembro desde Enero 2023',
    profileImage: '/user-profile-avatar.jpg'
  })

  const [formData, setFormData] = useState(userData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    setUserData(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(userData)
    setIsEditing(false)
  }

  return (
    <div className='min-h-screen' style={{ backgroundColor: 'var(--bg1)' }}>
      {/* Header */}
      <div className='border-b' style={{ borderColor: 'var(--border)' }}>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
          <h1 className='text-2xl font-bold' style={{ fontFamily: 'var(--font-instrument)', color: 'var(--tn1)' }}>
            Mi Perfil
          </h1>
          <button
            className='rounded-lg p-2 transition-opacity hover:opacity-80'
            style={{ backgroundColor: 'var(--tn1)', color: 'white' }}
          >
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='mx-auto max-w-6xl px-6 py-12'>
        {!isEditing ? (
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {/* Sidebar - Información Principal */}
            <div className='lg:col-span-1'>
              <div
                className='rounded-2xl border p-8 text-center'
                style={{
                  backgroundColor: 'var(--bg2)',
                  borderColor: 'var(--border)'
                }}
              >
                {/* Profile Image */}
                <div className='mb-6 flex justify-center'>
                  <div className='h-40 w-40 overflow-hidden rounded-full border-4' style={{ borderColor: 'var(--tn1)' }}>
                    <img
                      src={userData.profileImage || '/placeholder.svg'}
                      alt={userData.name}
                      className='h-full w-full object-cover'
                    />
                  </div>
                </div>

                {/* User Name */}
                <h2 className='mb-2 text-2xl font-bold' style={{ fontFamily: 'var(--font-instrument)', color: 'var(--fn1)' }}>
                  {userData.name}
                </h2>

                {/* Join Date */}
                <p className='mb-6 flex items-center justify-center gap-2 text-sm' style={{ color: 'var(--fn2)' }}>
                  <Calendar size={16} />
                  {userData.joinDate}
                </p>

                {/* Stats */}
                <div className='mb-6 grid grid-cols-3 gap-4 border-t border-b py-6' style={{ borderColor: 'var(--border)' }}>
                  <div>
                    <p className='text-xl font-bold' style={{ color: 'var(--tn1)' }}>
                      24
                    </p>
                    <p className='text-xs' style={{ color: 'var(--fn2)' }}>
                      Pedidos
                    </p>
                  </div>
                  <div>
                    <p className='text-xl font-bold' style={{ color: 'var(--tn1)' }}>
                      4.8
                    </p>
                    <p className='text-xs' style={{ color: 'var(--fn2)' }}>
                      Rating
                    </p>
                  </div>
                  <div>
                    <p className='text-xl font-bold' style={{ color: 'var(--tn1)' }}>
                      156
                    </p>
                    <p className='text-xs' style={{ color: 'var(--fn2)' }}>
                      Puntos
                    </p>
                  </div>
                </div>

                {/* Edit Button */}
                <button
                  onClick={() => setIsEditing(true)}
                  className='mb-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold transition-all hover:opacity-90'
                  style={{ backgroundColor: 'var(--tn1)', color: 'white' }}
                >
                  <Edit2 size={18} />
                  Editar Perfil
                </button>

                {/* Action Buttons */}
                <div className='space-y-2'>
                  <button
                    className='w-full rounded-lg border py-2 transition-all hover:opacity-80'
                    style={{ borderColor: 'var(--tn1)', color: 'var(--tn1)' }}
                  >
                    <Share2 size={16} className='mr-2 inline' />
                    Compartir Perfil
                  </button>
                  <button
                    className='w-full rounded-lg border py-2 transition-all hover:opacity-80'
                    style={{ borderColor: 'var(--fn2)', color: 'var(--fn2)' }}
                  >
                    <LogOut size={16} className='mr-2 inline' />
                    Cerrar Sesión
                  </button>
                </div>
              </div>

              {/* Additional Info Card */}
              <div
                className='mt-6 rounded-2xl border p-6'
                style={{
                  backgroundColor: 'var(--bg2)',
                  borderColor: 'var(--border)'
                }}
              >
                <h3 className='mb-4 font-bold' style={{ color: 'var(--fn1)' }}>
                  Información de Contacto
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <Mail size={18} style={{ color: 'var(--tn1)' }} />
                    <p style={{ color: 'var(--fn2)' }} className='text-sm break-all'>
                      {userData.email}
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Phone size={18} style={{ color: 'var(--tn1)' }} />
                    <p style={{ color: 'var(--fn2)' }} className='text-sm'>
                      {userData.phone}
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <MapPin size={18} style={{ color: 'var(--tn1)' }} />
                    <p style={{ color: 'var(--fn2)' }} className='text-sm'>
                      {userData.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className='lg:col-span-2'>
              {/* Bio Section */}
              <div
                className='mb-8 rounded-2xl border p-8'
                style={{
                  backgroundColor: 'var(--bg2)',
                  borderColor: 'var(--border)'
                }}
              >
                <h3 className='mb-4 text-lg font-bold' style={{ fontFamily: 'var(--font-instrument)', color: 'var(--fn1)' }}>
                  Acerca de Mí
                </h3>
                <p style={{ color: 'var(--fn2)', lineHeight: '1.6' }}>{userData.bio}</p>
              </div>

              {/* Recent Orders */}
              <div
                className='rounded-2xl border p-8'
                style={{
                  backgroundColor: 'var(--bg2)',
                  borderColor: 'var(--border)'
                }}
              >
                <h3 className='mb-6 text-lg font-bold' style={{ fontFamily: 'var(--font-instrument)', color: 'var(--fn1)' }}>
                  Pedidos Recientes
                </h3>
                <div className='space-y-4'>
                  {[
                    { id: 1, name: 'Arroz con Pollo', date: '20 Nov 2024', total: 'S/. 45.00', status: 'Entregado' },
                    { id: 2, name: 'Ceviche Mixto', date: '18 Nov 2024', total: 'S/. 55.00', status: 'Entregado' },
                    { id: 3, name: 'Lomo a lo Pobre', date: '15 Nov 2024', total: 'S/. 65.00', status: 'Entregado' }
                  ].map(order => (
                    <div
                      key={order.id}
                      className='flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-opacity hover:opacity-80'
                      style={{
                        backgroundColor: 'var(--bg1)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div>
                        <p className='font-semibold' style={{ color: 'var(--fn1)' }}>
                          {order.name}
                        </p>
                        <p className='text-sm' style={{ color: 'var(--fn2)' }}>
                          {order.date}
                        </p>
                      </div>
                      <div className='text-right'>
                        <p className='font-bold' style={{ color: 'var(--tn1)' }}>
                          {order.total}
                        </p>
                        <p className='text-xs font-medium' style={{ color: 'var(--tn1)' }}>
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Edit Mode
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div className='lg:col-span-3'>
              <div
                className='rounded-2xl border p-8'
                style={{
                  backgroundColor: 'var(--bg2)',
                  borderColor: 'var(--border)'
                }}
              >
                <h2 className='mb-8 text-2xl font-bold' style={{ fontFamily: 'var(--font-instrument)', color: 'var(--fn1)' }}>
                  Editar Perfil
                </h2>

                <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
                  {/* Name */}
                  <div>
                    <label className='mb-2 block text-sm font-semibold' style={{ color: 'var(--fn1)' }}>
                      Nombre Completo
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full rounded-lg border px-4 py-3'
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--bg1)',
                        color: 'var(--fn1)'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className='mb-2 block text-sm font-semibold' style={{ color: 'var(--fn1)' }}>
                      Correo Electrónico
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='w-full rounded-lg border px-4 py-3'
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--bg1)',
                        color: 'var(--fn1)'
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className='mb-2 block text-sm font-semibold' style={{ color: 'var(--fn1)' }}>
                      Teléfono
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full rounded-lg border px-4 py-3'
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--bg1)',
                        color: 'var(--fn1)'
                      }}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className='mb-2 block text-sm font-semibold' style={{ color: 'var(--fn1)' }}>
                      Ciudad
                    </label>
                    <input
                      type='text'
                      name='city'
                      value={formData.city}
                      onChange={handleInputChange}
                      className='w-full rounded-lg border px-4 py-3'
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--bg1)',
                        color: 'var(--fn1)'
                      }}
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className='mb-8'>
                  <label className='mb-2 block text-sm font-semibold' style={{ color: 'var(--fn1)' }}>
                    Acerca de Mí
                  </label>
                  <textarea
                    name='bio'
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={5}
                    className='w-full rounded-lg border px-4 py-3'
                    style={{
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--bg1)',
                      color: 'var(--fn1)'
                    }}
                  />
                </div>

                {/* Action Buttons */}
                <div className='flex gap-4'>
                  <button
                    onClick={handleSave}
                    className='flex flex-1 items-center justify-center gap-2 rounded-lg py-3 font-semibold transition-all hover:opacity-90'
                    style={{ backgroundColor: 'var(--tn1)', color: 'white' }}
                  >
                    <Save size={18} />
                    Guardar Cambios
                  </button>
                  <button
                    onClick={handleCancel}
                    className='flex flex-1 items-center justify-center gap-2 rounded-lg border py-3 font-semibold transition-all hover:opacity-80'
                    style={{ borderColor: 'var(--tn1)', color: 'var(--tn1)' }}
                  >
                    <X size={18} />
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
