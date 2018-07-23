export default () => (
	<div className="loader">
		<span className="circle" />
		<span className="circle" />
		<span className="circle" />
		<style jsx>{`
			.loader {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;
			}

			.loader .circle {
				width: 30px;
				height: 30px;
				background: #ccc;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border-radius: 50%;
				transform: scale(0);
			}

			.loader .circle:first-child {
				animation: pulse 1s infinite 0.4s normal ease-in-out;
				background-color: #1ba899;
			}

			.loader .circle:nth-child(2) {
				margin-left: -70px;
				background-color: steelblue;
				animation: pulse 1s infinite normal ease-in-out;
			}

			.loader .circle:nth-child(3) {
				margin-left: 70px;
				background-color: #008f89;
				animation: pulse 1s infinite 0.6s normal ease-in-out;
			}

			@keyframes pulse {
				0% {
					transform: scale(0);
					opacity: 1;
				}
				100% {
					transform: scale(1.3);
					opacity: 0;
				}
			}
		`}</style>
	</div>
);
