'use client'

import { chakra, defineSlotRecipe, useSlotRecipe } from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export function Carousel(props: CarouselProps) {
  const recipe = useSlotRecipe({ recipe: recipeFactory })
  const styles = recipe()

  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', loop: true })
  const totalSize = React.Children.count(props.children)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <chakra.div css={styles.root}>
      {totalSize > 1 && (
        <chakra.button css={styles.prevButton} type="button" onClick={scrollPrev}>
          <LuChevronLeft size={40} />
        </chakra.button>
      )}

      <div ref={emblaRef}>
        <chakra.div css={styles.container}>
          {React.Children.map(props.children, (child) => (
            <chakra.div css={styles.item}>{child}</chakra.div>
          ))}
        </chakra.div>
      </div>

      {totalSize > 1 && (
        <chakra.button css={styles.nextButton} type="button" onClick={scrollNext}>
          <LuChevronRight size={40} />
        </chakra.button>
      )}
    </chakra.div>
  )
}
export interface CarouselProps {
  children: React.ReactNode
}

const recipeFactory = defineSlotRecipe({
  slots: ['root', 'container', 'item', 'prevButton', 'nextButton'],
  base: {
    root: {
      pos: 'relative',
      overflowX: 'hidden',
    },
    container: {
      display: 'flex',
    },
    item: {
      flex: '0 0 auto',
      minWidth: '0',
    },
    prevButton: {
      bottom: '0',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      textAlign: 'center',
      top: '0',
      left: '0',
      width: '4%',
      zIndex: '20',
      background: 'hsla(0,0%,8%,.2)',
      cursor: 'pointer',
      _hover: {
        background: 'hsla(0,0%,8%,.4)',
        '& > *': {
          transform: 'scale(1.25)',
        },
      },
      '& > *': {
        transition: 'transform .1s ease-out 0s',
      },
    },
    nextButton: {
      bottom: '0',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      textAlign: 'center',
      top: '0',
      width: '4%',
      zIndex: '20',
      background: 'hsla(0,0%,8%,.2)',
      cursor: 'pointer',
      right: '0',
      _hover: {
        background: 'hsla(0,0%,8%,.4)',
        '& > *': {
          transform: 'scale(1.25)',
        },
      },
      '& > *': {
        transition: 'transform .1s ease-out 0s',
      },
    },
  },
})
