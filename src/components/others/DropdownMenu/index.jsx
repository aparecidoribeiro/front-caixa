import { EllipsisVertical } from 'lucide-react';

const DropdownMenu = () => {
    return (
        <div className='absolute top-0 right-0'>
            < details className="dropdown" >
                <summary className="btn p-0 h-auto border-none shadow-none bg-transparent ">
                    <EllipsisVertical
                        color="#393A3E"
                        size={22}
                    />
                </summary>
                <ul className="menu dropdown-content rounded-box z-1 w-auto p-2 shadow-sm text-white bg-black-one">
                    <li><a>Editar</a></li>
                    <li><a>Deletar</a></li>
                </ul>
            </details >
        </div>
    )
}

export default DropdownMenu