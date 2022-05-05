import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main/main";
import Layout from "../layout/layout";

function App() {

    const [dataCrtypto, setDataCrtypto] = useState([]);

    const URL = 'https://www.cryptocompare.com/';

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=30&tsym=USD')
            .then(({ data }) => {
                const coins = data.Data.map((coin) => {
                    const obj = {
                        name: coin.CoinInfo.Name,
                        FullName: coin.CoinInfo.FullName,
                        imageUrl: `${URL}/${coin.CoinInfo.ImageUrl}`,
                        price: coin.RAW.USD.PRICE.toFixed(4),
                        volume24hour: coin.RAW.USD.VOLUME24HOUR.toFixed(1),
                    };
                    return obj;
                })
                setDataCrtypto(coins)
            });
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout dataCrtypto={dataCrtypto} />} >
                    <Route index element={<Main dataCrtypto={dataCrtypto} />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
