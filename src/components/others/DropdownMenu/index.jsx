import { EllipsisVertical } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '@utils/deleteProduct';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const DropdownMenu = ({ id }) => {


    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    return (
        <div className='absolute top-0 right-0'>
            <Menu>
                <MenuButton>
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
                        <button className="flex w-full items-center rounded-md px-3 py-1 hover:bg-black-opacity focus:bg-black-opacity">
                            Editar
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => deleteProduct(user, id, dispatch)}
                            className="flex w-full items-center rounded-md px-3 py-1 hover:bg-black-opacity focus:bg-black-opacity"
                        >
                            Deletar
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}

export default DropdownMenu