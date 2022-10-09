import { differenceInSeconds } from 'date-fns'
import { useEffect } from 'react'
import { useCyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    minutes,
    seconds,
    setSecondsPassed,
    markCurrentCycleAsFinished
  } = useCyclesContext()

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )

        if (secondsDifference >= activeCycle.minutesAmount * 60) {
          markCurrentCycleAsFinished()

          clearInterval(interval)

          return
        }

        setSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [activeCycle, markCurrentCycleAsFinished, setSecondsPassed])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>

      <Separator>:</Separator>

      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
