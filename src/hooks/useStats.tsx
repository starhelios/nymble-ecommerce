import { useContext } from 'react'
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from '../context/AuthContext';
import { calculatePercent } from '../utils/utlls';
import getStats from '../services/stats'

const useStatsApi = () => {
  const { auth } = useContext(AuthContext);
  const { data, isPending } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStats(auth?.access_token as string),
    enabled: auth && auth.access_token ? true : false,
    refetchInterval: (process.env.REACT_APP_POOLING_INTERVAL as unknown as number || 3) * 1000
  })
  const new_customers_percent = data ? calculatePercent({
    newData: data?.new_customers_current_year,
    prevData: data?.new_customers_previous_year
  }) : { percentageChange: 0, status: "up" }
  const new_saless = data ? calculatePercent({
    newData: data?.total_sales_current_year,
    prevData: data?.total_sales_previous_year
  }) : { percentageChange: 0, status: "up" }

  return { stats: data, isSignupLoading: isPending, new_customers_percent, new_saless }
}

export { useStatsApi }
