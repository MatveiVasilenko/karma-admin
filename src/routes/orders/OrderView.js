import React, {useState, useEffect,useMemo} from "react"
import GridComponent from "../../widgets/grid/GridComponent"
import { transformData, getGridHandlers, getData } from "../../common/utils"
import { NET } from "../../network"

const OrderView = () => {
    const [page, setPage] = useState(1)
 
    const [filter, setFilter] = useState({
        page: page
    })
    const [gridData, setGridData] = useState(null)
    const [settingsPage, setSettingsPage] = useState({
        maxPage: 1,
        count: ''
    })

    const [dataItem, setDataItem] = useState({
        id: '',
        type: '',
        status: '',
        money: '',
        user_name: '',
        user_phone: ''
      
    })
  
    const thead = [
        {
            title: 'ID',
            alias: 'id',
            width: 30
        },
       
        {
            title: 'статус',
            alias: 'status',
            width: 200
    
        },
        {
            title: 'тип',
            alias: 'type',
            width: 200,
        },
        {
            title: 'деньги',
            alias: 'money',
            width: 150
    
        },
        {
            title: 'имя',
            alias: 'user_name',
            width: 200
        },
        {
            title: 'телефон',
            alias: 'user_phone',
            width: 200
        },
        {
            title: 'Дії',
            alias: 'buttons',
            width: 80
        }
    ]
    const elems = [
        {
            name: 'id',
            type: 'text',
            value: 'value',
            width: 30 
        },
        
        {
            name: 'status',
            type: 'colorText',
            value: 'value',
            width: 200
        },
        {
            name: 'type',
            type: 'text',
            value: 'value',
            width: 200
        },
        {
            name: 'money',
            type: 'text',
            value: 'value',
            width: 150
        },
        {
            name: 'user_name',
            type: 'text',
            value: 'value',
            width: 200
        },
        {
            name: 'user_phone',
            type: 'text',
            value: 'value',
            width: 200
        },         
        {
            name: 'buttons',
            type: 'buttons',
            value: ['buttons'],
            width: 80
        }  
    ]
    useEffect(() => {
        let filterParams = ''
        Object.keys(filter).map((el, idx) => {
            if (idx === 0) {
                filterParams = `?${el}=${filter[el]}`
            } else {
                filterParams = `${filterParams}&${el}=${filter[el]}`
            }
        })
		const fetchData = async () => {
			try {		
				const url = `${NET.APP_URL}/orders${filterParams}`
            
				const response = await fetch(url, {
					method: 'GET',
					// cors: 'cors',
					headers: {
						'Content-Type': 'application/json'
				      // 'Content-Type': 'application/x-www-form-urlencoded',
				  },
				})
                if (response.status === 200) {
                    const result = await response.json()
                    
                    setGridData(transformData(thead, result.data.data))
                   
                    setSettingsPage({
                        ...settingsPage,
                        maxPage: result.last_page
                    })
                }
			} catch (e) {
				console.log(e)
			}	
		}
        
            fetchData()
        
            
        
	}, [setFilter, filter,  setPage, page])


    const updateHandler = async (id) => {
        const url = `${NET.APP_URL}/orders/${id}`
        const result = await getData(url, 'POST', {
            status: 'success'
        })
        setGridData(transformData(thead, result.data.data))
   }
 
   
   
   const deleteHandler =  async (id) => {
    const url = `${NET.APP_URL}/orders/${id}`
    const result = await getData(url, 'POST', {
        status: 'cancel'
    })
    setGridData(transformData(thead, result.data.data))
   }


    const gridHandlers = useMemo(() => getGridHandlers(
        updateHandler,
        deleteHandler,
        false,
        false
    ), [])
   
   
    return (
    <div>
        
        {gridData ? 
        <GridComponent 
            gridData={gridData}
            elems={elems}
            filter={filter}
            // filterOptions={filterOptions}
            setFilter={setFilter}
            settings={{
                //Включает порядковые номера у строк
                counter: true,
                net: NET,
                //Включает блок фильтров и поиска
                filter: false,
                routeFilter: 'orders'
            }}
            gridHandlers={gridHandlers}
            setGridData={setGridData}
            settingsPage={settingsPage}
            setSettingsPage={setSettingsPage} /> :
            <div style={{display:'flex', justifyContent: 'center'}}>Загрузка...</div>
        }
        
        </div>
    )
}
export default OrderView