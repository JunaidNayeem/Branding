import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Integrating my Web Application with my skills
      </h5>
      <ul className="flex justify-center">
        {/* {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={logo} width={134} height={28} alt={`Logo-${i}`} />
          </li>
        ))} */}
        <p align="center">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=git,react,nextjs,javascript,typescript,nodejs,express,mongo,tailwind,postgres,html,css,googlecloud,vercel,netlify" />
          </a>
        </p>
      </ul>
    </div>
  );
};

export default CompanyLogos;
