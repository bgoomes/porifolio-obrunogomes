import Typewriter from 'typewriter-effect';

export function EscreveTexto(){
    return(
        <Typewriter
            options={{
                strings: ['Web Developer', 'FrontEnd'],
                autoStart: true,
                loop: true,
                
            }}
        />
    )
}

