/* eslint-disable no-unused-vars */

import { Cycle } from './reducer'

export enum CyclesActionTypes {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  MARK_CYCLE_AS_FINISHED = 'MARK_CYCLE_AS_FINISHED',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE'
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: CyclesActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: CyclesActionTypes.INTERRUPT_CURRENT_CYCLE
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: CyclesActionTypes.MARK_CYCLE_AS_FINISHED
  }
}
