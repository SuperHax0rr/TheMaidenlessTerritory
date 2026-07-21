import "./CRT.css";

interface CRTProps{

    onExit: () => void;

}

function CRT({ onExit }: CRTProps){

    return(

        <div className="crt-workspace">

            <button
                className="exit-button"
                onClick={onExit}
            >

                [ EXIT ]

            </button>

            <div className="crt-menu">

                <button>Photography</button>

                <button>Projects</button>

                <button>ASCII</button>

                <button>Experiments</button>

                <button>Archives</button>

            </div>

        </div>

    );

}

export default CRT;