import { differenceInSeconds } from 'date-fns'
import { useEffect } from 'react'
import { useCyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    amountSecondsPassed,
    setSecondsPassed,
    markCurrentCycleAsFinished
  } = useCyclesContext()

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const currentMinutes = Math.floor(currentSeconds / 60)
  const currentSecondsLeft = currentSeconds % 60

  const minutes = String(currentMinutes).padStart(2, '0')
  const seconds = String(currentSecondsLeft).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }

    if (!activeCycle) {
      document.title = 'Ignite Timer'
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
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
