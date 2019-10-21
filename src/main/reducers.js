import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        descripition: 'Ler Livro',
        list: [{
            _id: 1,
            descripition: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            descripition: 'Reunião com a equipe ás 10:00',
            done: false
        }, {
            _id: 3,
            descripition: 'Consulta médica na terça depois do almoço',
            done: true
        }]
    })
})

export default rootReducer