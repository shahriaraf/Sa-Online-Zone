import Banner from './Banner';
import ClientReviews from './ClientReviews';
import CTA from './CTA';
import FAQ from './FAQ';
import Feedback from './FeedBack';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner>\</Banner>
            <Feedback></Feedback>
            <CTA></CTA>
            <ClientReviews></ClientReviews>
            <WhyChooseUs></WhyChooseUs>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;