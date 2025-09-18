'use client';

import { Button } from "@/shared/ui/components/button"
import { Input } from "@/shared/ui/components/input"
import { Label } from "@/shared/ui/components/label"
import Nav from '@/shared/ui/components/Nav'
import Image from "next/image"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
  fullName: Yup.string()
    .required("Apellidos y nombres son obligatorios"),
  phone: Yup.string()
    .required("El teléfono es obligatorio"),
})

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
        <Nav />

      {/* Promotional Banner */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">👤</span>
              </div>
              <span className="text-sm text-gray-700">
                Descubre todos tus beneficios: <strong>tu cocinas con Nami Nami</strong> y nosotros nos encargamos del
                resto.
              </span>
            </div>
            <Button variant="link" className="text-red-500 text-sm">
              Registrar mi local →
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-140px)]">
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="w-full h-full relative overflow-hidden">
            <Image
            src="https://img.freepik.com/vector-premium/ilustracion-icono-vectorial-dibujos-animados-alimentos-concepto-icono-objeto-alimentos-fondo-amarillo-aislado_602454-8993.jpg?semt=ais_incoming&w=740&q=80"
            alt="Delicious Peruvian ceviche with colorful garnishes"
            fill
            className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h2 className="text-white text-2xl font-bold mb-2">¡Nos alegra tenerte aquí!</h2>
              <p className="text-white/90">Inicia sesión para continuar tu recorrido culinario.</p>
            </div>
          </div>
        </div>

        {/* Right side - Registration Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-900">✨ Descubre el sabor de Nami Nami</p>
              <h1 className="text-3xl font-bold text-gray-900">
                Regístrate hoy <span className="text-red-500">y recibe</span>{" "}
                <span className="text-red-500 italic">Envíos Gratis</span>{" "}
                <span className="text-gray-900">durante las primeras semanas</span>{" "}
                <span className="text-sm text-gray-600 font-normal">pagando con tarjeta.</span>
              </h1>
            </div>

            {/* Formik Form */}
            <Formik
              initialValues={{
                email: "",
                password: "",
                fullName: "",
                phone: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Aquí va tu lógica de registro
                setSubmitting(false)
                alert("¡Registro exitoso!")
              }}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form className="space-y-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                      * Correo electrónico
                    </Label>
                    <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-900 ${
                        touched.email && errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                    />
                    <ErrorMessage name="email">
                      {msg => <div className="text-red-500 text-xs">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-900">
                      * Contraseña
                    </Label>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-900 ${
                        touched.password && errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    <ErrorMessage name="password">
                      {msg => <div className="text-red-500 text-xs">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-900">
                      * Apellidos y nombres
                    </Label>
                    <Field
                      as={Input}
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="..."
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-900 ${
                        touched.fullName && errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    <ErrorMessage name="fullName">
                      {msg => <div className="text-red-500 text-xs">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-900">
                      * Teléfono
                    </Label>
                    <Field
                      as={Input}
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="999 999 999"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-900 ${
                        touched.phone && errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    <ErrorMessage name="phone">
                      {msg => <div className="text-red-500 text-xs">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium mt-6"
                    disabled={isSubmitting}
                  >
                    Crear cuenta
                  </Button>
                </Form>
              )}
            </Formik>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-900">
                ¿Ya tienes cuenta?{" "}
                <a href="#" className="text-red-500 hover:text-red-600 font-medium">
                  Inicia sesión
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
