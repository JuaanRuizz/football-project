import React from 'react'

interface HeaderProps {
    name: string;
}

const Header = ({name}: HeaderProps) => {
    return (
    <div>
        {name}
    </div>
    )
}

export default Header
