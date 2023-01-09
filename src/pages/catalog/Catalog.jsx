import React from 'react'
import './Catalog.css'
import catalogTopImg from '../../assets/img/catalogTopTest.svg'
import mainCardImg from '../../assets/img/mainCardImg.svg'

function Catalog() {
  return (
    <div className='catalog'>
      <div className="container">

         <div className="catalog__top">
            <p>Главная / <span>Каталог</span></p>

            <h2>КАТАЛОГ</h2>

            <div className="catalog__top-cards">

                <div className="catalog__top-cards-item">
                  <img src={catalogTopImg} alt="" />
                  <p>Для эфирных масел</p>
                </div>

                <div className="catalog__top-cards-item">
                  <img src={catalogTopImg} alt="" />
                  <p>Для эфирных масел</p>
                </div>

                <div className="catalog__top-cards-item">
                  <img src={catalogTopImg} alt="" />
                  <p>Для эфирных масел</p>
                </div>

                <div className="catalog__top-cards-item">
                  <img src={catalogTopImg} alt="" />
                  <p>Для эфирных масел</p>
                </div>

            </div>
         </div>

         <div className="searchbar">

            <div className="searchbar__left">
              <div className="earchbar__left-wrap">
                  <input type="text" placeholder='Поиск'/>

                  <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>


            <div className="searchbar__right">
                <div className="searchbar__right-wrap">
                  <p>Сортировка:</p>

                  <select>
                    <option selected>По цене</option>
                    <option value="nothing">nothing</option>
                    <option value="nothing">nothing</option>
                  </select>
                </div>
            </div>

         </div>

         <div className="main__cards">

            <ul className="main__cards-ul">

              <li className='main__cards-items'>
                 <img src={mainCardImg} alt="" />
                 <button><ion-icon name="heart-outline"></ion-icon></button>

                 <b>SALE</b>

                 <span className='items__span'>
                    <p>Медный чайник с фарфоровой ручкой</p>

                    <h2>1 953 грн</h2>
                 </span>
              </li>

              <li className='main__cards-items'>
                 <img src={mainCardImg} alt="" />
                 <button><ion-icon name="heart-outline"></ion-icon></button>

                 <span className='items__span'>
                    <p>Медный чайник с фарфоровой ручкой</p>

                    <h2>1 953 грн</h2>
                 </span>
              </li>


              <li className='main__cards-items'>
                 <img src={mainCardImg} alt="" />
                 <button><ion-icon name="heart-outline"></ion-icon></button>



                 <span className='items__span'>
                    <p>Медный чайник с фарфоровой ручкой</p>

                    <h2>1 953 грн</h2>
                 </span>
              </li>


              <li className='main__cards-items'>
                 <img src={mainCardImg} alt="" />
                 <button><ion-icon name="heart-outline"></ion-icon></button>



                 <span className='items__span'>
                    <p>Медный чайник с фарфоровой ручкой</p>

                    <h2>1 953 грн</h2>
                 </span>
              </li>


              <li className='main__cards-items'>
                 <img src={mainCardImg} alt="" />
                 <button><ion-icon name="heart-outline"></ion-icon></button>


                 <span className='items__span'>
                    <p>Медный чайник с фарфоровой ручкой</p>

                    <h2>1 953 грн</h2>
                 </span>
              </li>


              <li className='main__cards-items'>
                 <img src={mainCardImg} alt="" />
                 <button><ion-icon name="heart-outline"></ion-icon></button>


                 <span className='items__span'>
                    <p>Медный чайник с фарфоровой ручкой</p>

                    <h2>1 953 грн</h2>
                 </span>
              </li>


            </ul>

         </div>
      </div>
    </div>
  )
}

export default Catalog;