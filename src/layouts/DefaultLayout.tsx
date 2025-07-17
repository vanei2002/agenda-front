import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (

    
    <div className="min-h-screen flex flex-col bg-background text-foreground">
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className='max-w-[80%] m-auto'>
        <h1 className="text-2xl font-bold">Clínica Médica</h1>
      <p className="text-sm text-white/80">Sistema de Agendamento de Exames</p>
      </div>
    </nav>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
  