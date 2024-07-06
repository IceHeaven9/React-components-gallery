import "./lineBar.css";

export const LineBar = ({ title, percent }) => {
	return (
		<div className="linebar-container">
			<div className="linebar-header">
				<span className="linebar-title">{title}</span>
				<span className="linebar-percent">{percent}</span>
			</div>
			<div className="linebar-background">
				<div className={`linebar-fill`} style={{ width: `${percent}` }}></div>
			</div>
		</div>
	);
};
