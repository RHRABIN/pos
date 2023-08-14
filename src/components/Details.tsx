import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetSinglePostQuery } from '../redux/categories/categoriesApi';

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { data, isLoading } = useGetSinglePostQuery(id);
    let content = null;
    if (isLoading) content = <p>Loading...</p>
    if (!isLoading && data) {
        const { name, images, price } = data?.result || {};
        content = <div className='text-center'>
            {
                data?.breadcrumb?.map((b: any) => <Link to="" className='text-blue-500 text-xl'>{b.title} </Link>)
            }
            <img src={images?.[0]} alt="" width={600} />
            <h1 className='text-[2rem]'> {name}</h1>
            <p className='text-2xl mb-4'>{price} tk</p>
        </div>
    }

    const handleBack = () => {
        navigate(-1)
    }
    console.log(data)
    return (
        <div>
            {content}
            <button onClick={handleBack} className='p-2 border bg-green-400 text-[#fff]'>Go back</button>
        </div>
    );
};

export default Details;