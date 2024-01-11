import { useContext } from 'react'
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from '../context/AuthContext';
import getOrders from '../services/orders';

const useGetOrdersApi = () => {
  const { auth } = useContext(AuthContext);
  const { data, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(auth?.access_token as string),
    enabled: auth && auth.access_token ? true : false,
    refetchInterval: (process.env.REACT_APP_POOLING_INTERVAL as unknown as number || 3) * 1000
  })

  return { orders: data, loading: isPending }
}

export { useGetOrdersApi }
