import {
    CoinsTableTd,
    CoinsTableTr,
    CoinsTableHeaderTr,
    CoinsTableHeaderTh
} from './coins-table-styled';

function CoinsTable({ dataCrtypto }) {
    return (
        <>
            <table style={{ borderSpacing: '0', borderCollapse: 'collapse', width: '80vw' }}>
                <thead>
                    <CoinsTableHeaderTr>
                        <CoinsTableHeaderTh>Наименование</CoinsTableHeaderTh>
                        <CoinsTableHeaderTh>Полное название</CoinsTableHeaderTh>
                        <CoinsTableHeaderTh>24ч %</CoinsTableHeaderTh>
                        <CoinsTableHeaderTh>Цена</CoinsTableHeaderTh>
                        <CoinsTableHeaderTh>Объем (24 ч)</CoinsTableHeaderTh>
                        <CoinsTableHeaderTh>Изменение цены (24 ч)</CoinsTableHeaderTh>
                    </CoinsTableHeaderTr>
                </thead>
                <tbody>
                    {dataCrtypto.map((row) => (
                        <CoinsTableTr key={row.name}>
                            <CoinsTableTd>
                                <div style={{
                                    alignItems: 'center',
                                    display: 'flex'
                                }}>
                                    <img width={24} src={row.imageUrl} alt={row.name} /> {row.name}
                                </div>
                            </CoinsTableTd>
                            <CoinsTableTd>{row.FullName}</CoinsTableTd>
                            <CoinsTableTd>{row.change24hour}</CoinsTableTd>
                            <CoinsTableTd>$ {row.price}</CoinsTableTd>
                            <CoinsTableTd>{row.volume24hour}</CoinsTableTd>
                            <CoinsTableTd>{row.changeDay}</CoinsTableTd>
                        </CoinsTableTr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default CoinsTable;
