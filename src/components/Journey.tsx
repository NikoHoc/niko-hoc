import { journey } from '../data/index';

const Journey = () => {
    return (
        <section id="journey" className="flex flex-col items-center justify-between gap-10 py-10 md:py-0 mb-5">
            <div className="border-b-2 pb-2">
                <h1 className="font-poppins font-bold text-4xl">Journey</h1>
            </div>
            <div>
                {journey.map((item) => (
                    <div key={item.id} className="mb-8">
                        <h2 className="text-2xl font-semibold text-blue-500">{item.yearRange}</h2>   
                    </div>
                ))
                }
            </div>
        </section>
    );
}

export default Journey;