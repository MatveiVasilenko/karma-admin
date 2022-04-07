export const getGridHandlersInner = ( 
    watchHandler?: (id: number, course_id: number) => any, 
    updateHandler?: (id: number) => any, 
    homeHandler?: (id: number, idSub: number, elem: object) => any,
    deleteHandler?: (id: number) => any
    ) => {
    
    return {
       buttons: { 
          ...(watchHandler ? {watch: (id: number, course_id: number) => watchHandler(id, course_id)} : {}),
          ...(updateHandler ? {update: (id: number) => updateHandler(id)} : {}),
          ...(homeHandler ? {home: (id: number, idSub: number, elem: object) => homeHandler(id, idSub, elem)} : {}),
          ...(deleteHandler ? {delete: (id: number) => deleteHandler(id)} : {}),
       }
    }
 }