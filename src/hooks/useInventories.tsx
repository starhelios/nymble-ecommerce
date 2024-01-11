import { useContext, useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from '../context/AuthContext';
import { IGetInventories } from '../types/services';
import getInventories from '../services/inventories';

const useInventoriesApi = () => {
  const [sortedInventory,setSortedInventory] = useState<IGetInventories[]>([])
  const { auth } = useContext(AuthContext);
  const { data, isPending } = useQuery({
    queryKey: ["inventories"],
    queryFn: () => getInventories(auth?.access_token as string),
    enabled: auth && auth.access_token ? true : false,
    refetchInterval: (process.env.REACT_APP_POOLING_INTERVAL as unknown as number || 3) * 1000
  })

  useEffect(() => {
    if(!data) return
    const sorted = data.sort((a, b) => a.stock - b.stock)
    const limited_inventroies:IGetInventories[] = []
    sorted.map(inv => {
      if(inv.stock === 0) {
        limited_inventroies.push(inv)
      } else if (limited_inventroies.length < 10){
        limited_inventroies.push(inv)
      }
      return inv
    })
    setSortedInventory(limited_inventroies)
  },[data])

  return { inventories: data, loading: isPending,sortedInventory }
}

export { useInventoriesApi }
