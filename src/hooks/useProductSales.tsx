import { useContext, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from '../context/AuthContext';
import getProductSales from '../services/sales';

const useProductSales = () => {
  const { auth } = useContext(AuthContext);
  const [productId,setProductId] = useState<string | null>(null)
  const { data, isPending } = useQuery({
    queryKey: ["productSales"],
    queryFn: () => getProductSales(auth?.access_token as string,productId as string),
    enabled: auth && auth.access_token && productId ? true : false,
    refetchInterval: (process.env.REACT_APP_POOLING_INTERVAL as unknown as number || 3) * 1000
  })

  return { productSales: data, loading: isPending,setProductId }
}

export { useProductSales }
