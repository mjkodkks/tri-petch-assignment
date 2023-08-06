"use client"
import { Slider } from "@/components/Slider"
import { PageInfomation } from "@/types/data"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  const football: PageInfomation = {
    title: 'ATHLETS',
    qouteList: [
      {
        no: '01',
        title: 'CONNECTION',
        description: `Connect with coaches directly, you can ping coaches to view profile.`
      },
      {
        no: '02',
        title: 'COLLABORATION',
        description: `Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.`
      },
      {
        no: '03',
        title: 'GROWTH',
        description: `Resources and tools for you to get better as a student Athelte. 
        Access to training classes, tutor sessions, etc `
      },
    ],
    imageUrl: {
      mobile: '/sports/footballer_mobile.png',
      tablet: '/sports/footballer_tablet.png',
      desktop: '/sports/footballer_desktop.png'
    }
  }
  const basketball: PageInfomation = {
    title: 'PLAYERS',
    qouteList: [
      {
        no: '01',
        title: 'CONNECTION',
        description: `Connect with talented athlete directly, you can watch their 
          skills through video showreels directly from Surface 1.`
      },
      {
        no: '02',
        title: 'COLLABORATION',
        description: `Work with recruiter to increase your chances of finding talented athlete.`
      },
      {
        no: '03',
        title: 'GROWTH',
        description: `Save your time, recruit proper athlets for your team.`
      },
    ],
    imageUrl: {
      mobile: '/sports/basketball_mobile.png',
      tablet: '/sports/basketball_tablet.png',
      desktop: '/sports/basketball_desktop.png'
    }
  }

  const bgClasses = (no: string, title: string): string => {
    const template = {
      '01': 'bg-white',
      '02': 'bg-greyLight',
      '03': title === 'PLAYERS' ? 'bg-purpleDark' : 'bg-purpleLight',
    } as { [x: string]: string }
    return template[no] || ''
  }

  return (
    <main className={roboto.className + ' main-wrapper overflow-hidden'}>
      <section className="section-wrapper-football relative w-full py-4 md:pt-[81px] lg:pt-0 pt-0">
        <div className="striped-wrapper grid lg:grid-cols-[1fr_1fr] md:grid-cols-[40%_60%] grid-cols-1">
          <div className="hidden md:block"></div>
          <h1 className="md:text-[90px] text-[50px] md:pl-0 pl-[18px] text-greyDark text-left grid">{football.title}</h1>
        </div>
        <div className="relative z-10 md:static">
          <picture className="block md:absolute top-8 lg:right-[60%] lgDesktop:right-[52%] 
          md:pt-[81px] lg:pt-0 pt-0 md:-ml-[20%] md:w-auto w-[219px] mx-auto transition-all duration-300">
            <source media="(max-width: 767px)"
              srcSet={football.imageUrl.mobile} />
            <source media="(max-width: 1100px)"
              srcSet={football.imageUrl.tablet} />
            <img
              src={football.imageUrl.desktop} className="" alt="footballer" />
          </picture>
        </div>
        {
          football.qouteList.map(m =>
            <div className={`striped-wrapper hidden md:block lg:py-[50px] md:py-[30px] py-4 lg:h-[256px] ${bgClasses(m.no, football.title)}`}
              key={m.no + 'football'}>
              <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-[40%_60%] grid-cols-1 px-4 max-w-screen-2xl mx-auto">
                <div className="hidden md:block"></div>
                <div>
                  <div className="flex items-center gap-[10px]">
                    <div className="flex flex-col items-center text-center gap-[2px]">
                      <div className={`text-[18px] leading-none ${m.no === '03' ? 'text-black':''}`}>{m.no}</div>
                      <div className={`undernumber w-[19px] h-[5px] rounded-lg ${m.no === '03' ? 'bg-white' : 'bg-purpleLight'}`}></div>
                    </div>
                    <h2 className="text-[36px] text-greyTitle">{m.title}</h2>
                  </div>
                  <div className={`mt-[20px] max-w-[712px] text-[20px] ${m.no === '03' ? 'text-white':''}`}>
                    {m.description}
                  </div>
                </div>
              </div>
            </div>
          )
        }
        <div className="block md:hidden">
          <Slider quotesList={football.qouteList}></Slider>
        </div>
      </section>
      <section className="section-wrapper-basketball relative w-full md:pt-[52px] pt-0">
        <div className="striped-wrapper max-w-screen-2xl mx-auto px-4 grid lg:grid-cols-[1fr_1fr] md:grid-cols-[40%_60%] grid-cols-1">
          <h1 className="md:text-[90px] text-[50px] md:pl-0 pl-[18px] text-greyDark text-left grid">{basketball.title}</h1>
          <div className="hidden md:block"></div>
        </div>
        <div className="relative z-10 md:static">
          <picture className="block md:absolute -top-4 lg:left-[40%] lgDesktop:left-[52%] 
          md:pt-[81px] md:right-0 lg:pt-0 pt-0 md:-mr-[32%] md:w-auto w-[302px] mx-auto transition-all duration-300">
            <source media="(max-width: 767px)"
              srcSet={basketball.imageUrl.mobile} />
            <source media="(max-width: 1100px)"
              srcSet={basketball.imageUrl.tablet} />
            <img
              src={basketball.imageUrl.desktop} className="" alt="footballer" />
          </picture>
        </div>
        {
          basketball.qouteList.map(m =>
            <div className={`striped-wrapper hidden md:block lg:py-[50px] md:py-[30px] py-4 px-4 lg:h-[256px] ${bgClasses(m.no, basketball.title)}`}
              key={m.no + 'basketball'}>
              <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-[60%_40%] grid-cols-1 px-4 max-w-screen-2xl mx-auto">
                <div>
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center flex-col text-center gap-[2px]">
                      <div className={`text-[18px] leading-none ${m.no === '03' ? 'text-purpleLight':''}`}>{m.no}</div>
                      <div className={`undernumber w-[19px] h-[5px] rounded-lg ${m.no === '03' ? 'bg-white' : 'bg-purpleLight'}`}></div>
                    </div>
                    <h2 className="text-[36px] text-greyTitle">{m.title}</h2>
                  </div>
                  <div className={`mt-[20px] max-w-[712px] text-[20px] ${m.no === '03' ? 'text-white':''}`}>
                    {m.description}
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </div>
            </div>
          )
        }
        <div className="block md:hidden">
          <Slider quotesList={basketball.qouteList}></Slider>
        </div>
      </section>
    </main>
  )
}
