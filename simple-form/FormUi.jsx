import "./formUi.css";

export const FormUi = () => {
	return (
		<form className="form">
			<h2 className="title">CONTACTO</h2>
			<p className="p" type="Nombre:">
				<label htmlFor="name" className="label">
					Nombre
				</label>
				<input
					type="text"
					id="name"
					className="input"
					placeholder="Escribe tu nombre aqui..."
				></input>
			</p>
			<p className="p" type="E-mail:">
				<label htmlFor="email" className="label">
					email
				</label>
				<input
					type="email"
					id="email"
					className="input"
					placeholder="Escribe tu e-mail aqui..."
				></input>
			</p>
			<p className="p" type="Mensaje:">
				<label htmlFor="message" className="label">
					mensaje
				</label>
				<textarea
					id="message"
					className="input"
					placeholder="Que te gustaria contarnos..."
				></textarea>
			</p>
			<button className="button">Enviar mensaje</button>
			<div className="fa-container">
				<span className="span fa fa-phone"></span>600 500 000
				<span className="span fa fa-envelope-o"></span> contacto@compañia.com
			</div>
		</form>
	);
};
