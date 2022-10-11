import { useFormContext } from 'react-hook-form'
import { useAppTheme } from '../../../../contexts/AppThemeContext'

import { useCyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { appTheme } = useAppTheme()
  const { activeCycle } = useCyclesContext()
  const { register } = useFormContext()

  return (
    <FormContainer appTheme={appTheme}>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        appTheme={appTheme}
        id="task"
        type="text"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task', { required: true })}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        appTheme={appTheme}
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          required: true,
          valueAsNumber: true
        })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
