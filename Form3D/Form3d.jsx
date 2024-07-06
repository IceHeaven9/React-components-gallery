export const Form3d = () => {
	const cubes = [
		{ id: 1, class: "cube-1 w-100" },
		{
			id: 2,
			class: "cube-2 w-100",
			content: (
				<label htmlFor="name" className="label">
					Nombre
				</label>
			),
		},
		{ id: 3, class: "cube-3 w-100" },
		{ id: 4, class: "cube-4 w-300" },
		{
			id: 5,
			class: "cube-5 w-300",
			content: (
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Nombre Completo *"
					className="field"
					required
				/>
			),
		},
		{ id: 6, class: "cube-6 w-180" },
		{ id: 7, class: "cube-7 w-120" },
		{ id: 8, class: "cube-8 w-100" },
		{ id: 9, class: "cube-9 w-300" },
		{
			id: 10,
			class: "cube-10 w-100",
			content: (
				<label htmlFor="email" className="label">
					E-mail
				</label>
			),
		},
		{ id: 11, class: "cube-11 w-300" },
		{
			id: 12,
			class: "cube-12 w-300",
			content: (
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Tu E-mail *"
					className="field"
					required
				/>
			),
		},
		{ id: 13, class: "cube-13 w-100" },
		{ id: 14, class: "cube-14 w-100" },
		{
			id: 15,
			class: "cube-15 w-100",
			content: (
				<input
					type="text"
					name="gossip"
					id="gossip"
					placeholder=""
					className="field"
				/>
			),
		},
		{ id: 16, class: "cube-16 w-300" },
		{ id: 17, class: "cube-17 w-300" },
		{ id: 18, class: "cube-18 w-300" },
		{ id: 19, class: "cube-19 w-100" },
		{
			id: 20,
			class: "cube-20 w-100",
			content: (
				<label htmlFor="message" className="label">
					Mensaje
				</label>
			),
		},
		{ id: 21, class: "cube-21 w-300" },
		{
			id: 22,
			class: "cube-22 w-300",
			content: (
				<input
					type="text"
					name="message"
					id="message"
					placeholder="Mensaje ( Min-3 / Max-400 ) *"
					className="field textarea"
					required
					minLength={3}
					maxLength={400}
				></input>
			),
		},
		{ id: 23, class: "cube-23 w-100" },
		{ id: 24, class: "cube-24 w-100" },
		{ id: 25, class: "cube-25 w-100" },
		{ id: 27, class: "cube-27 w-100" },
		{
			id: 28,
			class: "cube-28 w-100",
			content: (
				<label htmlFor="gossip" className="label">
					Telefono
				</label>
			),
		},
		{ id: 29, class: "cube-29 w-300" },
		{ id: 30, class: "cube-30 w-300" },

		{
			id: 31,
			class: "cube-31 w-300",
			content: (
				<input
					type="text"
					name="gossip"
					id="gossip"
					placeholder="+34 660-750-000 ( opcional )"
					className="field"
				/>
			),
		},
		{ id: 23, class: "cube-23 w-100" },
		{ id: 25, class: "cube-25 w-100" },
		{ id: 23, class: "cube-23 w-100" },
		{ id: 27, class: "cube-27 w-100" },
		{ id: 27, class: "cube-27 w-100" },
		{
			id: 32,
			class: "cube-28 w-100",
			content: (
				<label htmlFor="gossip" className="label">
					Empresa
				</label>
			),
		},
		{ id: 33, class: "cube-29 w-300" },
		{ id: 34, class: "cube-30 w-300" },
		{
			id: 35,
			class: "cube-31 w-300",
			content: (
				<input
					type="text"
					name="gossip"
					id="gossip"
					placeholder="Nombre de la empresa ( opcional )"
					className="field"
				/>
			),
		},
		{ id: 36, class: "cube-32 w-300" },
		{
			id: 37,
			class: "cube-33 w-300",
			content: (
				<button id="contact-stack-button" type="submit" className="button">
					Enviar
				</button>
			),
		},
	];

	const renderCube = (cubeClass, content = null) => (
		<div className={`${cubeClass} cube`}>
			<div className="front">{content}</div>
			<div className="back"></div>
			<div className="top"></div>
			<div className="bottom"></div>
			<div className="left"></div>
			<div className="right"></div>
		</div>
	);

	return (
		<>
			<form id="contact-stack-form" className="form" method="POST">
				{cubes.map((cube) => renderCube(cube.class, cube.content))}
			</form>
		</>
	);
};
