import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../components/common/loading/loading.component";
import { toast } from "react-toastify";
import authSvc from "../auth.service";
import { MessageConstants } from "../../../config/constants";
import { Modal, Button } from "flowbite-react";

const UserActivation = () => {
    
    const params = useParams();
    const [loading, setLoading] = useState(true);
    let [openModal, setOpenModal] = useState(false);
    let [counter, setCounter] = useState(10)

    let [msg, setMsg] = useState("");
    let navigate = useNavigate();
    
    const activateUser =async () => {
        try {
            await authSvc.getRequest("/auth/activate/"+params.token);
            setMsg("Your account has been successfully activated, Please login to proceed further.")
           
           
        } catch(exception: any){
            console.log(exception)
            if(+exception.status === 422 && exception.data.message === MessageConstants.TOKEN_EXPIRED ){
                  setOpenModal(true)
            }
           toast.error(exception.data.message)
        //    navigate("/login")

        } finally {
            setLoading(false)
            setInterval(() => {
                setCounter(counter--)
                if(counter === 0){
                    navigate("/login")
                }
           }, 4000)
        }
    }

    const resendToken = async () => {
        try{
          await authSvc.getRequest("/auth/resend-activationtoken/"+params.token)
          setMsg("A new token has been forwarded in your email. Please check your email.")
          setOpenModal(false);

        } catch(exception){
                toast.error("Error sending reset Token.")
        } finally {
            setLoading(false)
            setInterval(() => {
                setCounter(counter--)
                if(counter === 0){
                    navigate("/login")
                }
           }, 3000)
        }
    }

    useEffect(() => {
        //api
        activateUser()
    }, [])

    
    return (<>
       <section className="bg-white">
            <div className="grid px-8 sm:px-12 lg:px-16 min-h-screen">
                {
                    loading ? <div className="flex items-center justify-center">
                        <LoadingComponent size="xl" />
                        </div> : <>
                        <div className="flex justify-center pt-10 mt-10 text-xl text-cyan-900">
                            {msg}
                            <p className="mt-5 text-xl font-bold">You will be redirected to home page after {counter} seconds</p>
                        </div>
                        </>
                }
            </div>
       </section>

       <Modal show={openModal} data-backdrop="static" data-keyboard="false">
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              It seems, the token has been expired. If you want to continue, click the resend below or cancel for new registration.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={resendToken}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}


export default UserActivation;