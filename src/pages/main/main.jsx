import CoinsTable from '../../components/coins-table/coins-table';
import {
    MainWrapperBg,
    MainWrapper
} from './main-styled';

function Main({ dataCrtypto }) {


    return (
        <>
            <MainWrapperBg>
                <MainWrapper>
                    <CoinsTable dataCrtypto={dataCrtypto} />
                </MainWrapper>
            </MainWrapperBg>

        </>
    );
}

export default Main;
