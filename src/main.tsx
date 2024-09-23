// import React from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/main.css"
import RouterConfig from './config/router.config.tsx'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

//component is always a funtion and its identifier must start with capital letter
  //  const Welcome = (): ReactElement => {
  //      return (
  //       <h1>hello ambika</h1>
  //      )
  //  }



const elem = ReactDOM.createRoot(document.getElementById("root")!)
elem.render(<React.StrictMode>
          <RouterConfig/>
        </React.StrictMode>)