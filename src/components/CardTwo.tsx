import React, { FC } from 'react'
import DownArrowIcon from "../assets/downArrow";
import UpArrowIcon from "../assets/upArrow";

export interface ICardTwoProps {
	priomaryText: string
	value: string
	secondary_value?: string
	isIncrease?: boolean
}

const CardTwo: FC<ICardTwoProps> = ({ priomaryText, value, secondary_value, isIncrease }) => {
	return (
		<div className="bg-white p-6 rounded-sm border border-stroke shadow-default">
			<h2 className="text-2xl font-semibold mb-4">{priomaryText}</h2>
			<div className='flex justify-between items-center'>
				<div className="text-4xl font-bold">
					{value}
				</div>

				{secondary_value &&
					<span className={`flex items-center gap-1 text-sm font-medium text-meta-3 ${isIncrease ? "text-green-400" : "text-red-400"} mt-auto`}>
						{secondary_value}
						{isIncrease === true ? <UpArrowIcon /> : isIncrease === false ? <DownArrowIcon /> : null}
					</span>
				}
			</div>
		</div>
	)
}

export default CardTwo
