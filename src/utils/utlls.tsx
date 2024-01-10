export const calculatePercent=({newData,prevData}:{newData:number,prevData:number})=>{
    if (prevData !== 0) {
        const percentageChange = ((newData - prevData) / prevData) * 100;
        return {percentageChange,status:newData>prevData?"up":"down"}
    }else{
        const percentageChange = newData === 0 ? 0 : 100; // Assume a 100% increase if both are 0
        return {percentageChange,status:"up"}
    }
    
}