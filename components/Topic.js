import Link from 'next/link';

export default ({item, index}) => (
    <article className="topic col-xl-3 mx-2 mt-4">
        <Link href="/">
            <a className="position-relative height-full d-flex no-underline">
                <div className="position-absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
                    <img src={item.imgUrl} alt={item.title} className="width-fit mx-auto" />
                </div>
                <div className="z-index-100">
                    <div className={`p-6 overflow-hidden ${index > 0 ? 'text-gray-white' : 'text-gray-dark'}`}>
                        <h2 className="h2">{item.title}</h2>
                        <p className="f5 mb-0">{item.content}</p>
                    </div>
                    <div></div>
                </div>
            </a>
        </Link>
        <style jsx>{`
            .topic {
                width: 100%;
                display: block;
                position: relative;
            }
        `}
        </style>
    </article>
);
