import { ReactElement, useEffect, useState } from "react"

// export const Heading1 = ({props}: {value: string}) => {return (<><h1>{props.value}</h1></>)}
// export const Heading1 = ({value}: {value: string}) => {return (<><h1>{props.value}</h1></>)}   
//children is a key of props object which holds the incoming data. here we are destructuring props object to get only children key value
export const Heading1 = ({children}: {children: ReactElement}) => {
    return (
        <>
        <h1 className="font-extrabold text-gray-900 hover:text-teal-950 hover:cursor-pointer text-[20px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[38px]">
            {children}
        </h1>
        </>
    )
}

export const Heading2 = (props: {value?: string}) => {
    //props are read only value we cannot change it we can only use it.
    return (
        <>
        <h2 className="font-extrabold text-gray-900 hover:text-teal-950 hover:cursor-pointer text-[16px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[34px]">
            {props.value}
        </h2>
        </>
    )
}

// export class Heading3 extends Component{
//     constructor(props: any) {
//        super(props)

//        this.state = {
//         value: props.value,
//         loading: true
//        }
//        console.log("I am from loaded")
//     }

//     componentDidMount(): void {
//         console.log("I am third call")
//         //state update
//         this.setState((prev) => {
//             return {
//                 ...prev,
//                 value: "Updated value",
//                 loading: false
//             }
//         })
//     }

//     componentDidUpdate(): void {
//         //after first render call
//         console.log("I am always called after every render call")
        
//     }

//     componentWillUnmount(): void {
//         //always last
//     }

//     render = () => {
//         console.log("I am second loaded")
//         return(<>
//            <h3>{
//               this.state.loading ? "Loading" : this.state.value            
//             }</h3>       
//         </>)
//     }
// }

export const Heading3 = ({children}: {children: ReactElement}) => {
      let [loading, setLoading] = useState(true)
      let [loading1, setLoading1] = useState(true)
    
      //setLoading(false) it wil create infinite loop

      useEffect(() => {
        //body
        console.log("I am always called on any state change")
      })

      useEffect(() => {
        //onlyonce
        console.log("I am only called when the component renders once")
        setTimeout(() => {
            setLoading1(false)
        }, 5000);
      }, [])

      useEffect(() => {
                console.log("I am only called when the loading stategets updated/created")
      }, [loading])
 

      return (<>
        <h3 className="font-extrabold text-gray-900 hover:text-teal-950 hover:cursor-pointer text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]">
            {children} 
        </h3>
      </>)
}