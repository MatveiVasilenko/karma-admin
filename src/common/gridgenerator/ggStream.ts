export const ggStream = () => ({
    thead: [
        {
            title: 'Название',
            alias: 'title',
            width: '35%'
        },
        {
            title: 'Старт',
            alias: 'start',
            width: '35%'
        },
        {
            title: "Партнеров",
            alias: 'user_streams_count',
            width: '20%'
        },
        {
            title: "Депозит",
            alias: 'user_streams_sum_money',
            width: '20%'
        },
    ],
    elems: [
        {
            name: 'title',
            type: 'text',
            value: 'value',
            width: '35%'
        },
        {
            name: 'start',
            type: 'text',
            value: 'value',
            width: '35%'
        },
        {
            name: 'user_streams_count',
            type: 'text',
            value: 'value',
            width: '20%'
        },
        {
            name: 'user_streams_sum_money',
            type: 'text',
            value: 'value',
            width: '20%'
        }
    ]
})