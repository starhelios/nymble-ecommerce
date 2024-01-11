import { useContext } from 'react'
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from '../context/AuthContext';
import { getTopSellingProduct } from '../services/products';

const useTopSellingProductApi = () => {
  const { auth } = useContext(AuthContext);
  const { data, isPending } = useQuery({
    queryKey: ["topSellingProducts"],
    queryFn: () => getTopSellingProduct(auth?.access_token as string),
    enabled: auth && auth.access_token?true:false,
    refetchInterval:(process.env.REACT_APP_POOLING_INTERVAL as unknown as number || 3) * 1000
  })

  return { topSellingProducts: data, loading: isPending }
}

export { useTopSellingProductApi }
