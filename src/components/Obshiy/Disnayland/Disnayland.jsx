import React from 'react';
import './disnayland.css'
import rasm1 from '../../images/disneyg1.png'
import rasm2 from '../../images/disneyc2.png'
import rasm3 from '../../images/disneyc3.png'
import rasm4 from '../../images/disneyg4.png'
import rasm5 from '../../images/disneyc5.png'
import rasm6 from '../../images/disneycard.png'
import rasm7 from '../../images/disneyc1.png'
import rasm8 from '../../images/disneyc2.png'
import rasm9 from '../../images/disneyc3.png'
import rasm10 from '../../images/disneyc4.png'
import rasm11 from '../../images/disneyc5.png'
import rasm12 from '../../images/disneyc6.png'


export default function Disnayland() {
  return (
    <div>
          <div class="main" id="home">
        <p>Disneyland is a fabulous journey into the world of magic!</p>

        <div class="gallery">
            <img src={rasm1} alt=""/>
            <img src={rasm2} alt=""/>
            <img src={rasm3} alt=""/>
            <img src={rasm4} alt=""/>
            <img src={rasm5} alt=""/>
        </div>
    </div>

    <div class="main-content">
        <h1>Disneyland + Paris <br/> Duration: 4 days + 4 days</h1>
        <div class="box-container">
            <div class="box">
                <img src={rasm6}/>
                <div class="content">
                    <h3> <i class="fas fa-map-marker-alt"></i> Disneyland </h3> <br/>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="price"> 2.500.000 sum</div>

                    <p>Слова “Мы едем в Диснейленд” приводят в восторг не только детей, но и взрослых! Это легендарное
                        место, где у всех есть возможность вернуться в детство и встретиться с героями
                        любимыхмультфильмов. <br/><br/>

                        Уже более четверти века в 32 км к востоку от Парижа работает «филиал» американского
                        развлекательного комплекса имени Уолта Диснея. Заняв всю площадь идеально ровного кольца с
                        3километровым диаметром, описанного бульварами Гран-Фосе и Д'Юроп, он состоит из двух парков —
                        Disneyland Park и Walt Disney Studios Park (по 4 тематические зоны в каждом), 7 отелей прямо на
                        территории, 8 в предместьях, а также мини-городка Disney Village с ресторанами, кафе и
                        магазинами. В самом центре кольца — собственная ж/д станция, электрички до которой из центра
                        Парижа идут примерно 40 минут. <br/><br/>

                        Будем рады организовать вам незабываемое путешествие в мир детства, за подробностями обращайтесь
                        в наш офис.</p>

                    <p class="text" style="display:flex;">
                        <b class="text-left" style="flex:1;">В стоимость включено:</b>
                        <span style="flex:1;">
                            <label>&#10022;</label> 4 дня в самом романтичном городе Европы Париже (4* гостиница,
                            завтрак включен). <br/>
                            <label>&#10022;</label> 4 дня в Диснейленде <br/>
                            <label>&#10022;</label> Входные билеты в Диснейленд
                        </span>
                    </p>

                    <p style="display: flex;">
                        <b style="flex:1;">
                            При бронировании <br/>
                            тура обязательно <br/>
                            доплачивается:
                        </b>
                        <span style="flex:1;">
                            <label>&#10022;</label> Страховой полис <br/>
                            <label>&#10022;</label> Услуга фирмы <br/>
                            <label>&#10022;</label> Авиаперелет (Ташкент–Париж-Ташкент) от 5 300 000 UZS<br/>
                            <label>&#10022;</label> Визовый сбор<br/>
                            <label>&#10022;</label> Трансфер
                        </span>
                    </p><br/>
                    <p>
                        <label>!</label> Стоимость на человека при двухместном размещении <br/>
                        <label>!</label> Оплата производится в национальной валюте по курсу,<br/>
                        установленному ЦБ Республики Узбекистан на день<br/>
                        оплаты<br/>
                        <label>!</label> Возможно изменение цен, в зависимости от плотности сезона. За подробной
                        информацией обращайтесь по телефонам
                    </p>

                    <span class="btn login-btn">Book now </span>
                </div>
            </div>
        </div>
    </div>

    <div class="definition">
        <p>
            Disneyland — мир детства, позитива и неудержимой радости! Это множество аттракционов и развлечений на
            огромнейшей территории. Первый парк развлечений был открыт в Америке, а позже — в Европе. Парижский
            Disneyland — единственный самый масштабный европейский игровой парк, который раскинулся на 1943 гектарах.
            <br/><br/>
            <b>Disneyland Park состоит из 5 зон:</b><br/>
            <b>"Main street U.S.A"</b> порадует 5 аттракционами. У входа в Disneyland берет начало главная улица,
            которая напоминает Америку времен 19-20 веков. Здесь находится станция Main street железной дороги, откуда
            стартует поезд по всему парку, прогуливаются мультяшные герои Уолта Диснея и проходят красивые парады.<br/>
            <b>"Frontierland"</b> — это с десяток аттракционов. Именно здесь можно окунуться в мир американского Дикого
            Запада, присоединитесь к ковбоям, индейцам и жителям города конца XIX века.<br/>
            <b>"Adventureland"</b> насчитывает 6 аттракционов. В этом парке можно получить порцию адреналина на 360
            градусных американских горках и проникнуться жизнью Индианы Джонса: прыгать по мостам, проходить сквозь
            водопады, противостоять атакам пиратов и многое другое.<br/>
            Самое большое количество аттракционов в <b>"Fantasyland"</b>. В основном этот парк рассчитан на самых
            маленьких посетителей, но конечно же что-то интересное найдется и для взрослых. Можно на летающем корабле
            Питера Пэна вылететь из окна и пронестись над Лондоном. <br/>
            В <b>"Discoveryland"</b>, состоящим из 9 аттракционов, нужно приготовиться к скоростному, мистическому,
            межгалактическому приключению. Стоит взять на заметку, что на аттракционе "Космическая гора" стоят скрытые
            фотокамеры.
        </p>
    </div>

    <div class="entartaiment">
        <div class="line"></div>
        <div class="div">
            <h1>Disneyland's most memorable rides</h1>
        </div>
        <div class="line"></div>
    </div>
    <section class="carousel">
        <div class="box-container">
            <div class="box">
                <h2 class="card-title">Indiana Jones and the Perilous Castle</h2>
                <img src={rasm7} alt=""/>
                <div class="content">
                    <p> «Мертвые петли», опасные виражи, трясущаяся вагонетка (ощущение, что она вот-вот сорвется!),
                        яркие, впечатляющие декорации – гремучая смесь, которая реально вызывает дикий страх.</p>
                </div>
            </div>
            <div class="box">
                <h2 class="card-title">Space mountain</h2>
                <img src={rasm8} alt=""/>
                <div class="content">
                    <p>В данном случае создается иллюзия полета в космос на огромной скорости. Квинтэссенция страха,
                        восторга и фантастического драйва заставляет посещать его снова и снова!</p>
                </div>
            </div>
            <div class="box">
                <h2 class="card-title">Peter Pen</h2>
                <img src={rasm9} alt=""/>
                <div class="content">
                    <p>Все как во сне! Вылетев из окна спальни героя, летающий корабль кружит своих пассажиров над ночным Лондоном, завершая полет незабываемым виражом по направлению к яркой звезде.</p>
                </div>
            </div>
            <div class="box">
                <h2 class="card-title">House with the ghosts</h2>
                <img src={rasm10} alt=""/>
                <div class="content">
                    <p>Сюда можно смело отправляться всей семьей. Если во время шоу и возникает чувство страха, то совсем ненадолго. Зато увлекательный поиск пропавшего жениха в компании с брошенной невестой и забавными привидениями оставит после себя яркие и позитивные воспоминания.</p>
                </div>
            </div>
            <div class="box">
                <h2 class="card-title">Alice's maze</h2>
                <img src={rasm11} alt=""/>
                <div class="content">
                    <p>«Лабиринт Алисы» – веселый, динамичный и полный приятных неожиданностей аттракцион. Крошечные незаметные двери в сплошной живой изгороди, ложные повороты, тупики… Придется проявить находчивость и смекалку, чтобы выбраться из сказочного лабиринта!</p>
                </div>
            </div>
            <div class="box">
                <h2 class="card-title">Buzz Lightyear Laser Blast</h2>
                <img src={rasm12} alt=""/>
                <div class="content">
                    <p>С помощью спецэффектов и бластеров участники игры спасают Вселенную от злого волшебника. Аттракцион придется по душе энергичным детям и их родителям с хорошо развитым воображением и массой нерастраченной энергии.</p>
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}
