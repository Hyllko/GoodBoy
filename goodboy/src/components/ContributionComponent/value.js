import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formShelter, formStage, formUser } from "../../store/rootSlice";
import { validate } from "../errorsChecker";

import { getShelter } from "../api";

const ContributionValue = ({ type, submitButton }) => {
	const dispatch = useDispatch();
	const updateValue = useSelector((state) => state.GoodFormUserInfo.value);
	const shelterID = useSelector((state) => state.GoodFormUserInfo.shelterID);
	const shelter = useSelector((state) => state.Shelter);

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState({});
	const [selectOwn, setSelectOwn] = useState(false);

	const [formData, setFormData] = useState({
		shelterID: shelterID || "",
		value: updateValue || "",
	});
	const [shelters, setShelters] = useState([]);
	const [name, setName] = useState(shelter);

	// update fomData
	const handleChange = (e) => {
		setSelectOwn(false);
		const element = e.target;
		if (element.tagName === "OPTION") {
			setFormData({
				...formData,
				shelterID: +element.id,
			});
			setName(element.value);
		} else if (element.tagName === "INPUT") {
			setFormData({
				...formData,
				value: element.value.replace(" €", ""),
			});
		}
	};
	const hadleChangeOwn = (e) => {
		handleChange(e);
		setSelectOwn(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(formData));
		if (type === "whole" && name === "") {
			setIsSubmitted(false);
		} else {
			setIsSubmitted(true);
		}
	};
	// use effect
	useEffect(() => {
		getShelter(setShelters);
	}, []);

	useEffect(() => {
		if (!errors.value && isSubmitted) {
			dispatch(formStage(2));
			dispatch(formShelter(name));
			dispatch(
				formUser({
					value: formData.value,
					shelterID: formData.shelterID,
				})
			);
		}
	}, [formData, isSubmitted, dispatch, errors, name]);

	// loop for inputs
	const valueInput = () => {
		const value = ["5", "10", "20", "30", "50", "100"];
		return value.map((num, i) => (
			<input
				key={i + 1}
				className={formData.value === num ? "value--active" : ""}
				type="button"
				value={num + " €"}
				onClick={(e) => handleChange(e)}
			/>
		));
	};
	return (
		<div>
			<form className="value" onSubmit={(e) => handleSubmit(e)}>
				<section>
					<div className="shelter">
						<small>O projekte</small>
						<small>{type === "single" ? "Nepovinné" : "Povinné"}</small>
					</div>
					<p className="error">
						{type === "whole" && name === "" && "* vyberte útulok zo zoznamu"}
					</p>
					<label className="form-select">
						Útulok
						<select className="select-form">
							<option>Vyberte útulok zo zoznamu</option>
							{shelters.map((shelter, i) => (
								<option
									key={i}
									id={shelter.id}
									onClick={(e) => handleChange(e)}
								>
									{shelter.name}
								</option>
							))}
						</select>
					</label>
				</section>
				<p className="error">{errors.value}</p>
				<h3>Suma, ktorou chcem prispieť</h3>

				<div className="value-items">
					{valueInput()}

					{selectOwn === true ? (
						<input
							className="value--active"
							type="number"
							placeholder="___€"
							value={!formData.value ? "" : formData.value}
							onClick={hadleChangeOwn}
							onChange={hadleChangeOwn}
						/>
					) : (
						<input
							className=""
							type="number"
							placeholder="___€"
							onChange={hadleChangeOwn}
							onClick={hadleChangeOwn}
						/>
					)}
				</div>

				<div className="form-btn form-btn--first">
					<input
						className="btn form-btn--next form-btn--next"
						type="submit"
						value="Pokračovať"
					/>
				</div>
			</form>
		</div>
	);
};

export default ContributionValue;
