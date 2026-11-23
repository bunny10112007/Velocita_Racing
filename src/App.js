import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './pages/functions/ScrollToTop'
import ScrollTopRefresh from './pages/functions/ScrollTopRefresh'
import Home from './pages/Home'
import About from './pages/About'
import OurTeam from './pages/OurTeam'
import Faculty from './pages/Faculty';
import TeamPage from './pages/TeamPage';
import Privacy from './pages/Privacy'
import TermsOfUse from './pages/TermsOfUse'
import ErrorPage404 from './pages/404';
import Careers from './pages/Careers';
import Recruit from './pages/Recruit25';
import PartnerWithUs from './pages/PartnerWithUs';
import OurSponsors from './pages/OurSponsors';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import WaysToSponsor from './pages/WaysToSponsor';
import ContactSponsoraTeam from './pages/ContactSponsorTeam';
import Register from './pages/Register25';
import Crowdfunding from './pages/Crowdfunding';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import FSeries from './pages/FSeries';
import VerifyPayment from './pages/VerifyPayment';
import Development from './pages/Development'
import Events from './pages/Events';
import Quiz from './pages/Quiz';
import SponsorDetails from './pages/SponsorDetails';
import Upload from './pages/Upload';
import InternalFeedback from './pages/InternalFeedback';
import SponsorPage from './pages/SponsorPage';
import Waystosponsor from './pages/WaysToSponsor';
import Stickers from './pages/Stickers';
import Inventory from './pages/Inventory';
import History from './pages/History'

const Navigation = withRouter(({location})=>{
  return(
    location.pathname !== '/connect/newsletter/' &&  location.pathname !== '/events/feedback/internal/' && location.pathname !== '/inventory/' && location.pathname !== '/careers/recruitment/2022/quiz' && location.pathname !== '/crowdfunding/upi/checkout/'  && location.pathname !== '/crowdfunding/upi/verify-payment/' && location.pathname !== '/crowdfunding/upi/checkout/new-payment/' && location.pathname !== '/partner-with-us/contact-team/' &&  location.pathname !== '/careers/recruitment/2024/register/' && location.pathname !== '/connect/contact-us/' && <Navbar />
  )
})

const Floor = withRouter(({location})=>{
  return(
      location.pathname !== '/careers/recruitment/2024/register/' && location.pathname !== '/inventory/' &&  location.pathname !== '/partner-with-us/contact-team/' &&  location.pathname !== '/events/feedback/internal/' && location.pathname !== '/upload'  && location.pathname !== '/connect/newsletter/' && location.pathname !== '/connect/contact-us/' && location.pathname !== '/careers/recruitment/2022/quiz' &&  location.pathname !== '/crowdfunding/upi/checkout/'  && location.pathname !== '/crowdfunding/upi/verify-payment/' && location.pathname !== '/crowdfunding/upi/checkout/new-payment/'&& <Footer />
  )
})


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Velocita Racing | FSAE Team | IN </title>
        <meta name="description" content="Official Web site of Velocita Racing - FSAE Team - Bangalore, India" />
      </Helmet>
      <ScrollToTop />
      <ScrollTopRefresh />
      <Navigation />
      <Route render = {({location}) => (
        <Switch location = {location}>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/our-team/' exact component={OurTeam} />
          <Route path= '/our-team/:id' component={TeamPage} />
          <Route path='/faculty/:id' exact component={Faculty} />
          <Route path='/series/F/' exact component={FSeries} />
          <Route path='/research-and-development/' exact component={Development} />        
          <Route path='/careers/' exact component={Careers} />        
          <Route path='/careers/recruitment/' exact component={Recruit} />
          <Route path='/careers/recruitment/2025/register/' exact component={Register} />
          {/* <Route path='/careers/recruitment/2024/register/' exact component={Register} /> */}
          <Route path='/upload' exact component={Development} />
          {/* <Route path='/careers/recruitment/2022/quiz' exact component={Quiz} /> */}
          <Route path='/partner-with-us/' exact component={PartnerWithUs} />
          <Route path='/history/' exact component={History} />
          <Route path='/partner-with-us/ways-to-sponsor/' exact component={Waystosponsor} />
          <Route path='/partner-with-us/contact-team/' exact component={ContactSponsoraTeam} />
          <Route path='/sponsors/' exact component={OurSponsors} />
          <Route path= '/sponsors/:id' component={SponsorPage} />
          <Route path='/crowdfunding/' exact component={Crowdfunding} />
          <Route path='/crowdfunding/upi/checkout/' exact component={Checkout} />
          <Route path='/crowdfunding/upi/checkout/new-payment/' exact component={Payment} />
          <Route path='/crowdfunding/upi/verify-payment/' exact component={VerifyPayment} />
          <Route path='/crowdfunding/expenses/2022/' exact component={Development} />
          <Route path='/connect/contact-us/' exact component={Contact} />
          <Route path='/connect/newsletter/' exact component={Newsletter} />
          <Route path='/events/' exact component={Development} />
          <Route path='/events/feedback/internal/' exact component={InternalFeedback} />
          <Route path='/privacy' exact component={Privacy} />
          <Route path='/terms-of-use' exact component={TermsOfUse} />
          <Route path='/shop/wallpapers/' exact component={Development} />
          <Route path='/shop/stickers/' exact component={Stickers} />
          <Route path='/blog/' exact component={Development} />
          <Route path='/podcast/' exact component={Development} />
          <Route path='/inventory/' exact component={Inventory} />
          <Route path='/shop/narkha/' exact component={() => { 
              window.location.href = 'https://narkha.com/collections/velocita-racing/'; 
              return null;
          }}/>
          <Route path='*' component={ErrorPage404} />
        </Switch>
        )} />
      <Floor />
    </Router>
  );
}
export default App;