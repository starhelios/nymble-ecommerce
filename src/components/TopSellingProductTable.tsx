import { FC } from "react";
import { IProductTopSelling } from "../types/services";

export interface ITopSellintTableTableProps {
  products?: IProductTopSelling[]
}

const TopSellingProductTable: FC<ITopSellintTableTableProps> = ({ products }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left border-b border-[#eee]">
              <th className="w-[50px] text-left font-medium text-black">
                Image
              </th>
              <th className="pl-4 w-[300px] text-left font-medium text-black">
                Name
              </th>
              <th className="text-left font-medium text-black pl-4">
                Price
              </th>
              <th className="text-left font-medium text-black pl-4">
                Total Sell
              </th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((product, index) => (
                <tr key={product.id}>
                  <td className={`${index === products.length - 1 ? "" : "border-b border-[#eee] "} w-[50px]`}>
                      <img src={product.image} width={50} height={50} alt="img" />
                  </td>
                  <td className={`${index === products.length - 1 ? "" : "border-b border-[#eee] "} pl-4`}>
                    <h5 className="font-medium text-black">
                      {product.title}
                    </h5>
                  </td>
                  <td className={`${index === products.length - 1 ? "" : "border-b border-[#eee] "} py-5 pl-4`}>
                    <h5 className="font-medium text-black">
                      $ {product.price}
                    </h5>
                  </td>
                  <td className={`${index === products.length - 1 ? "" : "border-b border-[#eee] "} py-5 pl-4`}>
                    <h5 className="font-medium text-black">
                      $ {product.price * product.total_sold}
                    </h5>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProductTable;
