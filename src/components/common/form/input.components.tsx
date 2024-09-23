import { useController } from "react-hook-form"

export interface InputLabelProps {
    children: any,
     htmlFor: string
    }

export const InputLabel = ({children, htmlFor}: InputLabelProps) => {
    return(<>
     <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">{children}</label>
    </>)
}


export interface TextInputInterface {
    control: any,
    name: string,
    defaultValue?: string | undefined
    errMsg?: string | null,
    type?: string,
    row?: number
}

export const TextInputComponent = ({ type = "text", control, name, defaultValue, errMsg = null }: TextInputInterface) => {

    const { field } = useController({
        control: control,
        name: name,
        defaultValue: defaultValue,
        // rules: {
        //     required: required
        // }
    })

    return (<>
        <input
            type={type}
            {...field}
            className={`mt-1 w-full rounded-md ${errMsg ? 'border-red-500' : 'border-gray-200'}  bg-white text-sm text-gray-700 shadow-sm`}
        />
        <span className="text-sm italic text-red-800">
            {errMsg}
        </span>
    </>)
}


export const TextAreaInputComponent = ({ control, name, defaultValue, errMsg = null, row = 5 }: TextInputInterface) => {
    const { field } = useController({
        control: control,
        name: name,
        defaultValue: defaultValue,
        // rules: {
        //     required: required
        // }
    })

    return (<>
        <textarea
            style={{ resize: "none" }}
            rows={row}
            {...field}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">{defaultValue}</textarea>

        <span className="text-sm italic text-red-800">
            {errMsg}
        </span>
    </>)
}

export interface OptionType {
    label: string,
    value: string
}

export interface SelectOptionsProps {
    options?: Array<OptionType>
    control: any,
    name: string,
    required?: boolean,
    errMsg?: string,

}

export const SelectOptionComponent = ({options, name, errMsg="", control}: SelectOptionsProps ) => {
    const {field} = useController({
        name: name,
        control:control,
        // rules:{
        //     required:required
        // }
    })

    return (<>
        <select 
            {...field}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm  text-gray-700 shadow-sm"
        >
            {
                options && options.map((row: OptionType, i: number) => (
                    <option key={i} value={row.value}>{row.label}</option>
                ))
                    
            }
        </select>
        <span className="text-sm italic text-red-800">
            {errMsg}
        </span>
    </>)
}

export const RoleSelectComponent = ({name, errMsg="", control}: SelectOptionsProps) => {

    return (<>
        <SelectOptionComponent
          options={
              [{label: "Buyer", value: "customer"},{label: "seller", value: "seller"}]
        }
        control={control}
        name={name}
        errMsg={errMsg}
        />
           
    </>)
}