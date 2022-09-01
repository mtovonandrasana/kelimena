import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div>
      <a href="#">MTO</a>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/mtovonandrasana" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/michael-tovonandrasana-aa869a11a/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}