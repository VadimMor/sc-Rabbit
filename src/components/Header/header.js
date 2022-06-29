import React from "react";
import classes from "./Header.module.css"
import peaple from "./depositphotos_32817757-stock-photo-smiling-man.jpg"

let Header = () => {
    return (
        // Контент верхнего колонтитула страницы
        <header className={classes.header}>
            <div className="container">
                <div className={classes.inner__header}>
                    {/* Кнопка пользователя пользователя */}
                    <button className={classes.btnUser}>
                        {/* Небольшая информация пользователя */}
                        <div className={classes.btnUser__shortInfo}>
                            <div className={classes.btnUser__names}>
                                <span>First</span>
                                <span>Last</span>
                            </div>
                            <span className={classes.btnUser__email}>email@email.com</span>
                        </div>
                        <img src={peaple} alt="Фото" className={classes.btnUser__image}/>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
