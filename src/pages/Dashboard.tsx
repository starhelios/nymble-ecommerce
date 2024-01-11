import { useFeedbacksApi } from '../hooks/useFeedbacks';
import { useGetOrderItemsApi } from '../hooks/useOrderItems';
import { useGetOrdersApi } from '../hooks/useOrders';
import { useInventoriesApi } from '../hooks/useInventories';
import { useStatsApi } from '../hooks/useStats';
import { useTopSellingProductApi } from '../hooks/useTopSellingProduct';
import CardTwo from '../components/CardTwo';
import FeedbackTable from '../components/FeedbackTable';
import InventoryTable from '../components/InventoryTable';
import TopSellingProductTable from '../components/TopSellingProductTable';

const Dashboard = () => {
  const { stats, new_customers_percent } = useStatsApi()
  const { recentFeedbacks, feedbacks } = useFeedbacksApi()
  const { sortedInventory } = useInventoriesApi()
  const { topSellingProducts } = useTopSellingProductApi()
  const { orders } = useGetOrdersApi()
  const { totalSales } = useGetOrderItemsApi()

  return (
    <div className='h-[94vh] pb-10 overflow-auto'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-4">
        <CardTwo 
          priomaryText='Total Sales' 
          value={"$" + totalSales} 
        />
        <CardTwo 
          priomaryText='Customers' 
          value={stats?.new_customers_current_year.toString() || ""} 
          isIncrease={new_customers_percent.status === "up" ? true : false} 
          secondary_value={new_customers_percent.percentageChange.toString() + '%'} 
        />
        <CardTwo 
          priomaryText='Orders' 
          value={(orders?.length || 0) + "" || ""} 
        />
        <CardTwo 
          priomaryText="Customer Feedbacks"
          value={feedbacks?.length + ""} 
        />
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className="mt-8">
          <div className="bg-transparent pb-2 pl-1">
            <h1 className="text-3xl font-bold text-gray-800">Recent Feedbacks</h1>
            {/* Other dashboard content goes here */}
          </div>
          <FeedbackTable feedbacks={recentFeedbacks} />
        </div>
        <div className="mt-8">
          <div className="bg-transparent pb-2 pl-1">
            <h1 className="text-3xl font-bold text-gray-800">Top Selling</h1>
            {/* Other dashboard content goes here */}
          </div>
          <TopSellingProductTable products={topSellingProducts} />
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-transparent pb-2 pl-1">
          <h1 className="text-3xl font-bold text-gray-800">Inventories</h1>
          {/* Other dashboard content goes here */}
        </div>
        <InventoryTable inventories={sortedInventory} />
      </div>
    </div>
  );
};

export default Dashboard;
