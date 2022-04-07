export function transformStreamGrid(head: any[], body: any[]){
    const header = head && head.map(el => el.alias)

    const boder = body.map((elem) => {
        let accum:any = {}
        header.map((headItem) => {
            Object.keys(elem).map((key) => {
                if (key === 'user') {
                    
                } else if (headItem === key) {
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