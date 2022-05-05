function CoinsTable({ dataCrtypto }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>FullName</th>
                        <th>Цена</th>
                        <th>Объем (24 ч)</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCrtypto.map((row) => (
                        <tr key={row.name}>
                            <td style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}> <img width={24} src={row.imageUrl} alt={row.name} /> {row.name}</td>
                            <td>{row.FullName}</td>
                            <td>$ {row.price}</td>
                            <td>{row.volume24hour}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default CoinsTable;
