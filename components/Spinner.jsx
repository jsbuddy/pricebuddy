export default () => (
    <div className="container">
        <div className="loader-wrapper">
            <div className="loader"></div>
        </div>
        <style jsx>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .loader {
                width: 200px;
                height: 200px;
                border-radius: 50%;
                border-top: 2px solid steelblue;
                border-bottom: 2px solid transparent;
                border-left: 2px solid transparent;
                border-right: 2px solid transparent;
                position: relative;
                animation: spin 3s linear infinite forwards;
            }
            
            .loader::before,
            .loader::after {
                content: '';
                position: absolute;
                border-radius: 50%;
                border-top: 2px solid inherit;
                border-bottom: 2px solid transparent;
                border-left: 2px solid transparent;
                border-right: 2px solid transparent;
            }

            .loader::before {
                top: 7px;
                left: 7px;
                width: 178px;
                height: 178px;
                border-top: 2px solid tomato;
                animation: spin 2s linear infinite forwards;
            }

            .loader::after {
                top: 16px;
                left: 16px;
                width: 160px;
                height: 160px;
                border-top: 2px solid yellowgreen;
                animation: spin 1s linear infinite forwards;
            }

            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }

        `}</style>
    </div>
)