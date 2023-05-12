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

export const Header: FC<HeaderProps> = ({ classNames }) => {
  return (
    <div className={cn(s.header, classNames)}>
      <nav className='container'>
        <div className={s.logo}>
          <Image src={logo} alt='logo' />
        </div>
        <div className={s.menu}>
          <ul>
            <li>Как продать квартиру</li>
            <li>Истории клиентов</li>
            <li className={s.phone_numb}>
              <span className={s.phone_icon}>
                <Image src={phone} alt='phone' />
              </span>
              + 7 495 835 47 11
            </li>
            <li>
              <Button
                onClick={() => console.log('Перезвоните мне')}
                classNames={s.button_call}
              >
                Перезвоните мне
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
