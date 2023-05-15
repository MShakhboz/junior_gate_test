import { FC } from 'react'
import cn from 'classnames'

import Image from 'next/image'

import logo from 'assets/img/footer_icon.png'
import phone from 'assets/img/phone.png'
import location from 'assets/img/location.png'
import timeIcon from 'assets/img/time.png'

import s from './footer.module.scss'

export interface FooterProps {
  classNames?: string
}

const phoneNumber = '+ 7 495 835 47 11'
const address = 'г. Москва, Красная площадь д.1'
const workSchedule = 'Режим работы'
const schedules = ['Пн. - Пт. - с 9:00 до 17:00', 'Сб. - Вс. - с 9:00 до 17:00']

export const Footer: FC<FooterProps> = ({ classNames }) => {
  return (
    <div className={cn(s.footer, classNames)}>
      <div className={cn(s.footer_wrapper, 'container')}>
        <div className={s.logo}>
          <Image src={logo} alt='logo' />
        </div>
        <div className={s.contacts}>
          <ul>
            <li className={cn(s.align_center, s.address_icon)}>
              <span className={s.icon}>
                <Image src={location} alt='address' />
              </span>
              {address}
            </li>
            <li className={s.align_center}>
              <span className={s.icon}>
                <Image src={phone} alt='phone' />
              </span>
              {phoneNumber}
            </li>
          </ul>
        </div>
        <div className={s.schedules}>
          <ul>
            <li>
              <span className={s.icon}>
                <Image src={timeIcon} alt='schedules' />
              </span>
              {workSchedule}
              <br />
              {schedules.map((item, index) => (
                <span className={s.schedules_list} key={index}>
                  {item}
                  <br />
                </span>
              ))}
            </li>
          </ul>
        </div>
        <div className={s.footer_address}>
          <ul>
            <li className={cn(s.align_center)}>
              <span className={s.icon}>
                <Image src={location} alt='address' />
              </span>
              {address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
