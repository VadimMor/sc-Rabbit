import React from "react";
import classes from "./Header.module.css"

let Header = () => {
    return (
        // Контент верхнего колонтитула страницы
        <header className={classes.header}>
            {/* Кнопка пользователя с меню пользователя */}
            <button className="btnUser">
                {/* Небольшая информация пользователя */}
                <div className="btnUser__info">
                    <img src="#" alt="Фото" className="btnUser__image"/>
                    <div className="btnUser__shortInfo">
                        <div className="btnUser__names">
                            <div className="btnUser__firstname">First</div>
                            <div className="btnUser__lastname">Last</div>
                        </div>
                        <div className="btnUser__names">email@email.com</div>
                    </div>
                </div>

                {/* Меню пользователя */}
                <nav className="btnUser__menu">
                    <ul>
                        <li><a href="#">Мой профиль</a></li>
                        <li><a href="#">Портфолио</a></li>
                        <li><a href="#">Настройки</a></li>
                    </ul>
                </nav>
            </button>
        </header>
    )
}

export default Header;
