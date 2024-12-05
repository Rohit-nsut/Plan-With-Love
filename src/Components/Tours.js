import Card from "./Card";

const Tours = (props) => {

    const data = props.tours;

    return (
        <div className="">
            <div className="flex flex-col justify-center items-center">
                <div className="my-10 text-6xl  font-bold border-[7px]  border-dashed  border-blue-900   py-4 px-20 rounded-2xl">
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