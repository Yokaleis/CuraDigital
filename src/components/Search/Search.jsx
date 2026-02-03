import React from 'react'
import { ButtonSecondary } from '../../pages/component/Buttons'

export function Search({ placeholder }) {
    return (
        <div className="flex gap-2">
            <input type="text" placeholder={placeholder} className="border-none rounded bg-gray-100" />
            <ButtonSecondary text="Buscar" />
        </div>
    )
}


