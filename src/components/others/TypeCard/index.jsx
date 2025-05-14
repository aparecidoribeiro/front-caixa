import { ArrowRight } from 'lucide-react';

const TypeCard = () => {
    return (
        <div className='grid grid-cols-[auto_auto_auto]'>
            <div className='col-start-1 self-center w-8 h-8 rounded-[50%] bg-green flex justify-center'>
                <img
                    src="./src/assets/pix-icon.svg"
                    alt="Icone de forma de pagamento"
                    className='w-5'
                />
            </div>
            <span className='col-start-2'>
                <h4 className='flex items-center gap-1 text-sm font-normal'>Pagamento via <ArrowRight size={16} /> Pix</h4>
                <h3 className='text-[11px] italic'>Terça-feira, 17:31</h3>
            </span>
            <h4 className='justify-end text-sm col-start-3'>R$100,00</h4>
        </div>
    )
}

export default TypeCard