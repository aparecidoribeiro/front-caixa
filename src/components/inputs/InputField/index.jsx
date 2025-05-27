import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';

const InputField = ({ label, type, placeholder, value, action, name }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="relative flex flex-col w-full">
            <label>{label}</label>
            <span className='flex items-center'>
                <input
                    className="w-full min-h-[38px] border-standard border-border-color rounded-[4px] px-[10px] py-1 bg-transparent 
                    outline-none placeholder-placerhold-color text-base "
                    type={type == "password" ? showPassword ? "text" : "password" : ''}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => action((prev) => ({ ...prev, [name]: e.target.value }))}
                />
                <button
                    className='absolute right-3'
                    onClick={() => setShowPassword(!showPassword)}
                    type='button'
                >
                    {type == "password" ? showPassword == true ? <Eye size={20} /> : <EyeClosed size={20} /> : ''}
                </button>
            </span>

        </div>
    )
}

export default InputField