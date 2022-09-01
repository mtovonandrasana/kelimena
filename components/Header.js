import Navbar from "./Navbar"

export default function Header({ title }) {
  return (
    <div>
      <Navbar />
      <h1 className="title">{title}</h1>
    </div>
  )
}
