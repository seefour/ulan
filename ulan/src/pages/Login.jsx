import React from 'react'
import Header from '../components/Header'
import '../stylesheets/login.css'

export default function Login() {
  return (
    <>


        <Header />

        <div class="loginBDiv">
          <div class="mdiv">
              <div class="sdiv1">
                  <img src="https://cdn.discordapp.com/attachments/682318783767248962/1103647943514390619/ulan.svg" height="50%" />
              </div>
              <div class="inptUsr">
                  <p>LOGIN</p>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="***" />
                  <button onclick="location.href='https://www.youtube.com/shorts/g5T52sUPZP8'" type="button">GO</button>

              </div>
          </div>
        </div>

    </>
  )
}