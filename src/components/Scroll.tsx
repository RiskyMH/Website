import { useEffect, useState } from "react";

export default function ScrollForProjects() {
    const [passedFIrstPage, setPassedFirstPage] = useState(false)
    const [bottomOfPage, setBottomOfPage] = useState(false)
    
    useEffect(() => {
        const element = document.getElementById('main') as HTMLDivElement | null
        if (!element) return

        function handleScroll() {
            if (!element) return

            const scrollPosition = element?.scrollTop;
            const scrollMax = element?.scrollHeight - element?.offsetHeight

            setPassedFirstPage(scrollPosition !== 0);
            setBottomOfPage(scrollPosition === scrollMax)

        }
        handleScroll()

        element?.addEventListener('scroll', handleScroll);

        return () => {
            element?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollDown(_element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        // scroll down one height (screen height)
        const mainElement = document.getElementById('main')

        mainElement?.scrollBy({ top: 1, behavior: 'smooth' })

    }

    return (
        <div id='scroll-for-projects' onClick={scrollDown} className={`hover:bg-[#2a2a2a] absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-75 p-2 pt-0 pb-0 mb-2 rounded-lg duration-200 transition-all ease-in-out cursor-pointer ${passedFIrstPage ? 'md:opacity-0' : 'md:opacity-100'} ${bottomOfPage ? 'opacity-0' : 'opacity-100'}`}>
            <p className='text-[#8f8f8f] mb-1'>Scroll to projects!</p>
            <div className='flex justify-center'>
                <svg className='w-4 h-4 text-[#8f8f8f] animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v10.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 15.586V4a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}