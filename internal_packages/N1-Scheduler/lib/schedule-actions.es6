import {Reflux} from 'nylas-exports'

const ScheduleActions = Reflux.createActions([
  'confirmChoices',
  'changeDuration',
  'removeProposedTime',
  'addProposedTime',
])

for (const key in ScheduleActions) {
  if ({}.hasOwnProperty.call(ScheduleActions, key)) {
    ScheduleActions[key].sync = true
  }
}

export default ScheduleActions
