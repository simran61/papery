import React from 'react'
import './profile.css'

function Profile() {
    return (
        <div className='user_profile text_center'>
            <h1 className="cursive color_primary">hello, Simran</h1>
            <img className='profile_img' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />

            <div className="userInfo">
                <div className="user_inputs">
                    <label for="userName" className='bold'>Your name:</label>
                    <input type="text" for="userName" value="Simran Gangwani" />
                </div>

                <div className="user_inputs">
                    <label for="address" className='bold'>Your address:</label>
                    <input type="text" for="address" value="Street 12, Sector7, ABC Road, Banglore" />
                </div>
            </div>
            <button class="btn btn_primary btn_rounded btn_center"><a href="">Update</a></button>
        </div>
    )
}

export { Profile } 