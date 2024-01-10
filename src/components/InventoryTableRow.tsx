import React, { FC, useEffect } from 'react'
import { IGetInventories } from '../types/services'
import { useProductSales } from '../hooks/useProductSales'
import { calculatePercent } from '../utils/utlls'
import UpArrowIcon from '../assets/upArrow'
import DownArrowIcon from '../assets/downArrow'

export interface IInventoryTableProps {
    inventory:IGetInventories
    index:number
    inventories:IGetInventories[]
}
export const InventoryTableRow:FC<IInventoryTableProps>=({inventory,index,inventories})=>{
    const {productSales,setProductId} = useProductSales()
    useEffect(()=>{
        if(!inventory.product_id) return
        setProductId(inventory.product_id)
    },[inventory?.product_id])
    const current_month_sales=productSales?calculatePercent({newData:productSales.current_month_sales,prevData:productSales.previous_month_sales}):null
    return (
        <tr key={inventory.id}>
            <td className={`${index === inventories.length - 1 ? "" : "border-b border-[#eee] "} w-[50px] `}>
                <img alt='product image' src={inventory.product.image} width={50} height={50} />
            </td>
            <td className={`${index === inventories.length - 1 ? "" : "border-b border-[#eee] "} w-[100px] `}>
                <h5 className="font-medium text-black ">
                    {inventory.product.title}
                </h5>
            </td>
            <td className={`${index === inventories.length - 1 ? "" : "border-b border-[#eee] "} `}>
                <h5 className="font-medium text-black ">
                    {inventory.product.price}
                </h5>
            </td>
            <td className={`${index === inventories.length - 1 ? "" : "border-b border-[#eee] "} py-5 pl-4 w-[100px]`}>
                <h5 className={`font-medium w-20 text-center rounded-sm  p-2 text-black ${inventory.stock === 0 ? "bg-red-400  text-white" : inventory.stock > 5 ? "" : "bg-[#3F3F3F] text-white"}`}>
                    {inventory.stock}
                </h5>
            </td>
            <td className={`${index === inventories.length - 1 ? "" : "border-b border-[#eee] "} py-5 pl-4 w-[100px]`}>
                <div className='flex'>
                    <h5 className={`font-medium w-20 text-center rounded-sm  p-2 text-black`}>
                        {current_month_sales?current_month_sales.percentageChange+"%":"0%"}
                    </h5>
                    <div className='mt-3'>
                    {current_month_sales && current_month_sales.status=="up"?<UpArrowIcon />:<DownArrowIcon />}
                    </div>
                    
                </div>
            </td>
        </tr>
    )
}

export default InventoryTableRow