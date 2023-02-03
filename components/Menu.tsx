import React, {useState} from 'react';
import Link from "next/link";

const Menu = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-right">
    <button className=" inline md:hidden text-2xl" onClick={() => setShow(!show)}>+</button>
    <ul className={` ${show ? 'block' : 'hidden'} md:block`}>
      <li><Link href="/work"><a>work</a></Link></li>
      <li><Link href="/youtube"><a>youtube</a></Link></li>
      <li><Link href="/github"><a>github</a></Link></li>
      <li><Link href="/contact"><a>contact</a></Link></li>
      <li><a href="">cv</a></li>
    </ul>
    </div>
  );
};

export default Menu;
