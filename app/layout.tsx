import './globals.css'

export const metadata = {
  title: 'Calculadora de IMC',
  description: 'Calcula tu Índice de Masa Corporal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-center text-2xl">Calculadora de IMC</h1>
        </header>
        <main className="container mx-auto mt-8">{children}</main>
      </body>
    </html>
  )
}
