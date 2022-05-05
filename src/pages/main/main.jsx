import CoinsTable from '../../components/coins-table/coins-table';
import {
    MainWrapper
} from './main-styled';

function Main({ dataCrtypto }) {


    return (
        <>
            <MainWrapper>
                <CoinsTable dataCrtypto={dataCrtypto} />
            </MainWrapper>

        </>
    );
}

export default Main;
