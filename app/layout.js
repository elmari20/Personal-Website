import "./global.css"
import Sidebar from './component/Sidebar'
import { personalData } from '../data/page-data'

export default function RootLayout({ children }) {
  return (
    <html>
      <head/>
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full sm:p-16 p-8 w-full sm:w-2/3 ml-auto">{children}</main>
      </body>
    </html>
  )
}
