import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';

const InputField = ({ label, type, placeholder, value, action }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="relative flex flex-col w-full max-w-[300px]">
            <label>{label}</label>
            <span className='flex items-center'>
                <input
                    className="w-full border-standard border-black-one rounded px-3 py-1 bg-transparent  focus:outline-none placeholder-black-one text-sm"
                    type={type == "password" ? showPassword ? "text" : "password" : ''}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => action(e.target.value)}
                />
                <button
                    className='absolute right-3'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {type == "password" ? showPassword == true ? <Eye size={20} /> : <EyeClosed size={20} /> : ''}
                </button>
            </span>

        </div>
    )
}

export default InputField