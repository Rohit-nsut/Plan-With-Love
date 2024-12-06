import Card from "./Card";

const Tours = (props) => {

    const data = props.tours;

    return (
        <div className="">
            <div className="flex flex-col justify-center items-center">
                <div className="my-10 text-2xl sm:text-5xl md:text-6xl  font-semibold border-[0.3rem]  border-dashed  border-blue-900 sm:py-4 sm:px-20 rounded-2xl transition-all py-2 px-8 sm:font-bold sm:border-[0.4rem]">
                    <h1 className="">Plan With Love</h1>
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    {
                        data.map((tour) => {
                            return <Card {...tour} removeTours={props.removeTour} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Tours;