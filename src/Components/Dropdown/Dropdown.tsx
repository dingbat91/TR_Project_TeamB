import React from "react";
import { DropdownProps } from "./type";

const Dropdown: React.FC<DropdownProps> = ({
	labelText,
	name,
	selectText,
	value,
	onChangeHandler,
	options,
}) => {
	return (
		<div>
			{labelText && <label>{labelText} </label>}
			<span>
				<select
					name={name}
					aria-label='select-options'
					className='select-Input'
					defaultValue={selectText ? "" : value}
					onChange={({ target }) => {
						onChangeHandler(target.value);
					}}
				>
					{selectText && (
						<option disabled value=''>
							{selectText}
						</option>
					)}
					{options.map((option, index) => {
						return (
							<React.Fragment key={`dropdown-${index}-${option}`}>
								<option value={option.id}>{option.name}</option>
							</React.Fragment>
						);
					})}
				</select>
			</span>
		</div>
	);
};

export default Dropdown;
