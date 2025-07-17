import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { ListExam } from "./page/ListExam"
import { ViewAppointments } from "./page/ViewAppointments"

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<ListExam/>} />
          <Route path="/agendamentos" element={<ViewAppointments/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App