import Link from 'next/link';

export default ({item}) => (
    <article className="topic col-xl-3 mx-2 mt-4">
        <Link href="/">
            <a>
                <div className="position-absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
                    <img src={item.imgUrl} alt={item.title} className="width-fit mx-auto" />
                </div>
                <div className="z-index-100">
                    <div>
                        <h1>{item.title}</h1>
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
            },
            .width-fit {
                width: 100%;
            }
            .mx-auto {
                margin: 0 auto;
            }
            .fl-g-2 {
                flex-grow: 2;
            }
            .mx-2 {
                margin: 0 8px;
            }
            .mt-4 {
                margin: 16px 0 0; 
            }
            .position-absolute {
                position: absolute;
            }
            .top-0 {
                top: 0;
            }
            .right-0 {
                right: 0;
            }
            .bottom-0 {
                bottom: 0;
            }
            .left-0 {
                left: 0;
            }
            .overflow-hidden {
                overflow: hidden;
            }
            .z-index-100 {
                z-index: 100;
            }
            
        `}
        </style>
    </article>
);
