import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'

import s from './header.module.scss'

import logo from 'assets/img/logo.png'
import phone from 'assets/img/phone.png'
import { Button } from 'components'

export interface HeaderProps {
  classNames?: string
}

const menu = ['Как продать квартиру', 'Истории клиентов']
const phoneNumber = '+ 7 495 835 47 11'
const callButton = 'Перезвоните мне'

export const Header: FC<HeaderProps> = ({ classNames }) => {
  return (
    <div className={cn(s.header, classNames)}>
      <nav className='container'>
        <div className={s.logo}>
          <Image src={logo} alt='logo' />
        </div>
        <div className={s.menu}>
          <ul>
            {menu.map((item, index) => (
              <li key={index + 1}>{item}</li>
            ))}
            <li className={s.phone_numb}>
              <span className={s.phone_icon}>
                <Image src={phone} alt='phone' />
              </span>
              {phoneNumber}
            </li>
            <li>
              <Button
                onClick={() => console.log('Перезвоните мне')}
                classNames={s.button_call}
              >
                {callButton}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
