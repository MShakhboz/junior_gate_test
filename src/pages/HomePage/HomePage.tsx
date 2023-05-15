import { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { Button } from 'components'

import building from 'assets/img/building.png'
import illusionOne from 'assets/img/illusion_one.png'
import illusionTwo from 'assets/img/illusion_two.png'
import illusionThree from 'assets/img/illusion_three.png'
import illusionBubble from 'assets/img/illustration_bubble.png'
import illusionBubbleTwo from 'assets/img/illustration_bubble_two.png'
import arrow from 'assets/img/arrow.png'

import s from './homePage.module.scss'

const h6 = 'Запутались в сложных терминах и документах?'
const buttonMore = 'Хочу знать больше'
const sellBuyApartment = 'Хочу безопасно и легко продать или купить квартиру'
const beginButton = 'Начать'
const titleNecDoc = 'После завершения опроса вы получите PDF файл с содержащий:'
const listOfDocs = [
  'Список документов, необходимых в вашем конкретном случае.',
  'Разъяснение сложных терминов «на пальцах».',
  'Оценку возможных рисков.',
]

export const HomePage: FC = () => {
  return (
    <div className={s.homePage}>
      <section className={s.main_section}>
        <div className='container height_100'>
          <div className={s.main_section_wrapper}>
            <div className={s.box_one}>
              <h6>{h6}</h6>
              <h1>
                Узнайте, какие <span>документы</span> подготовить и что учесть
                при  <span>продаже и покупке</span> квартиры
              </h1>
              <Button
                onClick={() => console.log('Хочу знать больше')}
                classNames={s.button_more}
              >
                {buttonMore}
              </Button>
            </div>
            <div className={s.box_second}>
              {/* <Image src={building} alt='building' className={s.building_img} /> */}
            </div>
          </div>
        </div>
      </section>
      <section className={s.illusion_container}>
        <div className={cn(s.illusion_wrapper, 'container')}>
          <div className={s.illusion}>
            <Image src={illusionOne} alt='advice one' />
            <div className={s.bubble_one}>
              <Image src={illusionBubble} alt='bubble' />
            </div>
          </div>
          <div className={s.illusion}>
            <Image src={illusionTwo} alt='advice two' />
            <div className={s.bubble_two}>
              <Image src={illusionBubbleTwo} alt='bubble' />
            </div>
          </div>
          <div className={s.illusion}>
            <Image src={illusionThree} alt='advice three' />
            <div className={s.bubble_one}>
              <Image src={illusionBubble} alt='bubble' />
            </div>
          </div>
        </div>
        <div className={cn('container')}>
          <div className={s.title_questions}>
            <h1>
              Пройдите небольшой опрос и узнайте, как
              <span>избежать рисков</span> при продаже или покупке квартиры
            </h1>
          </div>
          <div className={s.test_container}>
            <div className={s.test_box}>
              <div className={s.test_box_pic}></div>
              <div className={s.about_questions}>
                <h6>
                  Время прохождения опроса <span>3 минуты</span>
                </h6>
                <h1>{sellBuyApartment}</h1>
                <Button onClick={() => console.log(beginButton)}>
                  {beginButton}
                </Button>
                <h6>{titleNecDoc}</h6>
                <ol>
                  {listOfDocs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <div className={s.arrow_icon}>
                  <Image src={arrow} alt='Arrow' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
