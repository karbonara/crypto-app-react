import './live.css';

function TickerLive({ dataCrtypto }) {
    return (
        <>
            <div className="marquee">
                <span>
                    {dataCrtypto
                        .slice(0, 8)
                        .map((coinLive) => (
                            <div className='live-items' key={coinLive.name}>
                                <img width={22} src={coinLive.imageUrl} alt={coinLive.name} />
                                <p>{coinLive.name}</p>
                                <p> $ {coinLive.price}</p>
                            </div>
                        ))}
                </span>
            </div>
        </>
    );
}

export default TickerLive;
