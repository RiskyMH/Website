import { useState, type ReactElement, useEffect } from 'react'
import Head from 'next/head'


export default function Home() {

    const [passedFIrstPage, setPassedFirstPage] = useState(false)
    const [bottomOfPage, setBottomOfPage] = useState(false)

    useEffect(() => {
        const element = document.getElementById('main') as HTMLDivElement | null
        if (!element) return
        
        function handleScroll() {
            if (!element) return

            const scrollPosition = element?.scrollTop;
            const scrollMax = element?.scrollHeight  - element?.offsetHeight

            setPassedFirstPage(scrollPosition !== 0);
            setBottomOfPage(scrollPosition === scrollMax)

        }
        handleScroll()

        element?.addEventListener('scroll', handleScroll);

        return () => {
            element ?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollDown(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        // scroll down one height (screen height)
        const mainElement = document.getElementById('main')

        mainElement?.scrollBy({top: 1, behavior: 'smooth'})

    }

    return (
        <>
            <Head>
                <title>RiskyMH</title>

                {/* seo */}
                <meta name="description" content="Just a random person on the internet" />
                <meta name="keywords" content="RiskyMH" />

                <meta property="og:title" content="RiskyMH" />
                <meta property="og:description" content="Just a random person on the internet" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://riskymh.dev/" />

            </Head>

            <div id='scroll-for-projects' onClick={scrollDown} className={`hover:bg-[#2a2a2a] absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-75 p-2 pt-0 pb-0 mb-2 rounded-lg duration-200 transition-all ease-in-out cursor-pointer ${passedFIrstPage ? 'md:opacity-0' : 'md:opacity-100'} ${bottomOfPage ? 'opacity-0': 'opacity-100'}`}>
                <p className='text-[#8f8f8f] mb-1'>Scroll to projects!</p>
                <div className='flex justify-center'>
                    <svg className='w-4 h-4 text-[#8f8f8f] animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v10.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 15.586V4a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <div id='main' className='bg-[#1a1a1a] snap-y snap-mandatory overflow-y-scroll h-screen w-screen border-solid border-gray-200 text-white box-border border-0 m-0 p-0'>
                <div className='snap-start flex h-screen items-center justify-center'>
                    <main className='rounded-md bg-[#2a2a2a] p-4 flex flex-col md:flex-row md:p-6 items-center shadow-md'>
                        <img className="rounded-lg w-32 h-32 bg-[#3a3a3a]" src="/fire_anim.png" alt="🔥 Avatar" title="A risky fire..." data-from='https://github.com/microsoft/fluentui-emoji/tree/main/assets/Fire' />

                        <div className='flex flex-col md:ml-5'>
                            <main className='mt-2 mb-2 md:mt-0 md:mb-0 text-center md:text-left'>
                                <h1 className='text-3xl leading-9 font-bold'>RiskyMH</h1>
                                <p className='text-[#8f8f8f]'>Just a random person on the internet</p>
                            </main>

                            <ul className='flex mt-0 md:mt-2 flex-col md:flex-row'>
                                <LinkButton url='https://github.com/RiskyMH' text='GitHub' icon={<GitHubIcon />} />
                                <LinkButton url='https://discord.gg/qK9pfnB3Yv' text='Discord Server' icon={<DiscordIcon />} />
                                <LinkButton url='mailto:michael@riskymh.dev' text='Email' icon={<MailIcon />} />
                                {/* Placeholder for when I actually have another thing */}
                                <LinkButton url='https://riskymh.dev' text='Website' icon={<ExternalIcon />} />
                            </ul>
                        </div>

                    </main>
                </div>
                <div id='projects' className='snap-start text-center h-screen md:h-auto flex justify-center items-center'>
                    <div>
                        <h1 className='text-3xl leading-9 font-bold pt-4'>Projects<span className='hidden md:inline'>:</span></h1>
                        <p className='text-[#8f8f8f]'>The things that I have worked on!</p>
                    </div>
                </div>

                <ProjectInfo
                    name='RiskyBOT'
                    icon='https://bot.riskymh.dev/robot.png'
                    iconCircle
                    links={[
                        { type: 'discord-bot-invite', url: 'https://discord.com/api/oauth2/authorize?client_id=780657028695326720&scope=applications.commands' },
                        { url: 'https://github.com/RiskyMH/RiskyBOT', type: 'github' },
                        { url: 'https://bot.riskymh.dev', type: 'website' },
                    ]}
                    description='A multipurpose Discord bot that can do random things...'
                />

                <ProjectInfo
                    name='Boppy McBop Face'
                    icon='/mcbop.svg'
                    iconCircle
                    links={[
                        { type: 'discord-bot-invite', url: 'https://discord.com/oauth2/authorize?client_id=890492527701024808&permissions=8&scope=bot%20applications.commands' },
                        { url: '', type: 'website', disabled: 'Currently doesn\'t have website' },
                    ]}
                    description='A Discord leveling bot with some other server features...'
                />

                <ProjectInfo
                    name='Tools'
                    icon='/tools.png'
                    links={[
                        { url: 'https://tools.riskymh.dev', type: 'website' },
                        { url: 'https://github.com/RiskyMH/Tools', type: 'github' },
                    ]}
                    description='A website with random tools (some are discord related) [NOTE: Not public yet]'
                />

            </div>
        </>
    )
}

function ProjectInfo({ name, icon, links, description, iconCircle }: { name: string, icon?: string, links: { url: string, type: 'website' | 'discord' | 'github' | 'discord-bot-invite', disabled?: string }[], description: string, iconCircle?: boolean }) {
    // close to the main info, there will be many cards that will be underneath eachother 
    return (
        <div className='snap-start flex h-screen w-screen md:h-auto md:w-auto items-center justify-center'>
            <main className='rounded-md bg-[#2a2a2a] p-4 m-8 flex flex-col md:flex-row md:p-6 items-center shadow-md'>
                <img loading='lazy' className={`${iconCircle ? 'rounded-full' : 'rounded-lg'} w-24 h-24 bg-[#3a3a3a]`} src={icon} alt="avatar" />

                <div className='flex flex-col md:ml-5'>
                    <main className='mt-2 mb-2 md:mt-0 md:mb-0 text-center md:text-left'>
                        <h1 className='text-2xl leading-9 font-bold'>{name}</h1>
                        <p className='text-[#8f8f8f] md:w-[26rem]' >{description}</p>
                    </main>

                    <ul className='flex mt-2 flex-row justify-center md:justify-normal'>
                        {links.map((link, index) => {
                            if (link.type === 'website') {
                                return <LinkButton key={link.type} url={link.url} disabled={link.disabled} text={link.disabled || 'Website'} icon={<ExternalIcon />} newTab={!link.disabled} noMobile />
                            } else if (link.type === 'discord') {
                                return <LinkButton key={link.type} url={link.url} disabled={link.disabled} text={link.disabled || 'Discord Server'} icon={<DiscordIcon />} newTab={!link.disabled} noMobile />
                            } else if (link.type === 'discord-bot-invite') {
                                return <LinkButton key={link.type} url={link.url} disabled={link.disabled} text={link.disabled || 'Invite Bot'} icon={<DiscordIcon />} newTab={!link.disabled} noMobile />
                            } else if (link.type === 'github') {
                                return <LinkButton key={link.type} url={link.url} disabled={link.disabled} text={link.disabled || 'GitHub'} icon={<GitHubIcon />} newTab={!link.disabled} noMobile />
                            }
                        })
                        }
                    </ul>
                </div>
            </main>
        </div>

    )
}

function LinkButton({ url, text, icon, newTab, noMobile, disabled }: { url: string, text: string, icon: ReactElement, newTab?: boolean, noMobile?: boolean, disabled?: string }) {
    return (
        <li className='w-auto inline-block mr-2' title={text}>
            <a href={url == '' ? '#' : url} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer" title={disabled || text} className={`block rounded-sm bg-[#4a4a4a] p-1.5 shadow-sm text-center ${noMobile ? 'w-20 mt-0' : 'mt-2 w-full md:w-20 md:mt-0'} ${disabled ? 'opacity-25 cursor-default' : 'hover:bg-white hover:text-[#1a1a1a]'}`}>
                {icon}
            </a>

        </li>
    )
}

function IconCircle() {
    return <svg className="svg-inline--fa fa-circle" aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z">
        </path>
    </svg>

}

function DiscordIcon() {
    return <svg className="svg-inline--fa fa-discord" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
        <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
        </path>
    </svg>
}

function GitHubIcon() {
    return <svg className="svg-inline--fa fa-github" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">
        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
        </path>
    </svg>
}

function MailIcon() {
    return <svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
        <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z">
        </path>
    </svg>
}

function ExternalIcon() {
    return <svg className="svg-inline--fa fa-up-right-from-square" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" >
        <path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z">
        </path>
    </svg>
}
