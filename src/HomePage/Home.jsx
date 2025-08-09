import Banner from './Banner';
import ClientReviews from './ClientReviews';
import ImportantServices from './ImportantServices';
import PricingPlan from './PricingPlan';
import RecentPost from './RecentPost';
import WhatWeProvide from './WhatWeProvide';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner>\</Banner>
            <WhyChooseUs></WhyChooseUs>
            <WhatWeProvide></WhatWeProvide>
            <PricingPlan></PricingPlan>
            <ImportantServices></ImportantServices>
            <RecentPost></RecentPost>
            <ClientReviews></ClientReviews>

        </div>
    );
};

export default Home;