import React from 'react'
import Header from '../components/Header'
import '../stylesheets/login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>


        <Header />

        <div class="loginBDiv">
          <div class="loginMDiv">
              <div class="loginSDiv1">
                  <img src="https://cdn.discordapp.com/attachments/682318783767248962/1103647943514390619/ulan.svg" height="35%" />
              </div>
              <div class="loginInptDiv">
                  <p>LOGIN<br/><br/><br/></p>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="***" />
                  <button onclick="location.href='https://www.youtube.com/shorts/g5T52sUPZP8'" type="button">GO</button>
                  <br/><Link class="loginToReg" to="/register">Don't have an Account?</Link>
              </div>
          </div>
        </div>

    </>
  )
}