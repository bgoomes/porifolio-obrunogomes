import { InstagramLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Redes(){
    return (
        <div>
            <div>
                <ul className='flex flex-row gap-3 py-5'>
                    <li><a href="https://www.instagram.com/obrunogomesreal/" target='_blank'><InstagramLogo  className='size-8 hover:text-indigo-600' /></a></li>
                    <li><a href="https://github.com/bgoomes" target='_blank'><GithubLogo className='size-8 hover:text-indigo-600' /></a></li>
                    <li><a href="https://www.linkedin.com/in/obrunogomesreal/" target='_blank'><LinkedinLogo className='size-8 hover:text-indigo-600' /></a></li>  
                </ul>
            </div>
        </div>
    )
}