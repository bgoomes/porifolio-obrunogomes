import { InstagramLogo, GithubLogo, LinkedinLogo, YoutubeLogo  } from '@phosphor-icons/react'

export function Redes(){
    return (
        <div>
            <div>
                <ul className='flex flex-row gap-3 py-5'>
                    
                    <li><a href="https://www.instagram.com/obrunogomesreal/" target='_blank'><InstagramLogo  className='size-8 hover:scale-110 transition-all hover:text-green' /></a></li>
                    <li><a href="https://github.com/bgoomes" target='_blank'><GithubLogo className='size-8 hover:scale-110 transition-all hover:text-green' /></a></li>
                    <li><a href="https://www.linkedin.com/in/obrunogomesreal/" target='_blank'><LinkedinLogo className='size-8 hover:scale-110 transition-all hover:text-green' /></a></li>
                    <li><a href="https://youtube.com/@obrunogomesdev?si=5l4cpg6AeRJpmIaV" target='_blank'><YoutubeLogo  className='size-8 hover:scale-110 transition-all hover:text-green' /></a></li>
                </ul>
            </div>
        </div>
    )
}