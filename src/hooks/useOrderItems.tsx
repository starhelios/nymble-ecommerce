import { useContext, useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from '../context/AuthContext';
import getOrderItems from '../services/orderItems';

const useGetOrderItemsApi = () => {
  const [totalSales,setSales] = useState(0)
  const { auth } = useContext(AuthContext);
  const { data, isPending } = useQuery({
    queryKey: ["orderItems"],
    queryFn: () => getOrderItems(auth?.access_token as string),
    enabled: auth && auth.access_token ? true : false,
    refetchInterval: (process.env.REACT_APP_POOLING_INTERVAL as unknown as number || 3) * 1000
  })

  useEffect(() => {
    if(!data) return
    const total = data.reduce((a, c) => a + c.price * c.quantity, 0)
    setSales(total)
  },[data])

  return { orderItems: data, loading: isPending, totalSales }
}

export { useGetOrderItemsApi }
