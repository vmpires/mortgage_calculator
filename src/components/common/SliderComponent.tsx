import { Stack, Typography } from '@mui/material';
import Slider from '@mui/material/Slider'

const SliderComponent = (props: { defaultValue: number; max: number; min: number, step: number, label: string, unit: string, amount: number }) => {
    const { defaultValue, max, min, step, label, unit, amount } = props

    return (
        <Stack my={1.8}>
            <Stack gap={1}>
                <Typography variant="h5">{label}</Typography>
                <Typography variant="subtitle1">{unit}{amount}</Typography>
                <Slider
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    marks
                    step={step}
                />
                <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
                    <Typography variant="caption" color="text.secondary">{unit} {max}</Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}

function onChange(e: any, v: number) {

}

export default SliderComponent