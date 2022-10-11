import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useCyclesContext } from '../../contexts/CyclesContext'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod
    .string()
    .min(1, 'Informe a tarefa')
    .max(100, 'Tarefa deve ter no máximo 100 caracteres'),
  minutesAmount: zod
    .number()
    .min(5, 'O mínimo é 5 minutos')
    .max(60, 'O máximo é 60 minutos')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useCyclesContext()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitDisabled = !task || !task.trim() || !minutesAmount

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton
            type="button"
            onClick={interruptCurrentCycle}
            title="Interromper Timer."
          >
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            disabled={isSubmitDisabled}
            type="submit"
            title="Preencha o nome e a duração antes de começar."
          >
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
