import React from 'react'
import Header from '../components/Header'
import '../stylesheets/register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>


        <Header />

        <div class="registerBDiv">
          <div class="registerMDiv">
              <div class="registerSDiv1">
                  <img src="https://cdn.discordapp.com/attachments/682318783767248962/1103647943514390619/ulan.svg" height="35%" />
              </div>
              <div class="registerInptDiv">
                  <p>REGISTER<br/><br/></p>
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <p><br/></p>
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Password Confirm" />
                  <button onclick="location.href='https://www.youtube.com/shorts/g5T52sUPZP8'" type="button">Submit</button>
                  <br/><Link class="regToLogin" to="/login">Already have an account?</Link>

              </div>
          </div>
        </div>

    </>
  )
}