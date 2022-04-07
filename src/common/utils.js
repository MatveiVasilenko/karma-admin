export const getData = async(
    url,
    method,
    body = false
 ) => {
    const res = await fetch(url, {
        method: method || 'GET',
        headers: {
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json;charset=UTF-8'
        },
        ...(body ? {
            body: JSON.stringify(body)
        } : {})
    }).then((response) => {
        if (response.status === 200) {
           
        }
        return response
    })
    return await res.json()
 }


 export const transformData = (head, body) => {
    const header = head && head.map(el => el.alias)

    const boder = body.map((elem) => {
        let accum = {}
        header.map((headItem) => {
            Object.keys(elem).map((key) => {
           
                if (key === 'sports') {
                    let value = ''
                    if (elem[key] === 'true') {
                        value = 'Так'
                    } else if (elem[key] === 'false') {
                        value = 'Ні'
                    } 
                    return accum[key] = value
                }
                
               else if (headItem === key) {
                    accum[key] = elem[key]
                }
            })
        })
        return accum
    })
    return {
        header: head,
        boder
    }
}

export const getGridHandlers = (updateHandler, deleteHandler, ordersHandler,potokHandler) => {
    return {
        buttons: { 
            update: (id) => updateHandler(id),
            delete: (id) => deleteHandler(id),
            orders: (id) => ordersHandler(id),
            potok: (id) => potokHandler(id),
        }
    }
}

