import { FC } from "react";
import { IFeedbacks } from "../types/services";

export interface IFeedbackTableProps {
  feedbacks?: IFeedbacks[]
}

const FeedbackTable: FC<IFeedbackTableProps> = ({ feedbacks }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left border-b border-[#eee]">
              <th className="w-[200px] text-left font-medium text-black">
                Customer Email
              </th>
              <th className="w-[100px] text-left font-medium text-black">
                Rating
              </th>
              <th className="min-w-[150px] py-4 font-medium text-black">
                Comment
              </th>
            </tr>
          </thead>
          <tbody>
            {
              feedbacks?.map((feedback, index) => (
                <tr key={feedback.id}>
                  <td className={`${index === feedbacks.length - 1 ? "" : "border-b border-[#eee] "} w-[200px]`}>
                    <h5 className="font-medium text-black">
                      {feedback.customer.email}
                    </h5>
                  </td>
                  <td className={`${index === feedbacks.length - 1 ? "" : "border-b border-[#eee] "} w-[100px] pl-5`}>
                    <h5 className="font-medium text-black">
                      {feedback.rating}
                    </h5>
                  </td>
                  <td className={`${index === feedbacks.length - 1 ? "" : "border-b border-[#eee] "} py-5`}>
                    <h5 className="font-medium text-black">
                      {feedback.comment}
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

export default FeedbackTable;
