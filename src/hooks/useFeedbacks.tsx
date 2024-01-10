import { useContext, useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from '../context/AuthContext';
import getFeedback from '../services/feedback';
import { IFeedbacks } from '../types/services';

const useFeedbacksApi = () => {
  const { auth } = useContext(AuthContext);
  const [recentFeedbacks, setRecentFeedbacks] = useState<IFeedbacks[]>([])
  const { data, isPending } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => getFeedback(auth?.access_token as string),
    enabled: auth && auth.access_token ? true : false,
    refetchInterval: (process.env.REACT_APP_POOLING_INTERVAL as unknown as number || 3) * 1000
  })
  useEffect(() => {
    if (!data) return
    const sorted = data.sort((a, b) => {
      const b_date = new Date(b.updated_at)
      const a_date = new Date(a.updated_at)

      return b_date.getTime() - a_date.getTime()
    });
    const top5 = sorted.slice(0, 5);
    setRecentFeedbacks(top5)
  }, [data])
  return { feedbacks: data, isSignupLoading: isPending, recentFeedbacks }
}

export { useFeedbacksApi }