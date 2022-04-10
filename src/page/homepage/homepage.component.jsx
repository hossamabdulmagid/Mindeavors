import Logohomepage from '../../homepage.png'
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";

const Homepage = () => {
    let CompanyName = 'How We Deliver\n';
    return (
        <RapperHeaderComponent className={'container'}>
            <img src={Logohomepage} alt={"HomePage"} />
      <h1>
          {CompanyName.toUpperCase()}
      </h1>
            <span className={"blueLine"}></span>
            <h3>
                Through our diversity of knowledge in multiple domains, we do it right! We deliver business and
                technology transformation from start to finish, via agile methodologies, and strong customer alliance
                and involvement techniques, engineering excellence tools as well as hybrid teams, we deliver the best
                solutions that dissolve both business challenges and breakpoints via technology.
            </h3>
        </RapperHeaderComponent>
    )
}
export default Homepage;