import { EllipsisVertical } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '@utils/deleteProduct';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { Trash2, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = ({ id }) => {


    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const cart = useSelector(state => state.cart.data)

    const navigate = useNavigate()

    return (
        <div className='absolute top-0 right-0'>
            <Menu>
                <MenuButton className="outline-none">
                    < EllipsisVertical
                        color="#393A3E"
                        size={22}
                    />
                </MenuButton>
                <MenuItems
                    transition
                    anchor="bottom"
                    className="bg-black-one text-white rounded-md outline-none text-sm p-1"
                >
                    <MenuItem>
                        <button
                            className="flex gap-1 w-full items-center rounded-md px-2 py-1 hover:bg-black-opacity focus:bg-black-opacity"
                            onClick={() => navigate(`/produtos/${id}`) }>
                            <Pencil size={14} />
                            Editar
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => deleteProduct(user, id, dispatch, cart)}
                            className="flex gap-1 w-full items-center rounded-md px-2 py-1 hover:bg-black-opacity focus:bg-black-opacity"
                        >
                            <Trash2 size={14} />
                            Deletar
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}

export default DropdownMenu