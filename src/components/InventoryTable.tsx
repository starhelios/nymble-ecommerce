import { FC } from "react";
import { IGetInventories } from "../types/services";
import InventoryTableRow from "./InventoryTableRow";

export interface IInventoryTable {
  inventories?: IGetInventories[]
}

const InvetoryTable: FC<IInventoryTable> = ({ inventories }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left border-b border-[#eee]">
              <th className="w-[50px] text-left font-medium text-black">
                Photo
              </th>
              <th className="w-[100px] text-left font-medium text-black">
                Product
              </th>
              <th className="w-[300px] text-left font-medium text-black">
                Price
              </th>
              <th className="w-[100px] pl-4 py-4 font-medium text-black">
                Quantity
              </th>
              <th className="w-[100px] pl-4 py-4 font-medium text-black ml-4">
                Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {
              inventories?.map((inventory, index) => (
                <InventoryTableRow key={inventory.id} index={index} inventories={inventories} inventory={inventory} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvetoryTable;
