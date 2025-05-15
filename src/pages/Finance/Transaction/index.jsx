
import FilterDate from '@components/others/FilterDate'

const Trasaction = () => {

    const options = [
        {
            name: "7 dias",
            date: 7
        },
        {
            name: "28 dias",
            date: 28
        },
        {
            name: "3 meses",
            date: 90
        },
        {
            name: "Personalizar",
            date: undefined
        }
    ]

    return (
        <section>
            <div>
                <h3 className='text-xs'>Filtrar data</h3>
                <FilterDate
                    options={options}
                />
            </div>
        </section>
    )
}

export default Trasaction