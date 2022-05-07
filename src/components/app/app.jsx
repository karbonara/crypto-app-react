import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import { URL } from '../../utils/utils';
import About from '../../pages/about/about';

function App() {

    const [dataCrtypto, setDataCrtypto] = useState([]);

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD')
            .then(({ data }) => {
                const coins = data.Data.map((coin) => {
                    const obj = {
                        name: coin.CoinInfo.Name,
                        FullName: coin.CoinInfo.FullName,
                        imageUrl: `${URL}/${coin.CoinInfo.ImageUrl}`,
                        price: coin.RAW.USD.PRICE.toFixed(4),
                        volume24hour: coin.RAW.USD.VOLUME24HOUR.toFixed(1),
                        change24hour: coin.DISPLAY.USD.CHANGEPCT24HOUR,
                        changeDay: coin.DISPLAY.USD.CHANGEDAY,
                    };
                    return obj;
                })
                setDataCrtypto(coins);
            });
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout dataCrtypto={dataCrtypto} />} >
                    <Route index element={<Main dataCrtypto={dataCrtypto} />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
