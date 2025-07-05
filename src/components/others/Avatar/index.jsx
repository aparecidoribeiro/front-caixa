import { useDispatch } from "react-redux"
import { logout } from "@features/auth"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LogOut, KeyRound } from 'lucide-react';
const Avatar = () => {

    const dispatch = useDispatch()

    return (
        <>
            <Menu>
                <MenuButton className="outline-none">
                    <img
                        className="w-9 h-9 rounded-[50%] object-cover cursor-pointer"
                        src={"./public/avatar.png"}
                        alt="Foto de perfil"
                    />
                </MenuButton>
                <MenuItems
                    transition
                    anchor="bottom start"
                    className="bg-black-one text-white rounded-md outline-none text-sm p-1"
                >
                    <MenuItem>
                        <button className="flex gap-1 w-full items-center rounded-md px-2 py-1 hover:bg-black-opacity focus:bg-black-opacity">
                            <KeyRound size={14} />
                            Alterar senha
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => {
                                dispatch(logout())
                            }}
                            className="flex gap-1 w-full items-center rounded-md px-2 py-1 hover:bg-black-opacity focus:bg-black-opacity"
                        >
                            <LogOut size={14} />
                            Sair
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </>

    )
}

export default Avatar