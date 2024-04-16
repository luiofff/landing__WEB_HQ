
import React from "react";
import styles from "./FiveBlock.module.css"

const FiveBlock = () => {
    return (
        <>
            <div className={styles.line_block}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.line} viewBox="0 0 1362 37" fill="none">
                        <path d="M1 36L188 1H1151L1361 36" stroke="#8A2C30"/>
                </svg>
            </div>
            <div className={styles.main__block}>
                <div className={styles.title__block}>
                    <h1 className={styles.title}>ЕСТЬ ВОПРОСЫ?</h1>
                    <h1 className={styles.pretitle}>СВЯЖИТЕСЬ С НАМИ</h1>
                </div>
                <div className={styles.content__block_mobile}>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Имя</h1>
                            <input type="text"  className={styles.input} placeholder="Как к вам обращаться?"/>
                        </div>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Почта</h1>
                            <input type="text"  className={styles.input} placeholder="pochta@mail.com"/>
                        </div>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Кто вы?</h1>
                            <fieldset className={styles.checkbox}>
                            <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ОРГАНИЗАЦИЯ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ФИЗИЧЕСКОЕ ЛИЦО</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>СПОРТИВНОЕ ОБЪЕДИНЕНИЕ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ГОСУДАРСТВЕННАЯ СТРУКТУРА</span>
                                    </label>
                                
                                </div>
                            </fieldset>
                        </div>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Тема обращения</h1>
                            <fieldset className={styles.checkbox}>
       
                            <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>СОТРУДНИЧЕСТВО</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ПРОДУКЦИЯ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ПРЕДЛОЖЕНИЯ ПО ФУНКЦИОНАЛУ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ДРУГОЕ</span>
                                    </label>
                                
                                </div>
                                

                            </fieldset>

                            <div className={styles.input_component}>
                                <h1 className={styles.input_title}>Текст</h1>
                                <input type="text"  className={styles.input} placeholder="Дополнения"/>
                            </div>
                        </div>
                </div>
                <div className={styles.content__block}>
                    <div className={styles.content__block__Side}>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Имя</h1>
                            <input type="text"  className={styles.input} placeholder="Как к вам обращаться?"/>
                        </div>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Кто вы?</h1>
                            <fieldset className={styles.checkbox}>
                        
                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ОРГАНИЗАЦИЯ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ФИЗИЧЕСКОЕ ЛИЦО</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>СПОРТИВНОЕ ОБЪЕДИНЕНИЕ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ГОСУДАРСТВЕННАЯ СТРУКТУРА</span>
                                    </label>
                                
                                </div>
                            </fieldset>
                        </div>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Текст</h1>
                            <input type="text"  className={styles.input} placeholder="Дополнения"/>
                        </div>
                    </div>
                    <div className={styles.content__block__Side}>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Почта</h1>
                            <input type="text"  className={styles.input} placeholder="pochta@mail.com"/>
                        </div>
                        <div className={styles.input_component}>
                            <h1 className={styles.input_title}>Тема обращения</h1>
                            <fieldset className={styles.checkbox}>
       

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>СОТРУДНИЧЕСТВО</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ПРОДУКЦИЯ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ПРЕДЛОЖЕНИЯ ПО ФУНКЦИОНАЛУ</span>
                                    </label>
                                
                                </div>

                                <div>
                                    <label className={styles.container}>
                                        <input type="checkbox" className={styles.input_check}/>
                                        <span className={styles.check__text}>ДРУГОЕ</span>
                                    </label>
                                
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className={styles.button_block}>
                    <button className={styles.button}>
                        ОТПРАВИТЬ
                    </button>
                </div>
            </div>
            <div className={styles.line_block} style={{ marginBottom: "4rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.line_bottom} viewBox="0 0 1362 37" fill="none">
                        <path d="M1 36L188 1H1151L1361 36" stroke="#8A2C30"/>
                    </svg>
            </div>
        </>
    )
}

export default FiveBlock;