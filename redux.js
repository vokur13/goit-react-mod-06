// 1. Сделали action creator
const deposit = (amount) => {
    // возращаем action
    return {
        type: 'deposit',
        payload: {amount},
    }
}

// 2. сделали reducer, чтобы обрабатывать action
function fundReducer(state = 0, action) {
    switch (action.type) {
        case 'deposit':
            return state + action.payload.amount;
        
        default: return state;
    }

    
}

// 3. сделали store, чтобы все зарегистрировать и инициализировать
const store = createStore(fundReducer);

// 4. привязали к компоненту и отправляем action
<button onClick={REDUX.dispatch(deposit(100))}></button>