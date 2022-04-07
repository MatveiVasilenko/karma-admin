import React, {useState, useEffect,useMemo} from "react"
import GridComponent from "../../widgets/grid/GridComponent"
import { transformData, getGridHandlers, getData } from "../../common/utils"
import { NET } from "../../network"
import PartnerModal from "./components/PartnerModal"

const PartnersView = () => {
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
            title: 'Имя',
            alias: 'name',
            width: 120
        },
        {
            title: 'Фамилия',
            alias: 'surname',
            width: 120,
        },
        {
            title: '?',
            alias: 'wallet',
            width: 70
    
        },
        {
            title: 'Деньги',
            alias: 'money',
            width: 100
        },
        {
            title: 'Деньги в работе',
            alias: 'money_work',
            width: 100
        },
        {
            title: 'Почта',
            alias: 'email',
            width: 200
        },
        {
            title: 'Телефон',
            alias: 'phone',
            width: 200
        },
        {
            title: 'Стрим',
            alias: 'stream_title',
            width: 100
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
            name: 'name',
            type: 'text',
            value: 'value',
            width: 120
        },
        {
            name: 'surname',
            type: 'text',
            value: 'value',
            width: 120
        },
        {
            name: 'wallet',
            type: 'text',
            value: 'value',
            width: 70
        },
        {
            name: 'money',
            type: 'text',
            value: 'value',
            width: 100
        },
        {
            name: 'money_work',
            type: 'text',
            value: 'value',
            width: 100
        },  
        {
            name: 'email',
            type: 'text',
            value: 'value',
            width: 200
        },
        {
            name: 'phone',
            type: 'text',
            value: 'value',
            width: 200
        },
        {
            name: 'stream_title',
            type: 'text',
            value: 'value',
            width: 100
        },
        {
            name: 'buttons',
            type: 'buttons_order',
            value: ['buttons'],
            width: 80
        }          
    ]


    const thead1 = [
        {
            title: 'ID',
            alias: 'id',
            width: 30
        },
        {
            title: 'Статус',
            alias: 'status',
            width: 120
        },
        {
            title: 'Деньги',
            alias: 'money',
            width: 120
        },
        {
            title: 'Тип ордера',
            alias: 'type',
            width: 150
        },
       
        {
            title: 'Принят',
            alias: 'created_at',
            width: 200
        },
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
				const url = `${NET.APP_URL}/users${filterParams}`
            
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
                    
                    setGridData(transformData(thead, result.data))
                    console.log(result)
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



    const [UserId, setUserId] = useState()
    const [userModal, setUserModal] = useState(false)

    const ordersHandler = async (idUser) => {
        const url = `${NET.APP_URL}/users-order/${idUser}`
        const result = await getData(url, 'GET')
        setUserId(transformData(thead1, result.data.data))
        setUserModal(true)
   }

 
  
   
   const potokHandler =  async (id) => {
    const url = `${NET.APP_URL}/orders/${id}`
    const result = await getData(url, 'POST', {
        status: 'cancel'
    })
    setGridData(transformData(thead, result.data.data))
   }


    const gridHandlers = useMemo(() => getGridHandlers(
        false,
        false,
        ordersHandler,
        potokHandler
    ), [])
   
   
    return (
    <div>{ gridData ? 
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
        <PartnerModal 
           gridData={UserId}
           userModal={userModal}
           setUserModal={setUserModal}
           filter={filter}
            // filterOptions={filterOptions}
            setFilter={setFilter}
            gridHandlers={gridHandlers}
        />
        </div>
    )
}
export default PartnersView