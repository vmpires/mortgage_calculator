import { Stack } from '@mui/material'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
    return (
        <>
            <SliderComponent label="Home Value" unit="R$" amount={450000} defaultValue={500000} min={100000} max={1000000} step={50000} />
            <SliderComponent label="Down Payment" unit="R$" amount={150000} defaultValue={500000} min={100000} max={1000000} step={50000} />
            <SliderComponent label="Loan Amount" unit="R$" amount={300000} defaultValue={500000} min={100000} max={1000000} step={50000} />
        </>
    )
}


export default SliderSelect