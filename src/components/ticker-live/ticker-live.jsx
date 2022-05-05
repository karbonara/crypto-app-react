function TickerLive({ dataCrtypto }) {
    return (
        <>
            <div style={{ display: 'flex' }}>
                {dataCrtypto
                    .slice(0, 5)
                    .map((coinLive) => (
                        <div key={coinLive.name}>
                            <p>{coinLive.name}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default TickerLive;
