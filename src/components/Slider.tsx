import { useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { QouteList } from '@/types/data';

type IProps = {
    quotesList: QouteList[]
}

export function Slider({ quotesList }: IProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        }
    )
    return (
        <div ref={sliderRef} className="keen-slider min-h-[284px] relative bg-greyLight -mt-8 z-0">
            {
                quotesList.map(m =>
                    <div key={m.no}>
                        <div className="keen-slider__slide number-slide1 py-[72px] px-4">
                            <div className="flex items-center gap-[10px]">
                                <div className="flex flex-col items-center text-center gap-[2px]">
                                    <div className="text-[18px] leading-none">{m.no}</div>
                                    <div className="undernumber w-[19px] h-[5px] rounded-lg"></div>
                                </div>
                                <h2 className="text-[36px] text-greyTitle">{m.title}</h2>
                            </div>
                            <div className="mt-[20px] max-w-[712px] text-[20px]">
                              {m.description}
                            </div>
                        </div>
                    </div>
                )
            }
            {loaded && instanceRef.current && (
                <div className="dots" style={{ marginTop: '-160px' }}>
                    {[0, 1, 2].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot bg-slate-300" + (currentSlide === idx ? " !bg-purpleLight" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </div>
    );
}