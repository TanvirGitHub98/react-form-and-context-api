// Form theke data paoar bhivinno technique
import { reactHooks } from 'eslint-plugin-react-hooks';

// 1. 
//     const formHandle=(e)=>{
//         e.preventDefault() 
//         const name=e.target.name.value
//         const email=e.target.email.value
//         console.log(name,email)
//     }
//     <form onSubmit={formHandle}>
//             <input type="text" name='name' placeholder='Enter your name' /> <br/>
//             <input type="email" name="email" id="" placeholder='Enter your email' /><br/>
//             <input type="submit" value="Submit" />
//      </form>
// ###########################################################################################
// 2.
//     const handleActionForm=(formData)=>{
//         console.log(formData.get('name'))
//         console.log(formData.get('email'))

//     }

//             <form action={handleActionForm}>
//                 <input type="text" name="name" id="" placeholder='Name' /><br/>
//                 <input type="email" name="email" id="" placeholder='Email' /><br/>
//                 <input type="submit" value="Submit" />
//             </form>
// ###########################################################################################
// 3.
//     const handleForm=(e)=>{
//         e.preventDefault()

//     }
//     const [password,setPassword]=useState('')
//     const handlePassword=(e)=>{
//         console.log(e.target.value)
//         setPassword(e.target.value)
//     }

//                 <form onSubmit={handleForm}>
//                 <input type="email" name="email" id="" placeholder='Email' required/><br/>
//                 <input onChange={handlePassword} type="password" name="password" id="" placeholder='Password' defaultValue={password} required/><br/>
//                 <input type="submit" value="Submit" />

//             </form>
// ###########################################################################################

// 4. Uncontrolled using useRef reactHooks

//     const email=useRef('')
//     const password=useRef('')
//     const handleUncontrolledForm=(e)=>{
//         e.preventDefault()
//         console.log(password.current.value)
//         console.log(email.current.value)

//     }
//             <form onSubmit={handleUncontrolledForm}>
//                 <input type="email" ref={email} /> <br/>
//                 <input type="password" ref={password}/> <br/>
//                 <input type="submit" value="Submit" />
               

//             </form>
// ###########################################################################################
