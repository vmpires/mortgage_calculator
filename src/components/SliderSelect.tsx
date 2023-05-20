import SliderComponent from './common/SliderComponent'
import { DataProps } from '../App'

const SliderSelect = (props: DataProps) => {

    const { data, setData } = props
    const bankLimit = 1000000

    return (
        <>
            <SliderComponent
                label="Home Value"
                unit="R$"
                amount={data.homeValue}
                defaultValue={data.homeValue}
                value={data.homeValue}
                min={100000}
                max={bankLimit}
                step={50000}
                onChange={(e: any, value: any) => setData({
                    ...data,
                    downPayment: value * 0.2,
                    loanAmount: value * 0.8,
                    homeValue: value
                })}
            />
            <SliderComponent
                label="Down Payment"
                unit="R$"
                amount={data.downPayment}
                defaultValue={data.downPayment}
                value={data.downPayment}
                min={0}
                max={data.homeValue}
                onChange={(e: any, value: any) => setData({
                    ...data,
                    loanAmount: (data.homeValue - value),
                    downPayment: value
                })}
                step={50000}
            />
            <SliderComponent
                label="Loan Amount"
                unit="R$"
                amount={data.loanAmount}
                value={data.loanAmount}
                defaultValue={data.loanAmount}
                min={0}
                max={data.homeValue}
                onChange={(e: any, value: any) => setData({
                    ...data,
                    downPayment: (data.homeValue - value),
                    loanAmount: value
                })}
                step={50000}
            />
            <SliderComponent
                label="Interest Rate"
                unit="%"
                amount={data.interestRate}
                value={data.interestRate}
                defaultValue={data.interestRate}
                min={2}
                max={18}
                onChange={(e: any, value: any) => setData({
                    ...data,
                    interestRate: value
                })}
                step={0.5}
            />
        </>
    )
}


export default SliderSelect