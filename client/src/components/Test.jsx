// import React, { Component } from 'react'
// import io from 'socket.io-client'
// import { FaTimes } from 'react-icons/fa'
// import { FaTwitter } from 'react-icons/fa6'
// const API_URL = 'http://localhost:3000'
// const socket = io(API_URL)

// export default class Test extends Component {

//   constructor() {
//     super()
//     this.state = {
//       user: {},
//       disabled: ''
//     }
//     this.popup = null  
//   }

//   componentDidMount() {
//     socket.on('user', user => {
//       this.popup.close()
//       this.setState({user})
//     })
//   }
  
//   // Custom methods and render to follow
//   // ....
//   // Routinely checks the popup to re-enable the login button 
//   // if the user closes the popup without authenticating.
//   checkPopup() {
//     const check = setInterval(() => {
//       const { popup } = this
//       if (!popup || popup.closed || popup.closed === undefined) {
//         clearInterval(check)
//         this.setState({ disabled: ''})
//       }
//     }, 1000)
//   }
  
//   // Launches the popup on the server and passes along the socket id so it 
//   // can be used to send back user data to the appropriate socket on 
//   // the connected client.
//   openPopup() {
//     const width = 600, height = 600
//     const left = (window.innerWidth / 2) - (width / 2)
//     const top = (window.innerHeight / 2) - (height / 2)
    
//     const url = `${API_URL}/auth/twitter?socketId=${socket.id}`;

//     return window.open(url, '',       
//       `toolbar=no, location=no, directories=no, status=no, menubar=no, 
//       scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
//       height=${height}, top=${top}, left=${left}`
//     )
//   }
  
//   // Kicks off the processes of opening the popup on the server and listening 
//   // to the popup. It also disables the login button so the user can not 
//   // attempt to login to the provider twice.
//   startAuth() {
//     if (!this.state.disabled) {  
//       this.popup = this.openPopup()  
//       this.checkPopup()
//       this.setState({disabled: 'disabled'})
//     }
//   }

//   closeCard() {
//     this.setState({user: {}})
//   }
  
//   // missing render method
//   // ... 
//   render() {
//     const { name, photo} = this.state.user
//     const { disabled } = this.state
  
//     return (
//       <div className={'container'}>
//         {/* Show the user if it exists. Otherwise show the login button */}
//         {name
//           ? <div className={'card'}>              
//               <img src={photo} alt={name} />
//               <FaTimes
//                 className={'close'}
//                 onClick={this.closeCard.bind(this)}
//               />
//               <h4>{`@${name}`}</h4>
//             </div>
//           : <div className={'button'}>
//               <button 
//                 onClick={this.startAuth.bind(this)} 
//                 className={`twitter ${disabled}`}
//               >
//                 <FaTwitter
//                 />
//               </button>
//             </div>
//         }
//       </div>
//     )
//   }
// }