import { createMachine, assign } from 'xstate';
import { fetchCountries } from '../Utils/api';

const fillCountries = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({ countries: (context, event) => event.data })
        },
        onError: {
          target: 'failure',
          actions: assign({error: 'Fallo el request'})
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' }
      }
    }
  }
}

const bookingMachine = createMachine(
  {
    id: 'buy plane tickets',
    initial: 'initial',
    context: {
      spectators: [],
      selectedCountry: '',
      countries: [],
      error: ''
    },
    predictableActionArguments: true,
    states: {
      initial: {
        entry: 'cleanContext',
        on: {
          START: {
            target: 'search',
          }
        }
      },
      search: {
        on: {
          CONTINUE: {
            target: 'spectators',
            actions: assign({
              selectedCountry: (context, event) => event.selectedCountry
            })
          },
          BACK: 'initial',
          CANCEL: {
            target: 'initial'
          }
        },
        ...fillCountries,
      },
      spectators: {
        on: {
          CONTINUE: {
            target: 'tickets',
            cond: 'moreThanOneSpectator'
          },
          BACK: 'search',
          CANCEL: 'initial',
          ADD: {
            target: 'spectators',
            actions: assign({ spectators: (context, event) => [...context.spectators, event.newSpectator] })
          }
        },
      },
      tickets: {
        on: {
          FINISH: 'successful',
          BACK: 'search',
          CANCEL: {
            target: 'initial',
          }
        }
      },
      successful: {
        after: {
          5000: {
            target: 'initial'
          }
        },
        on: {
          RESTART: {
            target: 'initial',
          }
        }
      }
    }
  },
  {
    actions: {
      cleanContext: assign({
        selectedCountry: '',
        spectators: []
      })
    },
    guards: {
      moreThanOneSpectator: context => context.spectators.length > 0
    }
  }
);

export default bookingMachine