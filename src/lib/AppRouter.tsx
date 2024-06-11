import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DrugsPage, HomePage, Layout } from '../pages'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/drugs/:id" element={<DrugsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
