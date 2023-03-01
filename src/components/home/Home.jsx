import { useMemo, useState } from 'react';
import InputRange from '../InputRange/InputRange';
import './Home.scss';

export default function Home() {

    const [storage, setStorage] = useState(100);
    const [transfer, setTransfer] = useState(100);
    const [typeBunny, setTypeBunny] = useState({ name: 'HDD', coef: 0.01 });
    const [typeScaleway, setTypeScaleway] = useState({ name: 'Multi', coef: 0.06 });
    let tmp;

    const backblaze = useMemo(() => {
        tmp = 0.005 * storage + 0.01 * transfer;
        if (tmp < 7)
            tmp = 7;
        return tmp;
    }, [storage, transfer])
    const bunny = useMemo(() => {
        tmp = typeBunny.coef * storage + 0.01 * transfer;
        if (tmp > 10)
            tmp = 10;
        return tmp;
    }, [storage, transfer,typeBunny])
    const scaleway = useMemo(() => {
        return (storage > 75 ? storage - 75 : 0) * typeScaleway.coef + (transfer > 75 ? transfer - 75 : 0) * 0.02;
    }, [storage, transfer,typeScaleway])
    const vultr = useMemo(() => {
        tmp = (+storage + +transfer) * 0.01;
        if (tmp < 5)
            tmp = 5;
        return tmp;
    }, [storage, transfer])

    let providers = [
        { name: 'backblaze' },
        { name: 'bunny', additionalParams: [{ name: 'HDD', coef: 0.01 }, { name: 'SSD', coef: 0.02 }] },
        { name: 'scaleway', additionalParams: [{ name: 'Multi', coef: 0.06 }, { name: 'Single', coef: 0.03 }] },
        { name: 'vultr' }
    ];
    let prices = [backblaze, bunny, scaleway, vultr];

    console.log(scaleway);

    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <InputRange type='Storage' setVal={setStorage} />
                    <InputRange type='Transfer' setVal={setTransfer} />
                </div>
                <figure className='chart'>
                    {
                        providers.map((provider, i) =>
                            <div className="row" key={i}>
                                <div className='row_name'>
                                    {provider.name}
                                    {
                                        provider.additionalParams ?
                                            <p className='row_name_additionalParams'>
                                                {
                                                    provider.additionalParams.map(parameter =>
                                                        <span className={typeBunny.name === parameter.name || typeScaleway.name === parameter.name ? 'active' : ''} onClick={() => provider.name === 'bunny' ? setTypeBunny(parameter) : setTypeScaleway(parameter)} key={parameter.name}>{parameter.name}</span>
                                                    )
                                                }
                                            </p>
                                            : ''
                                    }
                                </div>
                                <div className="row_input_block">
                                    <input type="range" className={prices[i] === Math.max(...prices) ? 'max' : ''} style={{ width: (prices[i] * 100 / Math.max(...prices)) + '%' }} max={Math.max(...prices)} disabled />
                                    <span className='price'>{prices[i]}$</span>
                                </div>
                            </div>
                        )
                    }
                </figure>
            </div>
        </div>
    )
}