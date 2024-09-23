import { useForm } from "react-hook-form"
import registrationImage from "../../../assets/images/registration form.png"
import { InputLabel, RoleSelectComponent, TextAreaInputComponent, TextInputComponent } from "../../../components/common/form/input.components"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import authSvc from "../auth.service"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import LoadingComponent from "../../../components/common/loading/loading.component"


const RegisterPage = () => {

    const registerDTO = Yup.object({
        name: Yup.string().min(2).max(50).required(),
        email: Yup.string().email().required(),
        phone: Yup.string().nullable(),
        address: Yup.string(),
        password: Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password and confirmPassword must match"),
        role: Yup.string().matches(/^(seller|customer)$/).default("customer"),
        image: Yup.mixed()

    })

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const { control, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(registerDTO)
    });

    const submitForm = async (data: any) => {
        //API Call
        try {
            setLoading(true);
            await authSvc.postRequest("/auth/register", data, {file: true})
            toast.success("your account has been created successfully. Please check your email for further processing.")
            navigate("/")

        } catch(exception: any){
            if(exception.status === 400){
                //set errors
                //Object.keys({email: "email should be unique"}).map((field)=> {})
                Object.keys(exception.data.result).map((field: any) => {
                    setError(field, {message: exception.data.result[field]})
                })
            }

            toast.error(exception.data.message)

        } finally {
            setLoading(false)
        }
    }

    return (<>

        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src={registrationImage}
                        className="absolute inset-0 h-full w-full object-fit"
                    />
                </aside>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">

                        <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-lg md:text-3xl">
                            Welcome to Khichadi Production
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Welcome to <strong className="font-bold text-cyan-700">Khichadi Production</strong>! We are absolutely delighted to have you join our community. By creating an account with us, you will unlock a world of exclusive benefits designed to enhance your shopping experience.
                        </p>

                        <form onSubmit={handleSubmit(submitForm)} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                            <InputLabel htmlFor="name">Full Name</InputLabel>
                                <TextInputComponent
                                    name="name"
                                    errMsg={errors?.name?.message as string}
                                    control={control}
                                />
                            </div>



                            <div className="col-span-6">
                                <InputLabel htmlFor="email">Email</InputLabel>

                                <TextInputComponent
                                    name="email"
                                    errMsg={errors?.email?.message as string}
                                    control={control}
                                />
                            </div>

                            <div className="col-span-6">
                            <InputLabel htmlFor="phone">Phone Number:</InputLabel>

                                <TextInputComponent
                                    name="phone"
                                    type="tel"
                                    errMsg={errors?.phone?.message as string}
                                    control={control}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <InputLabel htmlFor="password">Password</InputLabel>
                                <TextInputComponent
                                    name="password"
                                    type="password"
                                    errMsg={errors?.password?.message as string}
                                    control={control}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>

                                <TextInputComponent
                                    name="confirmPassword"
                                    type="password"
                                    errMsg={errors?.confirmPassword?.message as string}
                                    control={control}
                                />
                            </div>

                            <div className="col-span-6">
                            <InputLabel htmlFor="address">Address</InputLabel>
                                <TextAreaInputComponent
                                   name="address"
                                   errMsg={errors?.address?.message as string}
                                   control={control}
                                />

                            </div>

                            <div className="col-span-6">
                            <InputLabel htmlFor="role">Role</InputLabel>

                                <RoleSelectComponent
                                  name="role"
                                  errMsg={errors?.role?.message as string}
                                  required={true}
                                  control={control}
                                />
                            </div>

                            <div className="col-span-6">
                            <InputLabel htmlFor="image">Image</InputLabel>

                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                 type="file"
                                 onChange={(e: any) => {
                                     const image = e.target.files['0'];
                                     setValue('image', image)
                                 }}
                                 />

                            </div>



                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline mx-1">terms and conditions</a>
                                    and
                                    <a href="#" className="text-gray-700 underline mx-1">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    disabled={loading}
                                >
                                    {loading ? <LoadingComponent/> : 'Create an account'}
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <a href="#" className="text-gray-700 underline">Log in</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    </>)
}

export default RegisterPage;