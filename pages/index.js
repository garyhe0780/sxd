import r2 from 'r2';

import Layout from '../components/Layout';
import Topic from '../components/Topic';

import config from '../config';

const Index = ({topics}) => (
    <Layout>
        <div className="px-4 bg-grey-dark">
            <div className="d-lg-flex container-xl">
                {topics.map((topic, key) => ((
                    <Topic item={topic} key={key} index={key} />
                )))}
            </div>
        </div>
        <style jsx>{`
            .px-4 {
                padding: 0 16px;
            }
            .bg-grey-dark {
                background-color: #24292e;
            }
            .container-xl {
                max-width: 1280px;
                width: 100%;
                margin: 0 auto;
            }
            .d-lg-flex {
                display: flex;
                flex-wrap: wrap;
            }
        `}
        </style>
    </Layout>
);

Index.getInitialProps = async function() {
  const top20 = await r2(`${config.mockUrl}/top20`).json;
  const topics = await r2(`${config.mockUrl}/topics`).json;

  console.log(`Show data fetched. Count: ${topics.data.length}`);

  return { top20: top20.data, topics: topics.data };
};

export default Index;
