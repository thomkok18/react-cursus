import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link href={'/'} className={'item'} children={'Home'} />
            <Link href={'/accordion'} className={'item'} children={'Accordion'} />
            <Link href={'/list'} className={'item'} children={'Search'} />
            <Link href={'/dropdown'} className={'item'} children={'Dropdown'} />
            <Link href={'/translate'} className={'item'} children={'Translate'} />
        </div>
    );
};

export default Header;