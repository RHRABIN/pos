import { Link } from 'react-router-dom';
import { useGetAllCategoryQuery } from '../redux/categories/categoriesApi';

const Test = () => {
    const { data, isLoading } = useGetAllCategoryQuery();
    let content = null;
    console.log(data)
    if (isLoading) content = <p>Loading...</p>
    if (!isLoading && data) {
        content = <div className='grid grid-cols-1 md:grid-cols-4 gap-2' >
            {
                data?.result?.data?.map((d: any) => <Link to={`/details/${d.slug}`} className='hover:bg-gray-100 hover:cursor-pointer' key={d.id} style={{ padding: "2rem", border: "1px solid red", marginBottom: "1rem" }}>
                    <h1 className='text-[1rem] '>{d?.name}</h1>
                    <img src={d?.images?.[0]} alt="" width={200} />
                    <p>{d?.name}</p>

                </Link>)
            }
        </div>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Test;