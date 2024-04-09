import React from "react";
import styles from "./StartBlock.module.css"

const StartBlock = () => {
    return (
        <>
            <div className={styles.line_block}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.line} viewBox="0 0 1362 37" fill="none">
                        <path d="M1 36L188 1H1151L1361 36" stroke="#8A2C30"/>
                    </svg>
            </div>
            <div className={styles.main__block}>
                <div className={styles.main__block___leftSide}>
                    <div className={styles.text__block}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.title} width="623" height="134" viewBox="0 0 623 134" fill="none">
                            <path d="M2.88 57V13.69H18.374C29.659 13.69 35.271 17.533 35.271 25.707C35.271 30.77 32.099 34.064 26.609 34.613C33.319 35.162 37.101 38.822 37.101 44.739C37.101 52.73 31.428 57 20.814 57H2.88ZM10.81 50.29H20.936C25.877 50.29 28.988 48.216 28.988 44.19C28.988 40.225 25.938 38.09 20.936 38.09H10.81V50.29ZM10.81 31.868H18.862C24.047 31.868 27.158 29.916 27.158 26.195C27.158 22.291 24.23 20.4 18.862 20.4H10.81V31.868ZM60.2391 57H43.4641V13.69H51.3941V29.306H60.2391C70.3651 29.306 76.4041 34.552 76.4041 43.214C76.4041 51.815 70.3651 57 60.2391 57ZM51.3941 50.107H59.8731C65.3021 50.107 68.2301 47.728 68.2301 43.214C68.2301 38.578 65.2411 36.199 59.8731 36.199H51.3941V50.107ZM80.8571 57V13.69H88.7871V57H80.8571ZM131.647 13.69V57H123.717V25.707L105.539 57H95.9622V13.69H103.953V45.837L122.375 13.69H131.647ZM104.441 0.818996H109.565C109.565 3.015 111.334 4.601 113.774 4.601C116.153 4.601 117.983 3.015 117.983 0.818996H123.046C123.046 5.394 118.959 8.993 113.774 8.993C108.528 8.993 104.441 5.394 104.441 0.818996ZM177.048 13.69V50.107H182.416V66.15H174.425V57H145.267V66.15H137.337V50.107H139.411C142.583 50.107 144.413 47.423 145.023 42.055L148.195 13.69H177.048ZM150.574 50.107H169.057V20.583H155.454L153.014 42.665C152.648 45.898 151.855 48.338 150.574 50.107ZM223.181 13.69V57H215.251V25.707L197.073 57H187.496V13.69H195.487V45.837L213.909 13.69H223.181ZM260.174 31.075C263.712 31.136 267.555 29.428 267.555 24.853C267.555 21.62 264.383 19.607 259.32 19.607C254.562 19.607 251.39 21.498 250.963 24.487L242.911 23.999C243.704 17.289 250.353 12.714 259.442 12.714C269.202 12.714 275.729 17.228 275.729 23.999C275.729 28.879 272.74 32.173 267.067 33.576C273.594 35.162 277.193 39.31 277.193 45.105C277.193 52.791 270.056 57.976 259.442 57.976C249.255 57.976 242.118 52.669 241.691 44.8L249.804 44.434C250.17 48.521 253.952 51.083 259.503 51.083C265.359 51.083 269.019 48.277 269.019 44.007C269.019 39.127 264.627 36.931 260.174 36.992L255.721 37.053V31.014L260.174 31.075ZM278.13 57L293.746 13.69H303.445L319.061 57H310.765L307.166 46.752H290.025L286.426 57H278.13ZM292.343 39.981H304.848L298.626 21.681L292.343 39.981ZM336.147 13.69H367.074V20.583H344.077V57H336.147V13.69ZM388.502 13.69C398.628 13.69 404.667 18.875 404.667 27.476C404.667 36.138 398.628 41.384 388.502 41.384H379.657V57H371.727V13.69H388.502ZM379.657 34.491H388.136C393.504 34.491 396.493 32.112 396.493 27.476C396.493 22.962 393.565 20.583 388.136 20.583H379.657V34.491ZM402.103 57L417.719 13.69H427.418L443.034 57H434.738L431.139 46.752H413.998L410.399 57H402.103ZM416.316 39.981H428.821L422.599 21.681L416.316 39.981ZM446.522 57V13.69H454.452V31.746H472.325V13.69H480.255V57H472.325V38.639H454.452V57H446.522ZM523.088 13.69V57H515.158V25.707L496.98 57H487.403V13.69H495.394V45.837L513.816 13.69H523.088ZM555.993 50.107V13.69H563.984V50.107H570.328V66.15H562.337V57H530.251V13.69H538.181V50.107H555.993ZM593.806 57H577.031V13.69H584.961V29.306H593.806C603.932 29.306 609.971 34.552 609.971 43.214C609.971 51.815 603.932 57 593.806 57ZM584.961 50.107H593.44C598.869 50.107 601.797 47.728 601.797 43.214C601.797 38.578 598.808 36.199 593.44 36.199H584.961V50.107ZM614.424 57V13.69H622.354V57H614.424ZM21.302 133.976C8.431 133.976 0.623 125.375 0.623 111.406C0.623 97.315 8.431 88.714 21.302 88.714C34.234 88.714 41.92 97.315 41.92 111.406C41.92 125.375 34.234 133.976 21.302 133.976ZM8.919 111.406C8.919 121.166 13.494 127.083 21.302 127.083C29.11 127.083 33.746 121.166 33.746 111.406C33.746 101.524 29.11 95.607 21.302 95.607C13.494 95.607 8.919 101.524 8.919 111.406ZM46.8596 133V89.69H77.8476V96.583H54.7896V105.794H63.6346C73.7606 105.794 79.7996 110.979 79.7996 119.458C79.7996 127.876 73.7606 133 63.6346 133H46.8596ZM54.7896 126.107H63.2686C68.7586 126.107 71.6256 123.85 71.6256 119.458C71.6256 115.066 68.7586 112.748 63.2686 112.748H54.7896V126.107ZM102.908 133H86.1331V89.69H94.0631V105.306H102.908C113.034 105.306 119.073 110.552 119.073 119.214C119.073 127.815 113.034 133 102.908 133ZM94.0631 126.107H102.542C107.971 126.107 110.899 123.728 110.899 119.214C110.899 114.578 107.91 112.199 102.542 112.199H94.0631V126.107ZM123.526 133V89.69H131.456V133H123.526ZM170.211 133H162.281V112.931C160.207 116.286 155.937 118.482 150.874 118.482C141.907 118.482 136.783 113.236 136.783 104.94V89.69H144.713V103.476C144.713 108.661 147.336 111.711 152.46 111.711C158.377 111.711 162.281 108.417 162.281 103.415V89.69H170.211V133ZM177.369 133V89.69H185.299V107.746H203.172V89.69H211.102V133H203.172V114.639H185.299V133H177.369ZM237.447 133.976C224.576 133.976 216.768 125.375 216.768 111.406C216.768 97.315 224.576 88.714 237.447 88.714C250.379 88.714 258.065 97.315 258.065 111.406C258.065 125.375 250.379 133.976 237.447 133.976ZM225.064 111.406C225.064 121.166 229.639 127.083 237.447 127.083C245.255 127.083 249.891 121.166 249.891 111.406C249.891 101.524 245.255 95.607 237.447 95.607C229.639 95.607 225.064 101.524 225.064 111.406ZM298.689 89.69V133H290.759V101.707L272.581 133H263.004V89.69H270.995V121.837L289.417 89.69H298.689ZM271.483 76.819H276.607C276.607 79.015 278.376 80.601 280.816 80.601C283.195 80.601 285.025 79.015 285.025 76.819H290.088C290.088 81.394 286.001 84.993 280.816 84.993C275.57 84.993 271.483 81.394 271.483 76.819ZM354.898 89.69V133H346.968V101.707L328.79 133H319.213V89.69H327.204V121.837L345.626 89.69H354.898ZM362.06 89.69H392.987V96.583H369.99V133H362.06V89.69ZM414.416 89.69C424.542 89.69 430.581 94.875 430.581 103.476C430.581 112.138 424.542 117.384 414.416 117.384H405.571V133H397.641V89.69H414.416ZM405.571 110.491H414.05C419.418 110.491 422.407 108.112 422.407 103.476C422.407 98.962 419.479 96.583 414.05 96.583H405.571V110.491ZM453.093 133H436.318V89.69H444.248V105.306H453.093C463.219 105.306 469.258 110.552 469.258 119.214C469.258 127.815 463.219 133 453.093 133ZM444.248 126.107H452.727C458.156 126.107 461.084 123.728 461.084 119.214C461.084 114.578 458.095 112.199 452.727 112.199H444.248V126.107ZM473.711 133V89.69H481.641V133H473.711Z" fill="#FF504E"/>
                        </svg>
                        
                        
                        <span className={styles.preTitle}>(Бесконтактная карта бойца)</span>
                    </div>
                </div>
                <div className={styles.main__block___rigthSide}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.card}  viewBox="0 0 322 206" fill="none">
                        <path d="M0 4.99999C0 2.23857 2.23858 0 5 0H316.017C318.778 0 321.017 2.23858 321.017 5V200.24C321.017 203.002 318.778 205.24 316.017 205.24H5.00001C2.23858 205.24 0 203.002 0 200.24V4.99999Z" fill="#FF504E"/>
                        <path d="M244.402 52.4912C217.546 52.4912 194.777 77.9836 201.642 102.997C203.312 109.09 205.073 114.682 207.122 119.684C203.879 123.156 205.28 129.86 208.365 133.096C210.257 135.079 214.484 138.49 218.031 139.878C220.899 139.473 229.292 139.017 228.772 147.573C229.745 147.954 230.764 148.285 231.814 148.584V145.201H233.079V148.917C234.779 149.334 236.557 149.658 238.411 149.874V145.201H239.672V149.993C241.389 150.149 243.15 150.234 244.959 150.234C244.974 150.234 244.99 150.234 245.005 150.234V145.199H246.268V150.211C248.068 150.174 249.833 150.068 251.531 149.87V145.199H252.797V149.695C254.561 149.444 256.255 149.101 257.868 148.657V145.201H259.131V148.281C259.857 148.05 260.563 147.807 261.247 147.533C259.836 136.842 271.049 138.632 272.641 138.938C276.309 137.753 280.96 134.02 282.971 131.913C286.18 128.552 287.582 121.425 283.818 118.095C283.692 117.982 283.545 117.904 283.412 117.794C284.81 113.875 286.044 109.582 287.191 104.906C293.358 79.7244 271.257 52.4912 244.402 52.4912ZM234.106 116.619C229.492 119.84 224.478 126.048 218.326 122.446C212.171 118.844 212.029 105.624 215.641 100.379C218.742 95.8697 236.52 96.9605 238.809 100.744C241.1 104.527 238.72 113.397 234.106 116.619ZM250.512 132.502C249.946 134.143 246.426 131.984 244.849 130.917C243.275 131.984 239.753 134.144 239.186 132.502C238.451 130.376 243.042 117.123 243.595 116.053C243.76 115.734 244.006 115.461 244.269 115.263C244.401 115.054 244.589 114.971 244.809 114.991C244.824 114.988 244.835 114.993 244.85 114.991C244.864 114.993 244.877 114.988 244.892 114.991C245.111 114.971 245.3 115.055 245.432 115.264C245.696 115.46 245.942 115.733 246.103 116.053C246.653 117.122 251.247 130.377 250.512 132.502ZM272.404 121.391C266.512 125.378 261.081 119.504 256.255 116.589C251.427 113.675 248.442 104.973 250.469 101.05C252.492 97.1296 270.156 94.9001 273.562 99.1978C277.523 104.202 278.292 117.401 272.404 121.391Z" fill="#150712"/>
                    </svg>
                </div>
            </div>
            <div className={styles.main__block__mobile}>
                    <h1 className={styles.title_text}>ВЫЙДИ ЗА ГРАНИЦЫ <br />ОБЫЧНОЙ ИГРЫ</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.card}  viewBox="0 0 322 206" fill="none">
                        <path d="M0 4.99999C0 2.23857 2.23858 0 5 0H316.017C318.778 0 321.017 2.23858 321.017 5V200.24C321.017 203.002 318.778 205.24 316.017 205.24H5.00001C2.23858 205.24 0 203.002 0 200.24V4.99999Z" fill="#FF504E"/>
                        <path d="M244.402 52.4912C217.546 52.4912 194.777 77.9836 201.642 102.997C203.312 109.09 205.073 114.682 207.122 119.684C203.879 123.156 205.28 129.86 208.365 133.096C210.257 135.079 214.484 138.49 218.031 139.878C220.899 139.473 229.292 139.017 228.772 147.573C229.745 147.954 230.764 148.285 231.814 148.584V145.201H233.079V148.917C234.779 149.334 236.557 149.658 238.411 149.874V145.201H239.672V149.993C241.389 150.149 243.15 150.234 244.959 150.234C244.974 150.234 244.99 150.234 245.005 150.234V145.199H246.268V150.211C248.068 150.174 249.833 150.068 251.531 149.87V145.199H252.797V149.695C254.561 149.444 256.255 149.101 257.868 148.657V145.201H259.131V148.281C259.857 148.05 260.563 147.807 261.247 147.533C259.836 136.842 271.049 138.632 272.641 138.938C276.309 137.753 280.96 134.02 282.971 131.913C286.18 128.552 287.582 121.425 283.818 118.095C283.692 117.982 283.545 117.904 283.412 117.794C284.81 113.875 286.044 109.582 287.191 104.906C293.358 79.7244 271.257 52.4912 244.402 52.4912ZM234.106 116.619C229.492 119.84 224.478 126.048 218.326 122.446C212.171 118.844 212.029 105.624 215.641 100.379C218.742 95.8697 236.52 96.9605 238.809 100.744C241.1 104.527 238.72 113.397 234.106 116.619ZM250.512 132.502C249.946 134.143 246.426 131.984 244.849 130.917C243.275 131.984 239.753 134.144 239.186 132.502C238.451 130.376 243.042 117.123 243.595 116.053C243.76 115.734 244.006 115.461 244.269 115.263C244.401 115.054 244.589 114.971 244.809 114.991C244.824 114.988 244.835 114.993 244.85 114.991C244.864 114.993 244.877 114.988 244.892 114.991C245.111 114.971 245.3 115.055 245.432 115.264C245.696 115.46 245.942 115.733 246.103 116.053C246.653 117.122 251.247 130.377 250.512 132.502ZM272.404 121.391C266.512 125.378 261.081 119.504 256.255 116.589C251.427 113.675 248.442 104.973 250.469 101.05C252.492 97.1296 270.156 94.9001 273.562 99.1978C277.523 104.202 278.292 117.401 272.404 121.391Z" fill="#150712"/>
                    </svg>
                    <span className={styles.preTitle}>(Бесконтактная карта бойца)</span>
            </div>
            <div className={styles.line_block} style={{ marginBottom: "4rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.line_bottom} viewBox="0 0 1362 37" fill="none">
                        <path d="M1 36L188 1H1151L1361 36" stroke="#8A2C30"/>
                    </svg>
            </div>
        </>
    )
}

export default StartBlock;