import React from "react"
function Footer (){
    return(
        <footer className="bg-green-500 dark:bg-green-700 text-white transition-colors duration-300 text-center align-bottom">
            <p>&copy; All right reserved.</p>
            contact us: <a href ="mailto:eduedensahle@gmail.com">eduedensahle@gmail.com</a>
            <div>
                <a 
                href="https://t.me/@ed_en_123" 
                target="_blank">
                    <img className="inline-block w-5 h-5 m-2.5" 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
                    alt="Telegram" />
                </a>
                <a 
                    href="https://www.instagram.com/eden_sahlie" 
                    target="_blank">
                        <img className="inline-block w-5 h-5 m-2.5"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                        alt="Instagram"/>
                    </a>
                <a 
                    href="https://github.com/Eden1916" 
                    target="_blank">
                        <img className="inline-block w-5 h-5 m-2.5"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                        alt="GitHub" />
                </a>
            </div>
            </footer>
    )
}

export default Footer;