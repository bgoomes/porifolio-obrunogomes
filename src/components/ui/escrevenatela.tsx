import Typewriter from 'typewriter-effect';

export function EscreveTexto(){
    return(
        <Typewriter
            options={{
                strings: ['Web Developer', 'Front-end'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

