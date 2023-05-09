import '../stylesheets/header.css'
import { Link } from  'react-router-dom'


export default function Header() {
  return (
    <>
      <div class="navbar">
        <a><Link to="/login"><img src="https://cdn.discordapp.com/attachments/682318783767248962/1105084608728530974/icons8-key.svg" height="25vw" alt="Home" /></Link></a>
        <a class="split"><Link to="/"><img src="https://cdn.discordapp.com/attachments/682318783767248962/1103647943514390619/ulan.svg" height="25vw" /></Link></a>
      </div>
   </>
  )
}
